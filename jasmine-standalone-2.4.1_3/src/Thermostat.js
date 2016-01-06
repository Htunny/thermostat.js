'use strict';

function Thermostat(){
  this.temperature = 20
  this.minimum_temperature = 10
  this.maximum_temperature = 25
}

Thermostat.prototype.up = function(){
  if(this.temperature >= this.maximum_temperature){
    throw new Error("Cannot go above maximum temperature");
  };
  return this.temperature += 1;
};
Thermostat.prototype.down = function(){
  if(this.temperature <= this.minimum_temperature){
    throw new Error("Minimum temperature is 10 degrees");
  };
  return this.temperature -= 1;
};
Thermostat.prototype.turnOnPowerSaving = function(){
  if(this.maximum_temperature === 25)
  {throw new Error("Power saving mode is already on");}
  else
  if (this.temperature >= 25)
    {this.temperature = 25};
    {this.maximum_temperature = 25;}
};
Thermostat.prototype.turnOffPowerSaving = function(){
  return this.maximum_temperature = 32;
};
Thermostat.prototype.reset = function(){
  return this.temperature = 20;
};
Thermostat.prototype.colour = function(){
  if (this.temperature < 18) { return "Green"}
  else if (this.temperature < 25) { return "Yellow"}
  else if (this.temperature >= 25) { return "Red"}
};
