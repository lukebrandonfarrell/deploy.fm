import Link from 'next/link';

const Footer = () => (
  <footer className="bottom">
    <p>
      Want to{' '}
      <Link href="/sponsor">
        <a>Sponsor the Podcast?</a>
      </Link>
    </p>
    <p>&copy; Aspect One {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
