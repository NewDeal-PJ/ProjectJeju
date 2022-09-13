<template>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        height="620px"
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg" />
        <q-carousel-slide :name="2" img-src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg" />
        <q-carousel-slide :name="3" img-src="https://wehotel.co.kr/wp-content/uploads/sites/35/2019/06/Spring-of-Halla-mountain_1920x1080.jpg" />

        <template v-slot:control>
          <q-carousel-control
            position="bottom"
            :offset="[16, 8]"
            class="text-white text-center rounded-borders"
            style="background: rgba(255, 255, 255, .2); padding: 20px 8px; margin-bottom: 50px">

          <div>
            <span> 어서오세요 제주 올레 입니다.<br> 어서오세요 제주 올레 입니다.</span>


          </div>
            <div>
              <a href="http://localhost:9000/#/api/map">
                <div class="q-pa-md q-gutter-sm">
                  <q-btn class="glossy" rounded color="orange" label="START" @click="Start"></q-btn>
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
        slide: ref(1),
        autoplay: ref(true)
      }
    }
  }
  </script>

  <style>

    .glossy{
      margin: auto;
      display: block;
    }

    a{text-decoration: none;}



    </style>









