'use strict';

var hjson = require('hjson');

exports.name = 'hjson';
exports.inputFormats = ['hjson', 'hjsonbar'];
exports.outputFormat = 'html';

exports.render = function (str, options) {
  options.formatted = options.formatted || false
  var json = hjson.parse(str, options);

  if (options.formatted) return JSON.stringify(json, null, 2);
  else return JSON.stringify(json);

}
