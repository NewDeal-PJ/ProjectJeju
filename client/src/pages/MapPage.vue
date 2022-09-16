<template>
  <Header></Header>
  <HomeMap></HomeMap>
  <Footer></Footer>
</template>


<script>
import Header from "src/components/Home/Header.vue";
import Footer from "../components/Home/Footer.vue";
import HomeMap from "src/components/Home/HomeMap.vue";
  export default{
    components: { Header, Footer, HomeMap}
}

</script>


