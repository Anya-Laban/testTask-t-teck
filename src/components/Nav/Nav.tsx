import { navItems } from '../../constants';
import { NavItem } from '../NavItem';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {navItems.map((item) => (
          <NavItem key={item.name} title={item.name} link={item.path} />
        ))}
      </ul>
    </nav>
  );
};
