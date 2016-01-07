function get_data () { $.ajax({

url:"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4db7936adac8e360e07f2f6e0b70d42f",

type: "GET",

dataType : "json",

data: {
  units: "metric"
},

success: function( json ) {
        $( "#name" ).text( json.name );
        $("#condition").text( json.weather[0].main + ': ' + json.weather[0].description);
        $("#retrieved_temperature").text( Math.round(json.main.temp) + 'C');
        $("#wind").text(json.wind.speed + ' meter/sec');
      }

});}

$(document).ready(function() {
  var thermostat = new Thermostat();

  function energytemp() {
    $('#current-temperature').text(thermostat.temperature);
    $('#energy-usage').text(thermostat.energyUsage());
  }

  energytemp();
  get_data();

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
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').click(function() {
    thermostat.turnOffPowerSaving();
    $('#power-saving-status').text('off');
  });


});
