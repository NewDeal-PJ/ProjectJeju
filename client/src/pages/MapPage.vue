<template>
  <Header></Header>
  <HomeMap></HomeMap>
  <MapTracking></MapTracking>
  <Footer></Footer>
</template>


<script>
import Header from "src/components/Home/Header.vue";
import Footer from "../components/Home/Footer.vue";
import HomeMap from "src/components/Home/HomeMap.vue";
import MapTracking from "src/components/Home/mapTracking.vue";
  export default{
    components: { Header, Footer, HomeMap, MapTracking }
}

</script>


