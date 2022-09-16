<template lang="pug">

<!-- v-for -->

  main
    div(class="q-pa-md" style="padding: 10px 0; margin: 0 auto; width: 90%;")
      q-carousel(class="bg-grey-1 rounded-borders" style="height: 100%;" animated v-model="slide" navigation swipeable control-color="grey-2" :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true" )
        q-carousel-slide(:name="1" class="column no-wrap")
          div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
            q-card.card(class="my-restaurant-card" v-for="customStoreDATAItem in customStoreDATA" )
              q-img(:src="'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'+customStoreDATAItem.PATH+'/'+customStoreDATAItem.UUID" style="width:350px; max-width: 100%; height: 170px; max-height: 100%;")
              q-card-section
                div(class="row no-wrap items-center")
                div(class="col text-h6 ellipsis") {{ customStoreDATAItem.STORENAME }}
                q-card-section(class="q-pt-none")
                div(class="text-caption") {{ customStoreDATAItem.ADDRESS }}
              q-card-section(class="q-pt-none")
                div(class="text-caption text-grey"
                style="white-space: normal; display: -webkit-box; -webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;" ) {{ customStoreDATAItem.INFO }}
                div(class="text-subtitle2 text-red") {{ customStoreDATAItem.TEL }}

</template>

<script>
import { ref } from 'vue'
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  name: 'BestRestaurant',
  props: ['customStoreDATA'],
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
  // data(){
  //   return{
  //     dataList: [],
  //   }
  // },
  // mounted() {
  //   this.init()
  // },
  // methods:{
  //   init(){
  //     axios({
  //       method: 'post',
  //       url: 'http://localhost:3000/carousel',
  //       headers: { 'X-Requested-With': 'XMLHttpRequest' },
  //       responseType: 'json'
  //     })
  //       .then((Response) => {
  //         for (let i = 0; i < Response.data.length; i++) {
  //           if (this.dataList.length < 10) {
  //             const jsonData={
  //               hotelid : Response.data[i].HOTELID,
  //               name : Response.data[i].NAME,
  //               address : Response.data[i].ADDRESS,
  //               comments : Response.data[i].COMMENTS,
  //               price : Response.data[i].PRICE,
  //               starrate : Response.data[i].STARRATE,
  //               latitude : Response.data[i].LATITUDE,
  //               longitude : Response.data[i].LONGITUDE,
  //             }
  //             this.dataList.push(jsonData)
  //           }
  //         }
  //           // console.log(this.dataList)
  //       })
  //       .catch(function (error) {
  //         // 에러 핸들링
  //         console.log(error.toJSON());
  //       })
  //   }
  // }
}
</script>



<style>
  .my-restaurant-card{
    width: 250px;
    height: 400px;
    max-width: 100%;
    text-align: center;
    margin: 10px;
  }
  </style>
