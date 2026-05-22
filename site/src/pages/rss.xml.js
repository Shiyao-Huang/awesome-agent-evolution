import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';
export async function GET(context) {
  const posts = (await getCollection('blog')).filter((p)=>!p.data.draft).sort((a,b)=>b.data.pubDate.valueOf()-a.data.pubDate.valueOf());
  return rss({
    title: 'Self Evolve 博客',
    description: site.description,
    site: context.site,
    items: posts.map((post)=>({ title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: `/blog/${post.id}/` }))
  });
}
