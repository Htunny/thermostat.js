function Thermostat(){
  'use strict';
  this.temperature = 20;
  this.minimum_temperature = 10;
  this.maximum_temperature = 25;
}

Thermostat.prototype.up = function(){
  if(this.temperature >= this.maximum_temperature){
    alert("Cannot go above maximum temperature");
    throw new Error("Cannot go above maximum temperature");
  }
  return this.temperature += 1;
};
Thermostat.prototype.down = function(){
  if(this.temperature <= this.minimum_temperature){
    alert("Minimum temperature is 10 degrees");
    throw new Error("Minimum temperature is 10 degrees");
  }
  return this.temperature -= 1;
};
Thermostat.prototype.turnOnPowerSaving = function(){
  if(this.maximum_temperature === 25)
  {
    alert("Power saving mode is already on");
    throw new Error("Power saving mode is already on");}
  else
  if (this.temperature >= 25)
    {this.temperature = 25;}
    {this.maximum_temperature = 25;}
};
Thermostat.prototype.turnOffPowerSaving = function(){
  this.maximum_temperature = 32;
};
Thermostat.prototype.reset = function(){
  this.temperature = 20;
};
Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18) { return "Low";}
  else if (this.temperature < 25) { return "Medium";}
  else if (this.temperature >= 25) { return "High";}
};
