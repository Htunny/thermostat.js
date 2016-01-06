'use strict';

function Thermostat(){
  this.temperature = 20
  this.minimum_temperature = 10
}

Thermostat.prototype.up = function(){
  return this.temperature += 1;
};
Thermostat.prototype.down = function(){
  if(this.temperature <= this.minimum_temperature){
    throw new Error("Minimum temperature is 10 degrees")
  };
  return this.temperature -= 1;
};
