//http://codepen.io/FelipeMartinin/pen/sAtvD

'use strict';
//var $ = require('jquery');

module.exports = (function () {
  function Init() {
    bind();
  }

  function bind() {
    console.log($('title').text());
  }

  return {
    Init: Init
  };
}());
