import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Tab from './Tab';

const App = ({ tab }) => (
  <>
    <Nav />
    { tab === null
      ? <Home />
      : <Tab />}
    <Contact />
    <Footer />
  </>
);

App.propTypes = {
  tab: PropTypes.string,
};

App.defaultProps = {
  tab: null,
};

const mapStateToProps = state => ({ tab: state.tab });

export default connect(mapStateToProps, null)(App);
