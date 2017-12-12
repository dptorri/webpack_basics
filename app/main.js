import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter.js';
import '../public/main.css';
render (<Greeter />, document.getElementById('root'));




/* Refactoring code to ES6 modules
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/