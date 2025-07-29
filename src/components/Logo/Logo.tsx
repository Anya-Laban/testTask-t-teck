import s from './Logo.module.css';
import logoImg from '/public/logo.png';

export const Logo = () => {
  return (
    <a className={s.logo} href="/">
      <img src={logoImg} alt="Titan logo" />
    </a>
  );
};
