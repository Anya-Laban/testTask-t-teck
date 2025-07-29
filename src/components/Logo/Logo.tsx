import s from "./Logo.module.css";

export const Logo = () => {
  return (
    <a className={s.logo} href="/">
      <img src="/public/logo.png" alt="Titan logo" />
    </a>
  );
};
