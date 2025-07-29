import { NavItem } from "../NavItem";
import s from "./Nav.module.css";

export const Nav = () => {
  const navItems = [
    { name: "Contact us", path: "/" },
    { name: "About us", path: "/" },
    { name: "Packages", path: "/" },
    { name: "Products", path: "/" },
    { name: "Book a demo", path: "/" },
  ];
  
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
