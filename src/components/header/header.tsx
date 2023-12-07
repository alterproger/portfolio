'use client';

import Link from 'next/link';
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from '@iconscout/react-unicons';

import styles from './styles.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const LINKS = [
  { title: 'Home', path: '#home', icon: UilEstate },
  { title: 'About', path: '#about', icon: UilUser },
  { title: 'Skills', path: '#skills', icon: UilFileAlt },
  { title: 'Services', path: '#services', icon: UilBriefcaseAlt },
  { title: 'Portfolio', path: '#portfolio', icon: UilScenery },
  { title: 'Contact', path: '#contact', icon: UilMessage },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles['header']}>
      <nav className={clsx('container', styles['nav'])}>
        <Link
          className={styles.logo}
          href="/"
        >
          Smith
        </Link>
        <menu
          className={clsx(styles['menu'], isMenuOpen && styles['menu-show'])}
        >
          <ul className={styles['list']}>
            {LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.title}>
                  <a
                    className={styles['link']}
                    href={link.path}
                  >
                    <Icon className={styles['link-icon']} />
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={styles['close-btn']}
            onClick={() => setMenuOpen(false)}
          >
            <UilTimes />
          </button>
        </menu>

        <button
          type="button"
          className={styles['toggler']}
          onClick={() => setMenuOpen(true)}
        >
          <UilApps />
        </button>
      </nav>
    </header>
  );
};

export { Header };
