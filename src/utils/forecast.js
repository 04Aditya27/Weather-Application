const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=53220dca37e872c995de08348b8635a5&query=' + latitude +',' + longitude;
    request({url : url, json : true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if(body.error) {
            callback('Unable to find location. Try another location!')
        }
        else {
            callback(undefined, "Today's weather is " + body.current.weather_descriptions[0] +  
                ". Today's temperature is " + body.current.temperature + "°C. " +  
                "Chance of rain is " + body.current.precip + "%.")                  
        }
    })
}

module.exports = forecast