import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Page({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
