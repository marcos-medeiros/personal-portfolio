import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeTab from '../actions/actions';

const Nav = ({
  name, github, linkedin, twitter, email, changeTab,
}) => (
  <header className="site-header site-header--dark">
    <div className="site-header__inner anim anim-down anim-fade loaded">
      <div className="site-header__section site-header__section--logo">
        {/* eslint-disable */}
                <a className="site-logo" onClick={() => changeTab()}>
                    {name}
                </a>
            </div>
            <div className="site-header__section site-header__section--menu">
                <a className="toggle-menu js-toggle-menu" href="#" aria-label="Toggle Menu">
                    <span className="toggle-menu__line"></span>
                    <span className="toggle-menu__line"></span>
                    <span className="toggle-menu__line"></span>
                </a>
                <nav className="site-menu">
                    <ul className="site-menu__inner">
                        <li className="site-menu__item">
                            <a className="site-menu__link " onClick={() => changeTab('projects')}>
                                Projects
							</a>
                        </li>
                        <li className="site-menu__item">
                            <a className="site-menu__link " onClick={() => changeTab('publications')}>
                                Publications
							</a>
                        </li>
                        <li className="site-menu__item">
                            <a className="site-menu__link " onClick={() => changeTab('about')}>
                                About
							</a>
                        </li>
                        {/* eslint-enable */}
                      <li className="site-menu__item">
                        <a className="site-menu__link " href={github} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github" />
                        </a>
                      </li>
                      <li className="site-menu__item">
                        <a className="site-menu__link " href={linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li className="site-menu__item">
                        <a className="site-menu__link " href={twitter} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="site-menu__item">
                        <a className="site-menu__link " href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-envelope" />
                        </a>
                      </li>
                    </ul>
                </nav>
            </div>
    </div>
  </header>

);

Nav.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.data.name,
  github: state.data.github,
  linkedin: state.data.linkedin,
  twitter: state.data.twitter,
  email: state.data.email,
});

export default connect(mapStateToProps, { changeTab })(Nav);
