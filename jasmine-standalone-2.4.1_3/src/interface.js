$(document).ready(function() {
  var thermostat = new Thermostat();

  function energytemp() {
    $('#current-temperature').text(thermostat.temperature);
    $('#energy-usage').text(thermostat.energyUsage());
  }

  energytemp();
  get_data();

  function get_data (name) {

    var city_name = name || 'London';
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name;
    var token = "&APPID=4db7936adac8e360e07f2f6e0b70d42f";

    $.ajax({

    url: url + token,

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

  $('#submit_name').click(function() {
    get_data($('#name_input').val());
  });

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
