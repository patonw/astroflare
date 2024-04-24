import { getCollection, type CollectionEntry } from 'astro:content';
import * as R from 'ramda';

export type Article = CollectionEntry<'articles'>;

// Typescript doesn't support higher-kinded types yet, so a lot of these
// FP expressions can't be type-checked. Try to isolate the ignores in
// lib files, so the rest of the project can type check cleanly.

// @ts-ignore
const byPubDate = R.descend(R.path(['data', 'pubDate']));

const beforeToday = R.pathSatisfies((date: Date) => date < new Date(), ['data', 'pubDate']);

export function asDateString(date?: Date): string | undefined {
  return date?.toUTCString().slice(0,16);
}

export async function getDraftArticles(): Promise<Article[]> {
  const articles = await getCollection('articles');

  return R.reverse(R.filter(R.complement(R.both(
        // @ts-ignore
        R.path(['data', 'pubDate']),
        R.pathSatisfies((date: Date) => date < new Date(), ['data', 'pubDate'])
      )))(articles));
}

export async function getPublishedArticles(): Promise<Article[]> {
  const articles = await getCollection('articles');

  return R.pipe(
      // @ts-ignore
      R.filter(R.path(['data', 'pubDate'])),
      R.filter(beforeToday),
      R.sort(byPubDate),
  )(articles);
}