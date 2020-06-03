import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <article className="project-preview spacing-small-bottom">
    <div className="project-preview__img">
      <figure className="overlap-img">
        <a href={project.liveDemo}>
          <img src={project.imgPath} alt={project.name} />
        </a>
      </figure>
    </div>
    <div className="project-preview__content">
      <div className="content-styles">
        <h2>
          <a href={project.liveDemo}>
            {project.name}
          </a>
        </h2>
        <p className="txt-large">
          {project.description}
        </p>
      </div>
      <div className="spacing-tiny-top">
        <ul className="icon-list">
          {project.tools.map(t => (
            <li className="icon-list__item">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="spacing-tiny-top inline-block">
        <a className="btn" href={project.liveDemo}>
          Live Demo
        </a>
      </div>
      <div className="spacing-tiny-top inline-block">
        <a className="btn" href={project.repository}>
          Repository
        </a>
      </div>
    </div>
  </article>
);


Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,

};

export default Project;
