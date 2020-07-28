const axios = require("axios");

const forecast = (latArg, longArg, callback) => {
  const url = 
    "http://api.openweathermap.org/data/2.5/onecall?lat=" +
     latArg + "&lon=" + longArg + "&units=metric&appid=a2e20ad903fd6b1ddb5670bb56c2151e";

     axios({method: "get", url})
      .then(res => {
        if (res.data.message) {
          return callback("Unable to find location", undefined);

        }

        callback(undefined, {
          
          currentForecast: " There is going to be " + res.data.current.weather[0].description +".",
          temp: " It is currently " + res.data.current.temp + " degrees celsius out there. The high today is " +
          res.data.daily[0].temp.max + " with a low of " + res.data.daily[0].temp.min,
          
        });

      })
      .catch(error => {
        
        callback("Unable to connect to weather services", undefined);
      })
}

module.exports = forecast;
