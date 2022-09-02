<template>
<Header></Header>
  <div class="foodDetailPic">
    <div class="q-pa-sm"
    style="width: 60%; padding: 20px;">
        <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
    </div>
    <!-- <div class="foodDetailInfo"> -->
    <div class="foodDetailInfo" style=" width: 50%; margin: 0 auto;padding: 20px;" v-for="dataItem in jsdata" :key="dataItem.STOREID" :name="dataItem.STOREID">
        <!-- <p>🍽️식당이름</p> -->
        <p> {{ dataItem.STORENAME }} </p>
        <!-- <p>식당주소</p> -->
        <p> {{ dataItem.ADDRESS }} </p>
        <!-- <P> 식당전화번호</P> -->
        <p> {{ dataItem.TEL }} </p>
        <!-- <p>영업시간</p> -->
        <p> {{ dataItem.OPEN }} </p>
        <!-- <p>식당소개</p> -->
        <p> {{ dataItem.INFO }} </p>
        <!-- <p>테마키워드</p> -->
        <p> {{ dataItem.KEYWORD }} </p> 
        <!-- <p>별점</p> -->
        <div style="display: flex;">
          <span> ⭐</span>
          <p> {{ dataItem.STARRATE }} </p>
        </div>

    </div>
  </div>
  <RestReview></RestReview>


<Footer></Footer>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
import RestReview from "../components/Home/RestReview.vue";
import Header from 'src/components/Home/Header.vue';
import { ref } from 'vue'
import Footer from '../components/Home/Footer.vue'
export default{
        setup () {
        const submitResult = ref([])
        return {
        slide: ref(1),
        fullscreen: ref(false),

        quality: ref(3),
        submitResult,
        onSubmit (evt) {
        const formData = new FormData(evt.target)
        const data = []
        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }
        submitResult.value = data
        }
    }
    },
    data() {
      return {
        jsdata: [],
      }
    },
    mounted(){
      this.getStore()
    },
    methods: {
      getStore() {
        axios({
          method: 'post',
          url: 'http://localhost:3000/store',
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          responseType: 'json'
        }).then((Response) => { 
          // 나중에 수정 (삭제X)
          // for (let i=0; i < Response.data.length; i++)
          //   this.jsdata.push({
          //     STOREID: Response.data[i].STOREID,
          //     STORENAME: Response.data[i].STORENAME,
          //     CATEGORY: Response.data[i].CATEGORY,
          //     ADDRESS: Response.data[i].ADDRESS,
          //     OPEN: Response.data[i].OPEN,
          //     TEL: Response.data[i].TEL,
          //     INFO: Response.data[i].INFO,
          //     KEYWORD: Response.data[i].KEYWORD,
          //     STARRATE: Response.data[i].STARRATE,

          for (let i=0; i < 1; i++) {
            this.jsdata.push({
              STOREID: Response.data[0].STOREID,
              STORENAME: Response.data[0].STORENAME,
              CATEGORY: Response.data[0].CATEGORY,
              ADDRESS: Response.data[0].ADDRESS,
              OPEN: Response.data[0].OPEN,
              TEL: Response.data[0].TEL,
              INFO: Response.data[0].INFO,
              KEYWORD: Response.data[0].KEYWORD,
              STARRATE: Response.data[0].STARRATE,    
            })
          }
        })
        .then(()=>{
          console.log(this.jsdata)
        }).catch(function (error) {
          console.log(error.toJSON())
        })
      }
    },
    components: { Header, Footer,RestReview }
};



</script>

<style>
.foodDetailPic{
    margin: 0 auto;
    background-color: #f0ededf3;
    border-radius: 10px;
    width:70%;
   display: flex;
    margin-top: 40px;
}
.foodDetailInfo{

    width: 40%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    padding: 30px;

}

img{
  max-width:100%;
  max-height:100%;

}

.cat {
 height: 300px;
 width: 300px;
 margin: 0 auto;
}



.foodDetailReviewStar{

    width: 60%;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 40px;
    border-radius: 5px;
    border: 1px solid;

}
</style>
