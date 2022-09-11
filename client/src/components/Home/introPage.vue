<!-- 
v-model:fullscreen="fullscreen"
vertical
swipeable
control-color="white"
navigation-icon="radio_button_unchecked"
padding
height="695px"
class="bg-purple text-white shadow-1 rounded-borders" -->


<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      height="713px"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
    <q-carousel-slide :name="1" img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg"  />
    
    <q-carousel-slide :name="2" img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg" />
    <q-carousel-slide :name="3" img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg" />
    </q-carousel>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn class="glossy" rounded color="orange" label="START"></q-btn>
  </div>



  
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}


</script>

<style>
.q-pa-md{
  padding: 0px 0px;
}


.glossy{
  margin: auto;
  display: block;


}

</style>











