<template>
  <IntroHeader></IntroHeader>
  <div class="q-pa-md" style="padding: 0; overflow: hidden;">
    <q-carousel arrows animated v-model="slide" infinite :autoplay="autoplay"
      transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
      @mouseleave="autoplay = true" style="height: 100%; width: 100%; position: fixed;">
      <q-carousel-slide name="first"
        img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">웹사이트 소개 첫번째 내용 쓸 자리</div>
          <div class="text-subtitle1">J-Track 입니다</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="second"
        img-src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">웹사이트 소개 두번째 내용 쓸 자리</div>
          <div class="text-subtitle1">J-Track 입니다</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="third"
        img-src="https://wehotel.co.kr/wp-content/uploads/sites/35/2019/06/Spring-of-Halla-mountain_1920x1080.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">웹사이트 소개 세번째 내용 쓸 자리</div>
          <div class="text-subtitle1">J-Track 입니다</div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control position="bottom" :offset="[16, 8]" class="text-white text-center rounded-borders"
          style="padding: 20px 8px; margin-bottom: -20px">

          <div>
            <a href="#/api/map">
              <div class="q-pa-md q-gutter-sm">
                <q-btn class="glossy" rounded color="orange" label="START" @click="Start" style="font-size: 11pt">
                </q-btn>
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
import IntroHeader from './introHeader.vue'

export default {
    setup() {
        return {
            slide: ref("first"),
            autoplay: ref(true)
        };
    },
    components: { IntroHeader }
}
</script>

<style style>
.custom-caption {
  text-align: center;
  padding: 50px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

a {
  text-decoration: none;
}


</style>
