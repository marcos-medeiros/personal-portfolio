import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabBanner from './TabBanner';
import Projects from './Projects';
import Publications from './Publications';
import About from './About';

class Tab extends React.Component {
  render() {
    const { tab, tabs } = this.props;

    if (tab === 'projects') {
      return (
        <>
          <TabBanner title={tabs[0].title} subTitle={tabs[0].subTitle} />
          <Projects />
        </>
      );
    } if (tab === 'publications') {
      return (
        <>
          <TabBanner title={tabs[1].title} subTitle={tabs[1].subTitle} />
          <Publications />
        </>
      );
    }
    return (
      <>
        <TabBanner title={tabs[2].title} subTitle={tabs[2].subTitle} />
        <About />
      </>
    );
  }
}


Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  tabs: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  tabs: [state.data.projectsTab, state.data.publicationsTab, state.data.aboutTab],
  tab: state.tab,
});

export default connect(mapStateToProps, {})(Tab);
