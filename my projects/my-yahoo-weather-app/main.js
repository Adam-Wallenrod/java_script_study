var humidity = document.querySelector(".humidity");
var temperature = document.querySelector(".temperature");
var description = document.querySelector(".description");
var old  = document.querySelector(".old");

var dropDown = document.querySelector(".city");
var city = dropDown.options[dropDown.selectedIndex].value;


 document.onload = getForecast(city);
 
 
  function getForecast(place) {
	  getHumidity(place);
	  getTemp(place);
	  getDesc(place);
	  
  }
  

  
  function getHumidity(city) {
	  var humidityURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20atmosphere.humidity%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

	  
    fetch(humidityURL).then(function(response) {
	    return response.json();
    }).then(function(myJson) {
	    let result = myJson.query.results.channel.atmosphere.humidity;
	    console.log("Humidity: " + result + "%");
	    humidity.textContent = "Humidity: " + result +"%"; 
    });
	   
  }
  
  
  function getTemp(city) {
	  var tempURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.temp%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city + '%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

	  
    fetch(tempURL).then(function(response) {
	    return response.json();
    }).then(function(myJson) {
	    let result = myJson.query.results.channel.item.condition.temp;
	    console.log("Temp: " + result);
	    temperature.textContent = result; 
    });
	   
  }
  
  
    function getDesc(city) {
	  var descURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.code%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

	  
    fetch(descURL).then(function(response) {
	    return response.json();
    }).then(function(myJson) {
		console.log(myJson);
	    let result = myJson.query.results.channel.item.condition.code;
	    console.log("Code: " + result);
	    description.textContent = result; 
		displayImg(+result);
			
		
    });
	
	   
  }
  
  
  
  function displayImg(code) {
  
    switch (code){

        case 0:
        console.log('tornado');
        weatherImage("./weather-icons-master/wi-tornado.svg");
        break;

        case 1:
          console.log('tropical storm');
          break;

        case 2:
          console.log('hurricane');
           weatherImage("./weather-icons-master/wi-hurricane.svg");
          break;

        case 3:
          console.log('severe thunderstorms');
          weatherImage("./weather-icons-master/wi-thunderstorm.svg");
          break;

        case 4:
          console.log('thunderstorms');
          weatherImage("./weather-icons-master/wi-thunderstorm.svg");
          break;

        case 5:
          console.log('mixed rain and snow');
          weatherImage("./weather-icons-master/wi-rain-mix.svg");
          break;

        case 6:
          console.log('mixed rain and sleet');
          weatherImage("./weather-icons-master/wi-sleet.svg");
          break;

        case 7:
          console.log('mixed snow and sleet');
          weatherImage("./weather-icons-master/wi-sleet.svg");
          break;

        case 8:
          console.log('freezing drizzle');
          weatherImage("./weather-icons-master/wi-showers.svg");
          break;

        case 9:
          console.log('drizzle');
          weatherImage("./weather-icons-master/wi-showers.svg");
          break;

        case 10:
          console.log('freezing rain');
          weatherImage("./weather-icons-master/wi-showers.svg");
          break;

		case 23:
        console.log('cloudy');
        weatherImage("./weather-icons-master/wi-cloudy.svg");
        break;
		  
        case 26:
          console.log('cloudy');
          weatherImage("./weather-icons-master/wi-cloudy.svg");
          break;

        case 27:
          console.log('mostly cloudy');
          weatherImage("./weather-icons-master/wi-cloudy.svg");
          break;

        case 28:
          console.log('mostly cloudy (day)');
          weatherImage("./weather-icons-master/wi-day-cloudy-high.svg");
          break;

        case 29:
          console.log('partly cloudy');
          weatherImage("./weather-icons-master/wi-day-cloudy-high.svg");
          break;
		  
        case 32:
          console.log('sunny');
          weatherImage("./weather-icons-master/wi-day-sunny.svg");
          break;

        case 33:
          console.log('mostly clear');
          weatherImage("./weather-icons-master/wi-day-cloudy-high.svg");
          break;

        case 34:
          console.log('mostly sunny');
          weatherImage("./weather-icons-master/wi-day-sunny-overcast.svg");
          break;

        default:
          console.log("unknown type of weather code");

    }

  }




	
    
  

function weatherImage(path){
    var x = document.createElement('IMG');
    x.setAttribute("src", path );
    x.setAttribute("alt", "weatherImage");
    x.setAttribute("width", "40%");
    x.setAttribute("height", "40%");
    document.querySelector(".image").replaceChild(x, old);
	old = x;

  }
  
  
  
  
   // function getHumidity(city, callback) {
	  
	  // var x;
	  // var humidityURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20atmosphere.humidity%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
      // var humidityReq = new XMLHttpRequest();

      // humidityReq.open('GET', humidityURL);
      // humidityReq.responseType = 'json';
	  
      // humidityReq.send();

      // humidityReq.onload = function() {
	  // var humidity = humidityReq.response;
	  // console.log("current city: " + city);
	  // console.log(humidity.query.results.channel.atmosphere.humidity);
	  // x = "Humidity: " + humidity.query.results.channel.atmosphere.humidity + "%";
	  // callback(x);
	 
      // }
	
	  
  // }
  
  
  
  //var temperature2 = temperature;

// var getHumidity = function(data) {
    // var air = data.query.results.channel.atmosphere;
	  // console.log("getHumidity() is working");
    // humidity.textContent = "Humidity: " + air.humidity + "%";
  // };

  // var getTemp = function(data) {
    // var currentTemp = data.query.results.channel.item.condition;
	  // console.log("getTemp() is working");
    // temperature.textContent =   currentTemp.temp;
  // };


  // var getdescription = function(data) {
    // var currentstate = data.query.results.channel.item.condition;
	  // console.log("getdescription() is working");

     // console.log(currentstate.code);
