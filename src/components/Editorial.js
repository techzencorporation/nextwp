import Link from 'next/link';
import React from 'react';

const Editorial = ({posts}) => {
  return (
    <>
      <div className="w-full min-h-scree pb-40">
        <div className="container mx-auto p-4 px-8">
          <h1 className="text-[2.2rem] font-bold text-black pb-5">Teechzen Peaks</h1>
          <p className="text-[18px] font-normal">
            Our best articles and guides on all things projects, hand-picked by the editor.
          </p>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid md:grid-cols-2 gap-1">
            {posts.map((post) => {
              return (
                <>
                  <div
                    key={post.id}
                    className="bg-white p-4 flex items-center gap-2"
                  >
                    {post._links['wp:featuredmedia'] && (
                      <Link href={`blog/${posts[0].slug}`}>
                        <img
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          alt={post.title.rendered}
                          width="170px"
                          className="rounded-lg"
                        />
                      </Link>
                    )}
                    <div className="content flex flex-col">
                      <Link href={`blog/${post.slug}`}>
                        <h3 className="text-lg font-bold mb-1 hover:text-[#27D07E]">
                          {post.title.rendered}
                        </h3>
                      </Link>
                      {/* <p className="text-gray-700">{post.content}</p> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Editorial;
