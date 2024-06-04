import React from 'react';
import styles from '../../styles/page.module.css';
async function getPage(slug) {
    const res = await fetch(`https://www.adventureglaciertreks.com/wp-json/wp/v2/pages?slug=${slug}`);
    const pages = await res.json();
    return pages.length > 0 ? pages[0] : null;
}

export default async function Page({ params }) {
    const { slug } = params;
    const page = await getPage(slug);

    if (!page) {
        return <div>Page not found</div>;
    }

    return (
        <div className={styles.pageContainer}>
            {page._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                    src={page._embedded['wp:media'][0].source_url}
                    alt={page.title.rendered}
                    className={styles.page-featured-image}
                />
            )}
            <h1 className={styles.pageTitle}>{page.title.rendered}</h1>
            <div
                className={styles.pageContent}
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
        </div>
    );
}
