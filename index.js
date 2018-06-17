const React = require('react');
const Router = require('react-router-dom');
const Routes = require('./Routes.jsx');

module.exports = function render(locals, callback) {
	var html = '<h1>Hello, world!</h1>';
	callback(null, '<!DOCTYPE html>' + html)
}