/** @license MIT License (c) copyright 2014 original authors */
/** @author Karolis Narkevicius */

var process = require('process/browser');

exports.create = create;

function create (context) {
  window.process = process;
  return {};
}
