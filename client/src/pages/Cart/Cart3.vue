<template>
<Header></Header>
  <div style="padding: 80px;">
    <div class="airplane">
      <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/6f0242f0-488a-4306-b697-f7157d0b865e/image.png" width="200"/>
    </div>
    <p class="cartMessage">
    구매가 정상적으로 <h style="color: red;">완료</h> 되었습니다.
    </p>
  </div>
<Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import axios from 'axios';


export default {
  data : () => {
      const order_info = JSON.parse(localStorage.getItem("order_info")) || ""
      return {
        order_info
      };
    },
    created(){
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/orderItem',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json',
      })
        .then((Response) => {
          //결제 API 성공 시
          console.log(Response)
        })
    },
    mounted(){
      window.localStorage.removeItem('cart')
      window.localStorage.removeItem('order_info')
      window.localStorage.removeItem('totalPrice')
    },

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
