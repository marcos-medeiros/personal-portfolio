import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Intro from './Intro';
import Contact from './Contact';
import Footer from './Footer';
import Overview from '../components/Overview';

const App = ({tab}) => (
  <>
    <Nav />
    { tab === null
    ? <>
        <Intro />
        <Overview />
      </>  
    : null
    // <Tab />
    }
    <Contact />
    <Footer />
  </>
);

App.propTypes = {
  tab: PropTypes.string
}

App.defaultProps = {
  tab: null
}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps, null)(App);
