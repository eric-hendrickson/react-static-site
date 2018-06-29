import React from 'react'
import { Link, StaticRouter as Router, Route } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import Routes from './Routes.jsx'

const Home = () => (
	<div>
	  <h2>Home</h2>
	  <p>Hello, world</p>
	</div>
  );

module.exports = function render(locals, callback) {
    var html = ReactDOMServer.renderToStaticMarkup(
		<Router>
			<Route exact path='/' component={Home} />
		</Router>
    );
    callback(null, html)
}

