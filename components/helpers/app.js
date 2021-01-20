//const userService = require('../../services/user-service');
const hotelService = require('../../services/hotel-service');
const priceService = require('../../services/price-service');
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

function SortOffers(offers) {
    
    offers = _.remove(offers, function(item) { 
        return item.offer !== undefined; 
    });

    offers.sort((a,b) => (a.offer.price - b.offer.price))

    let cheapest = null

    if(offers[0].offer.price != offers[1].offer.price){
        cheapest = offers[0]
    } else {
        let samePrice = [offers[0]]
        for(let i = 0; i<offers.length-1; i++){
            if(offers[i].offer.price === offers[i+1].offer.price){
                samePrice.push(offers[i+1])
            } else {
                break;
            }
        }
        cheapest = _.minBy(samePrice, function(item) { return item.distance });
    }
    return cheapest
}

function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    if(lat && lng && radius && date){
        const hotels = findHotelsNearby(lat, lng, radius)
        let allOffers = priceService.getSpecificPrices(hotels, date, 'STANDARD')
        return SortOffers(allOffers)
    } else {
        return null
    }
    
}

/*function findHotelNearbyWithBestOfferForUser(lat, lng, radius, date, userId) {
    // TODO implement me
    return null;
}*/

module.exports = {
	findHotelsNearby: findHotelsNearby,
	findHotelNearbyWithBestOffer: findHotelNearbyWithBestOffer,
	/*findHotelNearbyWithBestOfferForUser: findHotelNearbyWithBestOfferForUser*/
}