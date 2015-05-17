'use strict';

var path = require ('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('jekyllized:editorconfig', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/boilerplate'))
      .on('end', done);
  });

  it('creates .editorconfig', function() {
    assert.file('.editorconfig');
  });
});
