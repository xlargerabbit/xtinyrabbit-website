import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'xtinyrabbit',
    description: 'Writing about systems programming, developer tooling, and infrastructure.',
    site: context.site!,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/blog/${p.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
