'use strict';

module.exports = function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}