<template>
  <div class="card">
    <div class="flex-wrapper">
      <div>
        <img class="hotel-img" src="../resources/hotel.jpg" alt="hotel room" />
      </div>
      <div class="right-content">
        <h1><span>{{result.commercialName}}</span>
          <img v-for="n in result.localRating" :key="n" class="rating-star" src="../resources/rating-star.svg" alt="star" />
        </h1>
        <p>Hotels - {{(result.distance / 1000).toFixed(1)}} Km de votre recherche</p>
        <p><img src="../resources/tripadvisor.png"/> 4/5  (5876 avis)</p>
        <div class="hotel-facilities">
          <img src="../resources/parking.svg"/>
          <img src="../resources/wifi.svg"/>
          <img src="../resources/restaurant.svg"/>
          <img src="../resources/air-conditioning.svg"/>
          <img src="../resources/beverage.svg"/>
        </div>
        <div class="price-offer">
          <p class="price-intro">Tarif à partir de (1)</p>
          <p class="price-details">Pour 1 nuit | 1 adulte</p>
          <p class="price">{{result.offer.price}} € <span v-if="result.offer.fare === 'STANDARD'">Public</span><span v-else>Membre</span></p>
        </div>
        <div class="bottom-links">
          <a href="#" class="link-calendar">Voir les calendrier des prix</a>
          <a href="#" class="btn">Sélectionner une chambre</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from './helpers/app.js'

export default {
  name: 'Card',
  data: function () {
    return {
      result: app.findHotelNearbyWithBestOffer(48.856564, 2.351711, 5000, '13/01/2021')
    }
  }
}

</script>

<style>
.card{
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 60px;
}
.flex-wrapper{
  display: flex;
}
.hotel-img{
  border-radius: 10px;
}
.right-content{
  padding-left: 20px;
  width: 100%;
}
h1{
  margin-bottom: 0;
  margin-top: 0;
}
p{
  margin: 4px 0
}
.rating-star{
  max-width: 10px;
  vertical-align: super;
}
.hotel-facilities{
  display: flex;
}
.hotel-facilities img{
  max-width: 30px;
}
.price-offer{
  position: relative;
  width: 100%;
  height: 50%;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 12px;
  text-align: right;
  padding-right: 10px;
}
.price-offer p{
  position: absolute;
  right: 10px
}
.price-intro{
  text-transform: uppercase;
  background-color: white;
  border-radius: 15px;
  display: inline-block;
  padding: 5px;
  top: -20px;
}
.price-details{
  bottom: 40px;
  color: gray
}
.price{
  bottom: 20px;
}
.bottom-links{
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}
.link-calendar{
  color: #1264a3;
  text-decoration: underline;
  align-self: center;
}
.btn{
  padding: 8px 24px;
  color: #fff;
  background-color: #068484;
  border-radius: 60px;
  text-decoration: none;
}
</style>
