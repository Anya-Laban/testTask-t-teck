import type React from 'react';
import s from './NavItem.module.css';

type Props = {
  title: string;
  link: string;
};

export const NavItem: React.FC<Props> = ({ title, link }) => {
  return (
    <li className={s.navItem}>
      <a className={s.navLink} href={link}>
        {title}
      </a>
    </li>
  );
};
