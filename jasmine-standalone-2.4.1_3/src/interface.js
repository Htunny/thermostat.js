$(document).ready(function() {
  var thermostat = new Thermostat();

  var updateColor = function() {
    $('#energy-usage').attr("class", thermostat.energyUsage());
  }

  function energytemp() {
    $('#current-temperature').text(thermostat.temperature);
    $('#energy-usage').text(thermostat.energyUsage());
    updateColor();
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
      $("#retrieved_temperature").text( Math.round(json.main.temp) + '˚C');
      $("#wind").text(json.wind.speed + ' meter/sec');
      $("#country").text( json.sys.country );
      $("#icon").text( json.weather.icon );
    }


  });}

  $('#submit_name').click(function() {
    get_data($('#name_input').val());
  });

  $('.temperature-up').click(function() {
    thermostat.up();
    energytemp();
  });

  $('.temperature-down').click(function() {
    thermostat.down();
    energytemp();
  });

  $('.temperature-reset').click(function() {
    thermostat.reset();
    energytemp();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnOnPowerSaving();
    $('#power-saving-status').text('ON').bold;
  });

  $('#powersaving-off').click(function() {
    thermostat.turnOffPowerSaving();
    $('#power-saving-status').text('OFF').bold;
  });



});
