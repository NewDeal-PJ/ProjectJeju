<template>
<Header></Header>
<body>
  <div style="padding: 160px;">
    <div class="airplane">
      <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/6f0242f0-488a-4306-b697-f7157d0b865e/image.png" width="200"/>
    </div>
    <p class="cartMessage">
    구매가 정상적으로 <h style="color: red;">완료</h> 되었습니다.
    </p>
  </div>
</body>
<Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';




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
  padding: 20px;
}
.cartMessage{
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
