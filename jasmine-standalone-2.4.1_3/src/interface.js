$.ajax({

url:"api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4db7936adac8e360e07f2f6e0b70d42f",

type: "GET",

dataType : "json",

success: function( json ) {
        $( "#weather" ).text( json.title ).appendTo( "body" );
        id
});

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
