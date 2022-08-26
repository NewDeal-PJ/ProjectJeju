<template lang="pug">
q-page
  Header
  Home
  HomeMap
  HomeBody
  Footer
</template>

<script>
import Header from '../components/Home/Header.vue';
import Home from '../components/Home/Home.vue';
import HomeMap from 'src/components/Home/HomeMap.vue';
import Footer from '../components/Home/Footer.vue';
import HomeBody from 'src/components/Home/HomeBody.vue';





export default {
  components: {
    Home,
    Header,
    HomeMap,
    HomeBody,
    Footer,
    Header,
    Home,
    HomeMap,
    Footer,
    HomeBody
}
}
</script>

<style lang="scss">
.name { font-size : 1rem; font-weight:bold;}
.tel { font-size: 0.8rem; font-weight:thin}
.good { background: lightgreen; }
</style>
