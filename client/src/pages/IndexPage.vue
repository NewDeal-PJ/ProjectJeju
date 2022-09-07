<template lang="pug">
q-page
  Header
  SearchBar
  HomeMap
  BestHotel
  BestRestaurant

  Footer
</template>

<script>
import Header from '../components/Home/Header.vue';
import SearchBar from '../components/Home/SearchBar.vue';
import HomeMap from 'src/components/Home/HomeMap.vue';
import Footer from '../components/Home/Footer.vue';
import BestHotel from 'src/components/Home/BestHotel.vue';
import BestRestaurant from '../components/Home/BestRestaurant.vue';







export default {
  components: {
    Header,
    SearchBar,
    HomeMap,
    Footer,
    BestHotel,
    BestRestaurant,

}
}
</script>

<style lang="scss">
.name { font-size : 1rem; font-weight:bold;}
.tel { font-size: 0.8rem; font-weight:thin}
.good { background: lightgreen; }
</style>
