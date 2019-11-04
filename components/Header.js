import Link from 'next/link';
import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <Link href="/">
        <a aria-label="Syntax.FM" className="header__logo">
          <img src="/static/logo.png" alt="Syntax" />
        </a>
      </Link>
    </div>
    <Subscribe />
  </header>
);

export default Header;
