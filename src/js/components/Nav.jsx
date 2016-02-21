import React from 'react';
import { render } from 'react-dom';

class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">React Flux Basic</a>
					</div>
				</div>
			</nav>
		);
	}
}
module.exports = Nav;