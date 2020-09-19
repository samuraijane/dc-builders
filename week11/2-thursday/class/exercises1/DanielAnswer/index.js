// Load the full build.
var _ = require('lodash');

 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


console.log(_.shuffle([1,2,3,4,5,6]));