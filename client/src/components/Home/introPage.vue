<template>
  <IntroHeader></IntroHeader>
  <div class="q-pa-md" style="padding: 0; overflow: hidden;">
    <q-carousel
      arrows
      animated
      v-model="slide"
      :autoplay="autoplay"
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="height: 100%; width: 100%; position: fixed;"
    >
      <q-carousel-slide
        name="first"
        img-src="https://velog.velcdn.com/images/kimjyunny_dev/post/072d9c43-7183-4152-8048-27a6e21df906/image.jpeg"
      >
        <div
          class="absolute-bottom"
          style="text-align: center; padding: 40vh 0px; color: white; font-family: 'Nanum Gothic Coding', monospace;"
        >
          <div class="introText">
            <span class="type-text">{{ typeValue }} </span>

            <span class="cursor" :class="{ typing: typeStatus }"> &nbsp; </span>
          </div>
          <div style="font-size: 1.2rem; padding: 0em 1em;">
            J-TRACK에서 제주도 맛집, 숙박, 전기차 정보를 한눈에 쏙!<br />
            당신의 제주 여행 계획을 도와드립니다.
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="second"
        img-src="https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg"
      >
        <div
          class="absolute-bottom "
          style="text-align: center; padding: 40vh 0px; color: white; font-family: 'Nanum Gothic Coding', monospace;"
        >
          <div
            style="font-family: 'Black Han Sans', sans-serif; font-size: 2rem; padding: 0em 1em; "
          >
            J-TRACK을 이용하는 TIP 1
          </div>
          <div style="font-size: 1.2rem; padding: 0em 1em;">
            “나만의 경로 만들기” 버튼을 통해 원하는 목적지에 깃발을
            꽂아주세요!<br />반경 2km 내의 숙박과 맛집 정보를 알려드립니다.
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="third"
        img-src="https://wehotel.co.kr/wp-content/uploads/sites/35/2019/06/Spring-of-Halla-mountain_1920x1080.jpg"
      >
        <div
          class="absolute-bottom "
          style="text-align: center; padding: 40vh 0px; color: white; font-family: 'Nanum Gothic Coding', monospace;"
        >
          <div
            style="font-family: 'Black Han Sans', sans-serif; font-size: 2rem; padding: 0em 1em;"
          >
            J-TRACK을 이용하는 TIP 2
          </div>
          <div style="font-size: 1.2rem; padding: 0em 1em;">
            지도에서 원하시는 숙소, 맛집을 선택하여 사람들이 남긴 리뷰를
            확인하세요!<br />키워드로 만들어진 워드클라우드도 볼 수 있습니다.
          </div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="bottom"
          :offset="[16, 8]"
          class="text-white text-center rounded-borders"
          style="padding: 20px 8px; margin-bottom: -20px"
        >
          <div>
            <a href="#/api/map">
              <span class="q-pa-md q-gutter-sm" style="padding: 0;">
                <q-btn
                  rounded
                  outline
                  style="color: white; font-size: 1rem;

               font-family: 'Raleway', sans-serif; margin-bottom: 30vh;"
                  label="START"
                />
              </span>
            </a>
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import IntroHeader from "./introHeader.vue";

export default {
  setup() {
    return {
      slide: ref("first"),
      autoplay: ref(true),
    };
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["혼저옵서예"],
      typingSpeed: 200,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  components: { IntroHeader },
};
</script>

<style style>
.custom-caption {
  text-align: center;
  padding: 50px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

a {
  text-decoration: none;
}

.introText {
  font-family: "Song Myung", serif;
  font-size: 3rem;
  font-weight: bold;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #f9ea8f;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  50% {
    background-color: transparent;
  }
}
</style>
