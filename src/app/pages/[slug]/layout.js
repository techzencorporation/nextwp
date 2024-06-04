export async function generateStaticParams() {
    const res = await fetch('https://www.adventureglaciertreks.com/wp-json/wp/v2/pages');
    const pages = await res.json();

    return pages.map((page) => ({
        slug: page.slug,
    }));
}

export const dynamicParams = true; // Enable dynamic params

export default function Layout({ children }) {
    return <>{children}</>;
}
