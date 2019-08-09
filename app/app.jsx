var React = require('react');
var ReactDOM = require('react-dom');

import ListFiles from "./components/listFiles";

import LeftMenu from "./components/leftMenu";
//import RightPanel from './dashboard/rightPanel';
// import Demo from "./src/demo"
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//$(document).foundation();
import 'bootstrap/dist/css/bootstrap.min.css';


import AppMirror from './components/appMirror'

ReactDOM.render(<ListFiles />, document.getElementById("listFiles"));
//ReactDOM.render(<LeftMenu />,document.getElementById('app'));
ReactDOM.render(<AppMirror />, document.getElementById('main'));
