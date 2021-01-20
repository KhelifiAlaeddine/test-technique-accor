let PRICES = require('./data/prices.json').prices;
const _ = require('lodash');

const getPrices = () => {
	return PRICES;
}

const getSpecificPrices = (hotels, date, offerType) => {
	
	let allHotelOffers = _.forEach(hotels, function(hotel) {
		hotel.offer = PRICES.filter(item => item.ridCode === hotel.ridCode);
	});

	const specificPrices = _.forEach(allHotelOffers, function(hotelOffer) {
		hotelOffer.offer = hotelOffer.offer[0].offers.filter(item => item.fare === offerType && item.date === date)[0];
	});

	return specificPrices
}
module.exports = {
	getSpecificPrices: getSpecificPrices,
	getPrices: getPrices
}