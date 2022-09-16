<template lang="pug">
<!-- v-for -->
  main
    div(class="q-pa-md" style="padding: 10px 0; margin: 0 auto; width: 90%;")
      q-carousel(class="bg-grey-1 rounded-borders" style="height: 100%;" animated v-model="slide" navigation swipeable control-color="grey-2" :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true" )
        q-carousel-slide(:name="1" class="column no-wrap")
          div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
            q-card.card(class="my-hotel-card" v-for="customHotelDATAItem in customHotelDATA" )
              q-img(:src="'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'+customHotelDATAItem.PATH+'/'+customHotelDATAItem.UUID" style="width:350px; max-width: 100%; height: 170px; max-height: 100%;")
              q-card-section
                div(class="row no-wrap items-center") {{ index }}
                div(class="col text-h6 ellipsis") {{ customHotelDATAItem.NAME }}
                q-card-section(class="q-pt-none")
                div(class="text-caption") {{ customHotelDATAItem.ADDRESS }}
              q-card-section(class="q-pt-none")
                div(class="text-caption text-grey"
                style="white-space: normal; display: -webkit-box; -webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;") {{ customHotelDATAItem.COMMENTS }}
                div(class="text-subtitle2 text-red") {{ customHotelDATAItem.PRICE }} 원~




        //- q-carousel-slide(:name="2" class="column no-wrap")
        //-   div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
        //-     q-card.card(class="my-card"
        //-     v-for="secondDataItem in secondDataList"
        //-     style="max-width: 300px; height: 400px; margin: 10px;")
        //-       q-img(:src="secondDataItem.imgurl" style="height: 170px;")
        //-       q-card-section
        //-         div(class="row no-wrap items-center")
        //-         div(class="col text-h6 ellipsis") {{ secondDataItem.name }}
        //-         q-card-section(class="q-pt-none")
        //-         div(class="text-caption") {{ secondDataItem.address }}
        //-       q-card-section(class="q-pt-none")
        //-         div(class="text-caption text-grey") {{ secondDataItem.comments }}
        //-         div(class="text-subtitle2 text-red") {{ secondDataItem.price }} 원~

        //- q-carousel-slide(:name="3" class="column no-wrap")
        //-   div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
        //-     q-card.card(class="my-card"
        //-     v-for="thirdDataItem in thirdDataList"
        //-     style="max-width: 300px; height: 400px; margin: 10px;" )
        //-       q-img(:src="thirdDataItem.imgurl" style="height: 170px;")
        //-       q-card-section
        //-         div(class="row no-wrap items-center")
        //-         div(class="col text-h6 ellipsis") {{ thirdDataItem.name }}
        //-         q-card-section(class="q-pt-none")
        //-         div(class="text-caption") {{ thirdDataItem.address }}
        //-       q-card-section(class="q-pt-none")
        //-         div(class="text-caption text-grey") {{ thirdDataItem.comments }}
        //-         div(class="text-subtitle2 text-red") {{ thirdDataItem.price }} 원~

        //- q-carousel-slide(:name="4" class="column no-wrap")
        //-   div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
        //-     q-card.card(class="my-card"
        //-     v-for="thirdDataItem in thirdDataList"
        //-     style="max-width: 300px; height: 400px; margin: 10px;" )
        //-       q-img(:src="thirdDataItem.imgurl" style="height: 170px;")
        //-       q-card-section
        //-         div(class="row no-wrap items-center")
        //-         div(class="col text-h6 ellipsis") {{ thirdDataItem.name }}
        //-         q-card-section(class="q-pt-none")
        //-         div(class="text-caption") {{ thirdDataItem.address }}
        //-       q-card-section(class="q-pt-none")
        //-         div(class="text-caption text-grey") {{ thirdDataItem.comments }}
        //-         div(class="text-subtitle2 text-red") {{ thirdDataItem.price }} 원~
  </template>

<script>
import { ref, watch } from 'vue'
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  name: 'BestHotel',
  props: ['customHotelDATA'],
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),

    }
  },
  // data(){
  //   return{
  //     firstDataList: [],
  //     secondDataList: [],
  //     thirdDataList: [],
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
  //         for (let i = 0; i < 4; i++) {
  //               const uuid = Response.data[i].UUID
  //               const path = Response.data[i].PATH
  //               const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
  //             const jsonData={
  //                 hotelid: Response.data[i].HOTELID,
  //                 name: Response.data[i].NAME,
  //                 address: Response.data[i].ADDRESS,
  //                 comments: Response.data[i].COMMENTS,
  //                 price: Response.data[i].PRICE,
  //                 starrate: Response.data[i].STARRATE,
  //                 latitude: Response.data[i].LATITUDE,
  //                 longitude: Response.data[i].LONGITUDE,
  //                 imgurl: url + path + '/' + uuid
  //             }
  //             this.firstDataList.push(jsonData)
  //         }
  //         for (let i = 4; i < 8; i++) {
  //               const uuid = Response.data[i].UUID
  //               const path = Response.data[i].PATH
  //               const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
  //               const jsonData = {
  //                 hotelid: Response.data[i].HOTELID,
  //                 name: Response.data[i].NAME,
  //                 address: Response.data[i].ADDRESS,
  //                 comments: Response.data[i].COMMENTS,
  //                 price: Response.data[i].PRICE,
  //                 starrate: Response.data[i].STARRATE,
  //                 latitude: Response.data[i].LATITUDE,
  //                 longitude: Response.data[i].LONGITUDE,
  //                 imgurl: url + path + '/' + uuid
  //               }
  //               this.secondDataList.push(jsonData)
  //           }
  //           for (let i = 8; i < 10; i++) {
  //               const uuid = Response.data[i].UUID
  //               const path = Response.data[i].PATH
  //               const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
  //               const jsonData = {
  //                 hotelid: Response.data[i].HOTELID,
  //                 name: Response.data[i].NAME,
  //                 address: Response.data[i].ADDRESS,
  //                 comments: Response.data[i].COMMENTS,
  //                 price: Response.data[i].PRICE,
  //                 starrate: Response.data[i].STARRATE,
  //                 latitude: Response.data[i].LATITUDE,
  //                 longitude: Response.data[i].LONGITUDE,
  //                 imgurl: url + path + '/' + uuid
  //               }
  //               this.thirdDataList.push(jsonData)
  //           }
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
.my-hotel-card{
  width: 250px;
  height: 400px;
  max-width: 100%;
  text-align: center;
  margin: 10px;
}
</style>
