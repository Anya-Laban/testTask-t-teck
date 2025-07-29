import { Logo } from '../Logo';
import { Nav } from '../Nav';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Nav />
    </header>
  );
};
