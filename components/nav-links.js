import React from 'react';
import Link from 'next/link';
import SubNavToggler from './sub-nav-toggler';
import { Link as ScrollLink } from 'react-scroll';

let links = [
  {
    scrollTo: 'banner',
    name: 'Home',
  },
  {
    scrollTo: 'service',
    name: 'Features',
  },
  {
    scrollTo: 'pricing',
    name: 'Pricing',
  },
  {
    scrollTo: 'testimonials',
    name: 'Testimonials',
  },
  {
    scrollTo: 'contact',
    name: 'Contact Us',
  },
];

const NavLinks = (props) => {
  if (props.hideNav) {
    links = [
      {
        name: 'Home',
        href: '/',
      },
    ];
  }

  return (
    <ul className='one-page-scroll-menu navigation-box'>
      {links.map((link, i) => {
        return link.href ? (
          <li key={i}>
            <a href={link.href}> {link.name}</a>
          </li>
        ) : (
          <li key={i}>
            <ScrollLink
              activeClass='current'
              to={link.scrollTo}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href={link.href}
            >
              {link.name}
            </ScrollLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
