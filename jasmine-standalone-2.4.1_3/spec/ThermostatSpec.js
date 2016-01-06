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

  it('decrease temperature by 1 with down button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    thermostat.temperature = 10;
    expect(function(){thermostat.down();}).toThrowError("Minimum temperature is 10 degrees")
  });
});
