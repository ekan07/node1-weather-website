const request = require("request");

const forecast = (latArg, longArg, callback) => {
  const url =
    "http://api.openweathermap.org/data/2.5/onecall?lat=" +
    latArg +
    "&lon=" +
    longArg +
    "&units=metric&appid=a2e20ad903fd6b1ddb5670bb56c2151e";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.message) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily[0].weather[0].description +
          ". It is currently " +
          body.current.temp +
          " degrees celsius out there. There is going to be " +
          body.current.weather[0].description +
          "."
      );
    }
  });
};

module.exports = forecast;
