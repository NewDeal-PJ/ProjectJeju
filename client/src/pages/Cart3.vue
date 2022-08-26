<template>
<Header></Header>
<div class="airplane">
  <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/6f0242f0-488a-4306-b697-f7157d0b865e/image.png" width="400"/>
</div>
<div class="message">
 구매가 정상적으로 <h style="color: red;">완료</h> 되었습니다.
</div>
<Footer></Footer>
</template>

<script>
import Header from "../components/Home/Header.vue";
import Footer from "../components/Home/Footer.vue";


export default {
  components: {
    Header,
    Footer
}
}
</script>


<style>
.airplane{
  text-align: center;
  padding: 30px;
}
.message{
  font-weight: bold;
  font-size: 45px;
  text-align: center;
  font-family: 'Noto Serif KR', serif;
}
</style>
