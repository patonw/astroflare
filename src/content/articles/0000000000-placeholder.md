---
slug: placeholder
title: Words, words, words
summary: Laboriosam est ea perferendis impedit. Qui veniam qui consequatur. Voluptas ducimus ipsam alias.
tags:
  - gibberish
  - placeholder
# pubDate: 1970-01-01
---

### This is obviously a placeholder

Qui veniam qui consequatur. Illo eligendi voluptatem officia hic exercitationem libero. Nostrum fugit vero aperiam et ea repudiandae debitis.


### Comments
*Doesn't work*

This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%

> Laboriosam est ea perferendis impedit. Sed autem et aut. Unde sint nobis sit. Sit atque omnis provident sint sint vel asperiores. Quam ipsam omnis ut. Possimus in aut ut.

### Footnotes
*Works!*

__Voluptas ducimus ipsam alias__. Sunt voluptas magni recusandae maxime illum officiis voluptas blanditiis. Perspiciatis quia aut dolores nam aut molestias. Dolorum voluptas ut minus sed occaecati voluptas veniam. Odio est et ipsum deserunt perferendis ex sint.
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.

*inline doesn't work*

You can also use inline footnotes. ^[This is an inline footnote.]

### Links
*Works*

<a href="/article/build-a-blog-1#overview">HTML link</a>

[Markdown link](/article/build-a-blog-2)

### HTML embed
*Works*

<div role="alert" class="alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>
    Est blanditiis possimus ducimus qui officia culpa aut rerum. *Numquam nobis iure* debitis nostrum recusandae assumenda tempora provident. Dolores reiciendis quo repudiandae placeat totam id. Ut aliquam animi est ducimus ipsam necessitatibus quia.
    <a href="/article/build-a-blog-1#overview">Read this</a>
    [Or this](/article/build-a-blog-2)
  </span>
</div>

*anchor link inside html work*

*markdown link inside html __doesn't__ work*

### Code blocks
*Works*

```python
while True:
    user = await getUsername()
    print(f"Lol. Hello, {user}.")
```

### Lists

*numeric list works*

1. Steal underpants
1. ???
1. Profit!

*task list works*
  - [x] Think of some tasks
  - [x] Write them down
  - [ ] Finish them all

*definition list doesn't work*
This is an undefined thing
: this is the definition

### Tables

*Works*

| Item         | Price     | # In stock |
|--------------|-----------|------------|
| Juicy Apples | 1.99      | *7*        |
| Bananas      | **1.89**  | 5234       |

### Callouts

*Doesn't work*

> [!info]
> Here's a callout block.
> It supports **Markdown**, [[Internal link|Wikilinks]], and [[Embed files|embeds]]!
> ![[Engelbart.jpg]]

> [!tip] Callouts can have custom titles
> Like this one.