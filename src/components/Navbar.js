import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-5 px-10">
      <div className="logo">
        <Link href="/">
          <img
            src="/wpblogo.png"
            alt="logo"
            width="150px"
          />
        </Link>
      </div>
      <div className="nav-bar flex">
        <nav className="hidden md:flex">
          <ul className="flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/pages"> Pages</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className="block md:hidden">menu</button>
      </div>
    </div>
  );
};

export default Navbar;
