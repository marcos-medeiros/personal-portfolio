import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({name}) => (
    <footer className="site-footer">
		<div className="site-footer__inner">
			<p>
				© 2020 {name}. All rights reserved.
			</p>
		</div>
	</footer>
);

Footer.propTypes = { name: PropTypes.string.isRequired }

const mapStateToProps = state => ({ name: state.data.name})

export default connect(mapStateToProps, null)(Footer);