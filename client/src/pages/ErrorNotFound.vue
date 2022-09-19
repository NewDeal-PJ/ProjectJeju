<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center"
    style="background-color: antiquewhite;"
  >
    <div>
      <div>
        <img
          src="https://velog.velcdn.com/images/kimjyunny_dev/post/daea10d9-d096-45e1-b218-0ebef17ab028/image.svg"
          width="1500"
          height="200"
        />
      </div>
      <div
        style="color: black; font-size: 1.8rem; font-family: 'Nanum Gothic Coding', monospace;"
      >
        죄송합니다 <br />
        요청하신 페이지를 찾을 수 없습니다.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="orange"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

<style></style>
