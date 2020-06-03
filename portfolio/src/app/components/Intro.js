import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTab }  from '../actions/actions';

const Intro = ({title, description, button, photoPath, name}) => (
    <section className="site-banner site-banner--dark site-banner--alt">
        <div className="site-banner__inner anim anim-up anim-fade loaded">
            <div className="site-banner__content">
                <h1 className="site-banner__title">
                    {title}
				</h1>
                <h2 className="site-banner__subtitle">
                    {description}
				</h2>
                <div className="site-banner__btn">
                    {/* eslint-disable */}
                    <a className="btn btn--large btn--hover-light" onClick={() => changeTab('projects')}>
                        {button}
					</a>
                    {/* eslint-enable */}
                </div>
            </div>
            <figure className="overlap-img">
                <picture>
                    <source srcSet={photoPath} media="(min-width: 901px)" />
                    <source srcSet={photoPath} media="(max-width: 900px) and (min-width: 376px)" />
                    <source srcSet={photoPath} media="(max-width: 375px)" />
                    <img srcSet={photoPath} alt={name} />
                </picture>
            </figure>
        </div>
    </section>
);


Intro.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    photoPath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    title: state.data.introTitle,
    description: state.data.introDescription,
    button: state.data.introButton,
    photoPath: state.data.introPhotoPath,
    name: state.data.name
})

export default connect(mapStateToProps, { changeTab })(Intro);