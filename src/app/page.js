import Blogposts from '@/components/Blogposts';
import Editorial from '@/components/Editorial';
import Hero from '@/components/Hero';
import Learnmore from '@/components/Learnmore';
export default async function Frontpage() {
  let data = await getData();
  return (
    <main>
      <Hero />
      <Blogposts posts={data} />
      <Editorial posts={data} />
      <Learnmore posts={data} />
    </main>
  );
}

// Fetching data function
async function getData() {
  const res = await fetch(
    'http://adventure-glacier.local/wp-json/wp/v2/posts?_fields=,id,excerpt,title,link,_links,featured_media,slug&_embed'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

