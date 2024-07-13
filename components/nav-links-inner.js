import React from 'react';
import Link from 'next/link';
import SubNavToggler from './sub-nav-toggler';

const NavLinksInner = () => {
  return (
    <ul className='one-page-scroll-menu navigation-box'>
      <li>
        <Link href='/#banner'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/#service'>
          <a>Features</a>
        </Link>
      </li>
      <li>
        <Link href='/#pricing'>
          <a>Pricing</a>
        </Link>
      </li>
      <li>
        <Link href='/#testimonials'>
          <a>Testimonials</a>
        </Link>
      </li>
      <li>
        <Link href='/#contact-us'>
          <a>Contact-Us</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinksInner;
