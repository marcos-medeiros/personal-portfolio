import React from 'react';
import PropTypes from 'prop-types';

const TabBanner = ({ title, subTitle }) => (
  <>
    <section className="site-banner site-banner--dark">
      <div className="site-banner__inner anim anim-up anim-fade loaded">
        <div className="site-banner__content">
          <h1 className="site-banner__title">
            {title}
          </h1>
          <h2 className="site-banner__subtitle">
            {subTitle}
          </h2>
        </div>
      </div>
    </section>
  </>
);


TabBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default TabBanner;
