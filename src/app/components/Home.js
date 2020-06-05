import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Intro from './Intro';
import Project from './Project';
import Education from './Education';
import Publication from './Publication';
import changeTab from '../actions/actions';

const Home = ({ featuredProject, publications, changeTab }) => (
  <>
    <Intro />
    <section className="section section--large spacing-huge">
      <div className="spacing-small-bottom">
        <h2 className="section-title">
          Featured Project
        </h2>
      </div>
      <Project project={featuredProject} />
      <div className="spacing-medium-top txt-center">
        {/* eslint-disable */}
                <a className="btn" onClick={() => changeTab('projects')}>
                    View More Projects
		        </a>
                {/* eslint-enable */}
      </div>
    </section>
    <section className="bg-grey bg-slanted">
      <div className="section section-large spacing-huge">
        <h2 className="section-title section-title--negative">
          Education
        </h2>
        <Education />
      </div>
    </section>
    <section className="section section--large spacing-huge">
      <div className="spacing-small-bottom">
        <h2 className="section-title">
          Recent Publications
        </h2>
      </div>
      <div className="grid grid--m-1">
        {publications.map(p => (
          <Publication publication={p} />
        ))}
      </div>
      <div className="spacing-medium-top txt-center">
        {/* eslint-disable */}
                <a className="btn" onClick={() => changeTab('publications')}>
                    View More Publications
		        </a>
                {/* eslint-enable */}
      </div>
    </section>
  </>
);


Home.propTypes = {
  featuredProject: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  publications: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  changeTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  featuredProject: state.data.projects[0],
  publications: state.data.publications.slice(0, 2),
});

const mapDispatchToProps = dispatch => ({
  changeTab: tab => {
    window.scrollTo(0, 0);
    dispatch(changeTab(tab));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
