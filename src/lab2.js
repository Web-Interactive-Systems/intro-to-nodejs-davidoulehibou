/**
 Todo: complete this lab by importing the needed 
 objects and functions from
 ./utils/constants.js and ./utils/helpers.js
 */

const hello = require('./utils/helpers');

const { foo, bar } = require('./utils/constants');
const baz= require('./utils/constants');

hello(foo);
hello(bar);
hello(baz);
