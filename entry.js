const React = require('react');
const Router = require('react-router');
const Routes = require('./Routes.jsx');

module.exports = function render(locals, callback) {
	Router.run(Routes, locals.path, function(Handler) {
		const html = React.renderToStaticMarkup(React.createElement(Handler, locals));
		callback(null, '<!DOCTYPE html>' + html)
	})
}