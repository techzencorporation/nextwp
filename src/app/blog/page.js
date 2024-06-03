import Link from 'next/link';
import React from 'react';
import './post.css';

const Blog = async () => {
  let data = await getData();
  return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((post) => (
                  <div className="p-4 lg:w-full md:px-40">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      {post._links['wp:featuredmedia'] && (
                          <Link href={`blog/${post.slug}`}>
                            <img
                                alt="feature-img"
                                className="featureImg flex-shrink-0 rounded-lg md:w-270 md:h-44 object-cover object-center sm:mb-0 mb-4"
                                src={post._embedded['wp:featuredmedia'][0].source_url}
                            />
                          </Link>
                      )}
                      <div className="flex-grow text-left sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-gray-900 hover:text-[#27D07E] cursor-pointer transition-all">
                          {post.title.rendered}
                        </h2>
                        <div
                            className="my-4"
                            dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substring(0, 200)}}
                        />
                        <span className="inline-flex my-2">
                      <Link
                          href={`blog/${post.slug}`}
                          className="text-[#27D07E] inline-flex items-center"
                      >
                        Read More
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </>
  );
};

export default Blog;

// Fetching data function
async function getData() {
  const res = await fetch(
      'http://adventure-glacier.local/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,content,link,_links,featured_media,slug&_embed'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}