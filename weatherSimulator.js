"use strict";

/**
 * This will provide access to starting/pausing/stopping
 * the service as well as a way to orchestrate other functionality and features that can extend and enhance the base
 * feature set.
 *
 * This class also provides pass-through functions that are used to extend functionality
 * while keeping the code base clean and tidy.
 * 
 * This will return a json object that will contain all the weather for the day.
 *
 * @class WeatherSimulator
 */
class WeatherSimulator {
  constructor() {
    this.sun = require('./subsystems/sun');

    this.start();
  }

  getTodaysWeather() {

  }


  /**
   * Pass along all the needed information to all subclasses so they
   * all have the correct and default configuration options
   *
   * @memberof WeatherSimulator
   */
  start () {
    console.log('Weather Simulator has been started!');

    this.sun.getCurrentSun();
  }
}

module.exports = new WeatherSimulator();