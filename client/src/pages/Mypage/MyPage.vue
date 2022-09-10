<template>
  <Header></Header>
  <div>
    <div class="myPageBox">
      <p class="myPageTitle"> My Page</p>
      <div class="myPageSelect">
        <div class="myPageMember">
          <a href="http://localhost:9000/#/api/userinfo" type="button" style="color: black;">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/4a9937e2-23f5-4595-bc39-6402a5e42187/image.png"
              width="80">
            <p>회원정보 수정</p>
          </a>
        </div>
        <div class="myPageOrder">
          <a href="http://localhost:9000/#/api/orderinfo" type="button" style="color: black;">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/2422b5e0-250f-4a47-b0ec-631ca1c4ee94/image.png"
              width="80">
            <p>주문내역</p>
          </a>
        </div>
        <div class="myPageWrite">
          <a :href="writinginfoUrl" type="button" style="color: black;">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/53ea14e5-f61a-44fb-ba7d-d1c542bc36a7/image.png"
              width="80">
            <p>작성한 글</p>
          </a>
        </div>
        <!-- <div class="myPageLike">
            <a href ="http://localhost:9000/#/likeinfo" type="button"  style="color: black;">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/bdc5cd07-2946-4985-847c-03689d903d46/image.png" width="80" >
            <p>좋아요</p>
          </a>
          </div> -->
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>


<script>
import axios from 'axios';
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import { useQuasar } from 'quasar';
import { useRoute } from "vue-router";
import { onMounted } from "vue";
export default {
  setup() {
    const route = useRoute()
    const $q = useQuasar();
    onMounted(() =>
      axios.get("/api/login").then((res) => {
        const id = res.data.id
        if (id !== route.params.id) {
          $q.notify({
            color: 'negative',
            position: 'center',
            message: '잘못된 접근입니다.'
          })
          window.location.href = 'http://localhost:9000/#/';
        }
      }));
      const writinginfoUrl = "http://localhost:9000/#/api/writinginfo?auth="+route.params.id;
      return{
        writinginfoUrl
      }
  },
  components: { Header, Footer }
}</script>

<style>
.myPageTitle {
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  text-align: center;
  padding-top: 10px;
  margin-top: 70px;
}

.myPageSelect {
  margin: 0 auto;
  width: 70%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 30px;
  padding-left: 170px;
}

.myPageMember {
  margin: 10px;
  width: 25%;
  border: 4px solid #FAEBD7;
  border-radius: 5px;
  padding: 5%;

}

.myPageOrder {
  border: 4px solid #FAEBD7;
  border-radius: 5px;
  margin: 10px;
  width: 25%;
  padding: 5%;
}

.myPageWrite {
  border: 4px solid #FAEBD7;
  border-radius: 5px;
  margin: 10px;
  width: 25%;
  padding: 5%;
}

.myPageLike {
  border: 4px solid #FAEBD7;
  border-radius: 5px;
  margin: 10px;
  width: 25%;
  padding: 5%;
}

a {
  text-decoration: none
}
</style>
