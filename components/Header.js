import Link from 'next/link';
import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <Link href="/">
        <a aria-label="Deploy.FM" className="header__logo">
          <img src="/static/logo.png" alt="Deploy.fm" />
        </a>
      </Link>
    </div>
    <Subscribe />
  </header>
);

export default Header;
