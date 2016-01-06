'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('increases tempurature by 1 with up button', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it('raises an error when going above maximum temperature', function(){
    thermostat.temperature = 25;
    expect(function(){thermostat.up();}).toThrowError("Cannot go above maximum temperature");
  });

  it('decrease temperature by 1 with down button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('shows minimum temperature', function(){
    expect(thermostat.minimum_temperature).toEqual(10);
  });

  it('throws an error when going below minimum temperature', function(){
    thermostat.temperature = 10;
    expect(function(){thermostat.down();}).toThrowError("Minimum temperature is 10 degrees")
  });
  it('throws an error when power saving mode is already on', function(){
    expect(function(){thermostat.turnOnPowerSaving();}).toThrowError("Power saving mode is already on");
  });

  it('has a maximum temperature 25 when power saving mode is switched on', function(){
    thermostat.turnOffPowerSaving();
    thermostat.turnOnPowerSaving();
    expect(thermostat.maximum_temperature).toEqual(25);
  });

  it('changes maximum temperature back to 25 when power saving mode is turned off', function(){
    thermostat.turnOffPowerSaving();
    expect(thermostat.maximum_temperature).toEqual(32);
  });
  it('resets temperature back to 20 with reset', function(){
     thermostat.up();
     thermostat.reset();
     expect(thermostat.temperature).toEqual(20);
  });
});
