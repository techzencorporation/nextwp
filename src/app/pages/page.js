import Link from 'next/link';
import React from 'react';
import '../styles/Page.module.css';

// Fetching data function
async function getPages() {
    const res = await fetch(
        'https://www.adventureglaciertreks.com/wp-json/wp/v2/pages?_fields=id,title,excerpt,featuredmedia, slug,_links,_embedded&embed=true'
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Pages() {
    const pages = await getPages();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {pages.map((page) => (
                        <div key={page.id} className="p-4 lg:w-full md:px-40">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                {page._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                                    <Link href={`/pages/${page.slug}`}>
                                        <img
                                            alt="feature-img"
                                            className="featureImg flex-shrink-0 rounded-lg md:w-270 md:h-44 object-cover object-center sm:mb-0 mb-4"
                                            src={page._embedded['wp:featuredmedia'][0].source_url}
                                        />
                                    </Link>
                                )}
                                <div className="flex-grow text-left sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900 hover:text-[#27D07E] cursor-pointer transition-all">
                                        {page.title.rendered}
                                    </h2>
                                    <div
                                        className="my-4"
                                        dangerouslySetInnerHTML={{
                                            __html: page.excerpt.rendered.substring(0, 200),
                                        }}
                                    />
                                    <span className="inline-flex my-2">
                    <Link
                        href={`/pages/${page.slug}`}
                        className="text-[#27D07E] inline-flex items-center"
                    >
                      Read More
                      <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
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
    );
}
