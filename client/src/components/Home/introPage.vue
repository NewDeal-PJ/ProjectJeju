<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="695px"


      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"      

    >
      <q-carousel-slide name="first" img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">제주 올래?</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="second" img-src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">제주 올래?</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="third" img-src="https://wehotel.co.kr/wp-content/uploads/sites/35/2019/06/Spring-of-Halla-mountain_1920x1080.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">제주 올래?</div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
          <q-carousel-control
            position="bottom"
            :offset="[16, 8]"
            class="text-white text-center rounded-borders"
            style="padding: 20px 8px; margin-bottom: -20px">

            <div>
              <a href="http://localhost:9000/#/api/map">
                <div class="q-pa-md q-gutter-sm">
                  <q-btn class="glossy" rounded color="orange" label="START" @click="Start" style="font-size: 11pt"></q-btn>
                </div>
              </a>
            </div>
          </q-carousel-control>
      </template>

    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('first'),
      autoplay:ref(true)
    }
  }
}
</script>

<style style>
.custom-caption{
  text-align: center;
  padding: 50px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

a{text-decoration: none;}




</style>