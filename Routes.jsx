var React = require('react')
var Router = require('react-router-dom').StaticRouter
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')

var Routes = () => (
  <Route component={Root} path='/'>
    <DefaultRoute component={Index} />
  </Route>
)

module.exports = Routes