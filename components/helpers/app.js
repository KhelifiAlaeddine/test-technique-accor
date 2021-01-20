//const userService = require('../../services/user-service');
const hotelService = require('../../services/hotel-service');
//const priceService = require('../../services/price-service');
const helper = require('../../services/helper');
const _ = require('lodash');

function findHotelsNearby(lat, lng, radius) {
    
    const hotels = hotelService.getHotels()
    let nearbyHotels = _.filter(hotels, function(hotel){
        hotel.distance = Math.round(helper.distance(lat, lng, hotel.latitude, hotel.longitude))
        return helper.distance(lat, lng, hotel.latitude, hotel.longitude) < radius
    });

    return nearbyHotels
}

/*function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    // TODO implement me
    return null;
}

function findHotelNearbyWithBestOfferForUser(lat, lng, radius, date, userId) {
    // TODO implement me
    return null;
}*/

module.exports = {
	findHotelsNearby: findHotelsNearby,
	/*findHotelNearbyWithBestOffer: findHotelNearbyWithBestOffer,
	findHotelNearbyWithBestOfferForUser: findHotelNearbyWithBestOfferForUser*/
}