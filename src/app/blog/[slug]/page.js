import React from 'react';
import '../post.css';

const page = async ({params}) => {
  let data = await getData(params.slug);
  const post = data.find((post) => post.slug === params.slug);
  if (!post) {
    return <h1>There is not post availabe with this slug</h1>;
  }

  return (
      <div className="min-h-screen">
        <div className="w-full  text-center">
          <h1 className="bg-slate-100 text-4xl md:text-5xl py-4 pt-20">{post.title.rendered}</h1>
          <div className="bg-slate-100 metadesc flex gap-5 text-base justify-center items-center text-center">
            <p>28 May 2024</p>
            <p>Techzen</p>
          </div>
          <div className="bg-slate-100 feature-img flex flex-col justify-center items-center py-5">
            {post._links['wp:featuredmedia'] && (
                <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className="w-2/3 rounded-lg"
                />
            )}
          </div>
          <div className="content flex flex-col justify-center items-center text-left leading-[2.5]">
            <div className="content px-5 md:w-[55vw] my-20">
              <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
              {/* <p>{post.content}</p> */}
            </div>
          </div>
        </div>
      </div>
  );
};

export default page;

// Fetching data function
async function getData(params) {
  const res = await fetch(
      `http://adventure-glacier.local/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link,slug,content,_links&_embed&slug=${params}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}