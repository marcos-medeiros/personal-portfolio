import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Education = ({ education }) => (
  <div className="flex-ed">
    { education.map(e => (
      <div className="ed-item">
        <div className="ed-logo">
          <img src={e.logo} alt={e.institution} />
        </div>
        <h2 className="section-title section-title--negative">{e.description}</h2>
        <p className="txt-large txt-dark mt">{e.time}</p>
      </div>
    ))}
  </div>
);


Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ education: state.data.education });

export default connect(mapStateToProps, null)(Education);
