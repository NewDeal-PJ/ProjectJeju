<template>
  <Header></Header>
  <div class="foodDetailPic">
    <div class="q-pa-sm" style="width: 60%; padding: 20px;">
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
        transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">

        <!-- <q-carousel-slide :name="1" img-src={{ homeimg }} />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->

        <!-- <q-carousel-slide
              v-for = "slide in imgjsdata"
              :name = "slide.path"
              :img-src = "slide.imgurl">
            </q-carousel-slide> -->

        <q-carousel-slide v-for="slide in imgjsdata" :name="slide.id" :img-src="slide.imgurl">
        </q-carousel-slide>

      </q-carousel>
    </div>
    <!-- <div class="foodDetailInfo"> -->
    <div class="foodDetailInfo" v-for="dataItem in jsdata" :key="dataItem.STOREID" :name="dataItem.STOREID">
      <!-- <p>🍽️식당이름</p> -->
      <p style="font-size: 25px; font-weight: bold;"> {{ dataItem.STORENAME }} </p>
      <!-- <p>식당주소</p> -->
      <p> {{ dataItem.ADDRESS }} </p>
      <!-- <P> 식당전화번호</P> -->
      <p> {{ dataItem.TEL }} </p>
      <!-- <p>영업시간</p> -->
      <p> {{ dataItem.OPEN }} </p>
      <!-- <p>식당소개</p>
          <p> {{ dataItem.INFO }} </p> -->
      <!-- <p>테마키워드</p> -->
      <p> {{ dataItem.KEYWORD }} </p>
      <!-- <p>별점</p> -->
      <div style="display: flex;">
        <span> ⭐</span>
        <p> {{ dataItem.STARRATE }} </p>
      </div>

      <div>
        <div>
          <div class="q-pa-md" style="max-width: 350px">
            <q-list padding bordered>
              <q-expansion-item dense expand-separator icon="house" label="식당소개">
                <q-card>
                  <q-card-section>
                    <p> {{ dataItem.INFO }} </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
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
import { ref, onMounted } from 'vue'
import { reactive } from 'vue';
import Footer from '../components/Home/Footer.vue'
import { useRoute } from "vue-router";
export default {
  components: { Header, Footer, RestReview },
  setup() {
    const submitResult = ref([])
    const route = useRoute()
    onMounted(() => {
      if (!route.query.auth) {
        axios.get("/api/login").then((res) => {
          if (res.data.id!=='') {
            window.location.href = 'http://localhost:9000/#/detail/' + route.params.id + '?auth=' + res.data.id;
          }
        })
      }
    })
    return {
      slide: ref(1),
      fullscreen: ref(false),
      quality: ref(3),
      submitResult,
      onSubmit(evt) {
        const formData = new FormData(evt.target)
        const data = []
        for (const [name, value] of formData.entries()) {
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
      imgjsdata: [],
    }
  },
  mounted() {
    this.getStore()
  },
  methods: {
    getStore() {
      axios({
        method: 'get',
        url: 'http://localhost:3000/store/' + this.$route.params.id,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then((Response) => {
        for (let i = 0; i < Response.data.length; i++) {
          const uuid = Response.data[i].UUID
          const path = Response.data[i].PATH
          const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
          this.imgjsdata.push({
            id: i,
            imgurl: url + path + '/' + uuid
          })
        }
        this.jsdata.push({
          STOREID: Response.data[0].STOREID,
          STORENAME: Response.data[0].STORENAME,
          CATEGORY: Response.data[0].CATEGORY,
          ADDRESS: Response.data[0].ADDRESS,
          OPEN: Response.data[0].OPEN,
          TEL: Response.data[0].TEL,
          INFO: Response.data[0].INFO,
          KEYWORD: Response.data[0].KEYWORD,
          STARRATE: Math.round(Response.data[0].STARRATE * 100) / 100,
        })
      })
        .then(() => {
          console.log(this.jsdata)
        }).catch(function (error) {
          console.log(error.toJSON())
        })
    }
  }
};



</script>

<style>
.foodDetailPic {
  margin: 0 auto;
  background-color: #f0ededf3;
  border-radius: 10px;
  width: 70%;
  display: flex;
  margin-top: 40px;
}

.foodDetailInfo {

  width: 40%;

  padding: 30px;
  margin: 0 auto;

}

img {
  max-width: 100%;
  max-height: 100%;

}

.cat {
  height: 300px;
  width: 300px;
  margin: 0 auto;
}



.foodDetailReviewStar {

  width: 60%;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 1px solid;

}
</style>
