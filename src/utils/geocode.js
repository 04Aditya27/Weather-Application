const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRpdHlhLTA0IiwiYSI6ImNtNmhxNXhjeDAwYmEya3MzcjRjNXM2MHYifQ.bsrTU4IORJf92Hsx3H4QZQ&limit=1'
    request({url : url, json : true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another location!')
        } else {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode