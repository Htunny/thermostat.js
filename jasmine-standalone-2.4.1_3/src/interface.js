$(document).ready(function() {
  var thermostat = new Thermostat();

  function energytemp() {
    $('#current-temperature').text(thermostat.temperature);
    $('#energy-usage').text(thermostat.energyUsage());
  };
  
  energytemp();

  $('.temperature-change').click(function() {
    thermostat[this.dataset.direction]();
    energytemp();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    energytemp();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnOnPowerSaving();
    $('#power-saving-status').text('on')
  })

  $('#powersaving-off').click(function() {
    thermostat.turnOffPowerSaving();
    $('#power-saving-status').text('off')
  })

});
