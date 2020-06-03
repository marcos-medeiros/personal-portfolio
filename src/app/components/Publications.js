import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Publication from './Publication';

const Publications = ({ publications }) => (
  <section className="section section--large spacing-huge">
    <div className="grid grid--m-1">
      {publications.map(p => (
        <Publication publication={p} />
      ))}
    </div>
  </section>
);


Publications.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = state => ({ publications: state.data.publications });

export default connect(mapStateToProps, {})(Publications);
