<template>
  <Header></Header>
  <body>
    <div>
      <div class="myPageBox">
        <p class="myPageTitle"> My Page</p>
        <div class="myPageSelect" >
          <div class="myPageMember" v-if="account.id">
            <a href="#/api/userinfo" type="button" style="color: black;">
              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/4a9937e2-23f5-4595-bc39-6402a5e42187/image.png"
                >
              <p>회원정보 수정</p>
            </a>
          </div>
          <div class="myPageOrder">
            <a href="#/api/orderinfo" type="button" style="color: black;">
              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/2422b5e0-250f-4a47-b0ec-631ca1c4ee94/image.png"
         >
              <p>주문내역</p>
            </a>
          </div>
          <div class="myPageWrite">
            <a :href="writinginfoUrl" type="button" style="color: black;">
              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/53ea14e5-f61a-44fb-ba7d-d1c542bc36a7/image.png"
           >
              <p>작성한 글</p>
            </a>
          </div>
          <div class="myMapTracking">
              <a href ="#/api/mymaptracking" type="button"  style="color: black;">
              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/36ffecab-fbd6-4cba-b352-106310a3d3c7/image.png"  >
              <p>나의 <br/>트래킹</p>
            </a>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </body>
</template>


<script>
import axios from 'axios';
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import { useQuasar } from 'quasar';
import { useRoute } from "vue-router";
import { onMounted } from "vue";
export default {
  data() {
    const account = {
      id: '',
      name: ''
    }
    const  social = {
        id : '',
        method : '',
        nickname : ''
    }
    return{
      account,
      social
    }
  },
  setup() {
    const route = useRoute()
    const $q = useQuasar();
    onMounted(() =>
      axios.get("http://localhost:3000/api/login").then((res) => {
        const id = res.data.id
        if (id !== route.params.id) {
          $q.notify({
            color: 'negative',
            position: 'center',
            message: '잘못된 접근입니다.'
          })
          window.location.href = '#/';
        }
      }));
      const writinginfoUrl = "#/api/writinginfo?auth="+route.params.id;
      return{
        writinginfoUrl
      }
  },
  mounted (){
// 백엔드의 계정정보를 호출
axios.get("http://localhost:3000/api/login").then((res) => {
      this.account = res.data;
      console.log(this.account)
      if(this.account.id === ''){
        window.location.href = '#/api/login';
        alert("로그인 해주세요")
      }
    });
    // 백엔드의 소셜 계정정보를 호출
    axios.get("http://localhost:3000/api/kakao_login").then((res) => {
      this.social = res.data;
    });
  },

  components: { Header, Footer }
}

</script>

<style>
.myPageTitle {
  font-size: 35px;
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
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

.myMapTracking {
  border: 4px solid #FAEBD7;
  border-radius: 5px;
  margin: 10px;
  width: 25%;
  padding: 5%;
}

a {
  text-decoration: none
}

.myPageMember:hover{
  background-color: bisque;
}

.myPageOrder:hover{
  background-color: bisque;
}

.myPageWrite:hover{
  background-color: bisque;
}

.myMapTracking:hover{
  background-color: bisque;
}

img{
  width: 80;
  max-width: 100%;
}

</style>
