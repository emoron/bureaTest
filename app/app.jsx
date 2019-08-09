var React = require('react');
var ReactDOM = require('react-dom');

import HeaderWin from "./components/header";
import LeftMenu from "./components/leftMenu";
//import RightPanel from './dashboard/rightPanel';
// import Demo from "./src/demo"
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//$(document).foundation();
import 'bootstrap/dist/css/bootstrap.min.css';


import AppMirror from './components/appMirror'


ReactDOM.render(<AppMirror />, document.getElementById('main'));
ReactDOM.render(<LeftMenu />,document.getElementById('app'));
