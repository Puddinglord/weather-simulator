'use strict';

/**
 * This class provides access to the sun. Right now the sun is either out or not.
 * This will change in the future to support more dynamic weather patterns.
 *
 * @class Sun
 */
class Sun {
  constructor() {
    this.randomNumber = require('../helpers/randomNumber');

    this.minSunThreshold = 50; // If we are equal to or greater than this number then the sun is out
  }

  /**
   * Let's us know if the sun is currently out or hiding. This will directly
   * impact the rest of the weather so we need to know this up front.
   *
   * @returns {Boolean} If the sun is out or not.
   * @memberof Sun
   */
  isTheSunOut() {
    // Let's see if the sun is out
    if (this.randomNumber(100) >= this.minSunThreshold) {
      //The sun is out!
      return true;
    }
    else {
      // The sun is hiding
      return false;
    }

  }

}

module.exports = new Sun();
