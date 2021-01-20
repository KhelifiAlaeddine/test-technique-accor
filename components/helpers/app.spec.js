const app = require('./app');
const priceService = require('../../services/price-service');
const dates = ['11/01/2021','12/01/2021','13/01/2021','14/01/2021']

describe('App', () => {
  test('findHotelsNearby() returns an empty array when no args are passed', () => {
    expect(app.findHotelsNearby().length).toBe(0);
  });
  test('when user is at the center of Paris, some hotels are found', () => {
    expect(app.findHotelsNearby(48.856564, 2.351711, 2000).length).toBeGreaterThan(0);
  });
  test('findHotelNearbyWithBestOffer() returns null when no args are passed', () => {
    expect(app.findHotelNearbyWithBestOffer()).toBeNull();
  });
  for(let i=0; i<dates.length; i++){
    test('when user is at the center of Paris, and looks for the cheapest offer in hotels around for '+dates[i]+', an hotel is found', () => {
      expect(app.findHotelNearbyWithBestOffer(48.856564, 2.351711, 2000, dates[i]).ridCode).toBeDefined();
    });
  }
  test('findHotelNearbyWithBestOfferForUser() returns null when no args are passed', () => {
    expect(app.findHotelNearbyWithBestOfferForUser()).toBeNull();
  });
  for(let i=0; i<dates.length; i++){
    test('when a subscribed user is at the center of Paris, and looks for the cheapest offer in hotels around for '+dates[i]+', an hotel is found', () => {
      expect(app.findHotelNearbyWithBestOfferForUser(48.856564, 2.351711, 2000, dates[i], 2).ridCode).toBeDefined();
    });
  }
  for(let i=0; i<dates.length; i++){
    test('Sort() function returns an offer for the date'+dates[i], () => {
      const hotels = app.findHotelsNearby(48.856564, 2.351711, 5000)
        let allOffers = priceService.getSpecificPrices(hotels, dates[i], 'STANDARD')
        expect(app.sortOffers(allOffers)).toBeDefined()
    })
  }
});
