const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const Root = require('./components/Route.jsx');
const Index = require('./components/Index.jsx');

const Routes = (
	<Route handler={Root} path='/'>
		<DefaultRoute handler={Index} />
	</Route>
)