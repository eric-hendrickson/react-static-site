const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const createReactClass = require('create-react-class');

const Root = () => (
		<html>
			<head>
				<title>{this.props.title}</title>
			</head>
			<body>
				<RouteHandler {...this.props} />
			</body>
		</html>
);

module.exports = Root;