
getWeather();

function getWeather() {
	var city = 'Krakow';
	
	


    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '") and u="c" &format=json', function (data) {
        if (data.query.results === null) {
            console.log("Location not found: " + city + "!");

        } else {
           // $('.weather').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
            //   data.query.results.channel.item.description);
            console.log("temperature in " + city + " is: "  +
            data.query.results.channel.item.condition.temp +
            data.query.results.channel.units.temperature);
			
			console.log("humidity in " + city + " is: "  +
            data.query.results.channel.atmosphere.humidity +
            "%");
        }

    });
}