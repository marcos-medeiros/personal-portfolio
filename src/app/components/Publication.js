import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ publication }) => (
  <div className="grid__col grid__col--6">
    <article className="post-card">
      <figure className="post-card__thumb">
        <a href={publication.link}>
          <img src={publication.image} alt={publication.title} />
        </a>
      </figure>
      <div className="post-card__inner">
        <div className="content-styles txt-center">
          <h3 className="h4">
            <a href={publication.link}>
              {publication.title}
            </a>
          </h3>
          <p className="txt-large txt-dark">
            {publication.date}
          </p>
          <p>
            {publication.description}
          </p>
        </div>
        <div className="spacing-medium-top txt-center">
          <a className="btn" href={publication.link}>
            Read
          </a>
        </div>
      </div>
    </article>
  </div>
);


Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
