<template>
<Header></Header>
<div>
  <p class="myTrackingMapTitle"> Map Tracking Screenshot</p>
  <div class="myTrackingMapShot">
    <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/0b078682-a549-4165-9d77-ccf89a9089c1/image.png"/>
  </div>
</div>
<MapTracking></MapTracking>
<Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import MapTracking from 'src/components/Home/mapTracking.vue';
  export default{
    components: { Header, Footer, MapTracking }
}
</script>

<style>
.myTrackingMapTitle{
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  text-align: center;
  margin-top: 60px;
}

  .myTrackingMapShot{
    margin: 0 auto;
    padding: 20px;
  }

  img{
    max-width: 100%;
  }

</style>
