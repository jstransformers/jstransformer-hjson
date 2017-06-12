# jstransformer-hjson

[Hjson](http://hjson.org/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-hjson/master.svg)](https://travis-ci.org/jstransformers/jstransformer-hjson)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-hjson/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-hjson)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-hjson/master.svg)](http://david-dm.org/jstransformers/jstransformer-hjson)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-hjson.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-hjson.svg)](https://www.npmjs.org/package/jstransformer-hjson)

## Installation

    npm install jstransformer-hjson

## API

```js
var hjson = require('jstransformer')(require('jstransformer-hjson'));

var text = `
  {
    // comments
    hi: true
    // no commas
    test: this is a test
    // no quotes
  }
`
hjson.render(text).body
//=> '{"hi":"true","test":"this is a test"}'

// `formatted` is a special option that makes the output indented

hjson.render(text, {formatted: true}).body
//=> {
//=>   "hi": "true",
//=>   "test": "this is a test"
//=> }

// Options other than `formatted` are passed to hjson
// See https://github.com/hjson/hjson-js#hjsonparsetext-options
```

## License

MIT
