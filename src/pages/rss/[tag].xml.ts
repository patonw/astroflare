import * as R from 'ramda';
import rss from '@astrojs/rss';
import { getTagMap, getPublishedArticles } from '../../lib/data';

export async function getStaticPaths() {
  const tagMap = R.mergeRight(
    await getTagMap(),
    {all: await getPublishedArticles()});
  
  // Limit each feed to the last 20 posts
  const tagHeads = R.map(R.take(20))(tagMap);

  return R.toPairs(tagHeads).map(([tag, articles]) => ({
    params: {tag},
    props: {articles}
  }));
}

export async function GET({params, props, site}) {
  const { tag } = params;
  const { articles } = props;

  return rss({
    title: `/dev/null: ${tag} posts`,
    description: 'The Information Paradox',
    site: site,
    items: articles.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.summary,
      link: `/article/${post.slug}`,
    })),
  });
}
