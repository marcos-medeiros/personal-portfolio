import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ projects }) => (
  <section className="section section--large spacing-huge">
    {projects.map(p => (
      <Project project={p} />
    ))}
  </section>
);


Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
  }).isRequired).isRequired,

};

const mapStateToProps = state => ({ projects: state.data.projects });

export default connect(mapStateToProps, null)(Projects);
