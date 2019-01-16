'use strict'

const hjson = require('hjson')

exports.name = 'hjson'
exports.inputFormats = ['hjson', 'json']
exports.outputFormat = 'html'

exports.render = function (str, options) {
  options.formatted = options.formatted || false
  const json = hjson.parse(str, options)

  if (options.formatted) {
    return JSON.stringify(json, null, 2)
  }

  return JSON.stringify(json)
}
