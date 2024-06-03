import Link from 'next/link';

const Blogposts = async ({posts}) => {
  return (
    <>
      <div className=" min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap md:flex-nowrap">
            {/* First Blog Post */}
            <div className="w-full md:w-1/2 p-4">
              {posts.length > 0 && (
                <div
                  key={posts[0].id}
                  className="bg-white p-6"
                >
                  {posts[0]._links['wp:featuredmedia'] && (
                    <Link href={`blog/${posts[0].slug}`}>
                      <img
                        src={posts[0]._embedded['wp:featuredmedia'][0].source_url}
                        alt={posts[0].title.rendered}
                        className="pb-5"
                      />
                    </Link>
                  )}
                  <Link href={`blog/${posts[0].slug}`}>
                    <h2 className="text-2xl font-bold mb-2 hover:text-[#27D07E]">
                      {posts[0].title.rendered}
                    </h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{__html: posts[0].excerpt.rendered.substring(0, 200)}}
                  />
                  {/* <p className="text-gray-700">{posts[0].excerpt.rendered.substring(0, 200)}</p> */}
                </div>
              )}
            </div>
            {/* Rest of the Blog Posts */}
            <div className="w-full md:w-1/2 p-4">
              <div>
                {posts.slice(1, 4).map((post) => (
                  <div
                    key={post.id}
                    className="bg-white p-4 flex items-center gap-5"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogposts;
