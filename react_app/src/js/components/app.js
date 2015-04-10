/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Login = require('./auth/app-login');
var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');
var Entity = require('./app-entity');
var PdfReader = require('./app-pdfreader');
var Link = Router.Link;

var Template = require('./app-template');



var APP = React.createClass({
  render: function () {
  	
    return <div id="kamil">przeorski</div>;
  }
});




exports.APP = APP;



