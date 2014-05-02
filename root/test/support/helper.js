var chai = require('chai'),
    http = require('chai-http'),
    path = require('path'),
    <%= S(name).underscore().s %> = require('../..');

var should = chai.should();

chai.use(http);

global.<%= S(name).underscore().s %> = <%= S(name).underscore().s %>;
global.chai = chai;
global.should = should;
global.path = path;
global.base_path = path.join(__dirname, '../fixtures');
