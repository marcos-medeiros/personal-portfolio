import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const About = ({ about }) => (
  <section className="section section--small spacing-medium-top spacing-medium-bottom">
    <div className="content-styles">
      <h2 id="who-i-am">
        Who I Am
      </h2>

      <p className="txt-large">
        My name's
        {' '}
        {about.firstName}
        . I'm a
        {about.position}
        .
      </p>
      {about.paragraphs.map(p => (
        <p>{p}</p>
      ))}
    </div>
  </section>
);

About.propTypes = {
  about: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ about: state.data.about });

export default connect(mapStateToProps, null)(About);
