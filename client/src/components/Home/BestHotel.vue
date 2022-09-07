<template lang="pug">

//- 한페이지에 4개의 카드씩 들어가는데 4개의 카드에 각각 다른 정보넣기

<!-- v-for -->
div(style="font-size: 30px; font-weight: bold; margin-left: 80px;")
main
  div(class="q-pa-md"
  style="padding: 10px 0; margin: 0 auto; width: 90%;")
    q-carousel(class="bg-grey-2 rounded-borders" animated v-model="slide" navigation swipeable control-color="grey-2" :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true" )
      q-carousel-slide(v-for="dataItem in dataList" :key="dataItem.name" :name="dataItem.name" class="column no-wrap")
        div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
          q-card.card(class="my-card")
            q-img(:src="dataItem.imgurl" style="height: 150px;")
            q-card-section
              div(class="row no-wrap items-center")
                div(class="col text-h6 ellipsis") {{ dataItem.name }}
                q-card-section(class="q-pt-none")
              div(class="text-caption") {{ dataItem.address }}
            q-card-section(class="q-pt-none")
              div(class="text-caption text-grey") {{ dataItem.comments }}
              div(class="text-subtitle2 text-red") {{ dataItem.price }} 원~

              div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
          q-card.card(class="my-card")
            q-img(src="https://search.pstatic.net/common/?src=https://media.datahc.com/HI595096817.jpg&type=f1128_672_hotel" style="height: 150px;")
            q-card-section
              div(class="row no-wrap items-center")
                div(class="col text-h6 ellipsis") {{ dataItem.name }}
                q-card-section(class="q-pt-none")
              div(class="text-caption") {{ dataItem.address }}
            q-card-section(class="q-pt-none")
              div(class="text-caption text-grey") {{ dataItem.comments }}
              div(class="text-subtitle2 text-red") {{ dataItem.price }} 원~

              div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
          q-card.card(class="my-card")
            q-img(src="https://search.pstatic.net/common/?src=https://media.datahc.com/HI595096817.jpg&type=f1128_672_hotel" style="height: 150px;")
            q-card-section
              div(class="row no-wrap items-center")
                div(class="col text-h6 ellipsis") {{ dataItem.name }}
                q-card-section(class="q-pt-none")
              div(class="text-caption") {{ dataItem.address }}
            q-card-section(class="q-pt-none")
              div(class="text-caption text-grey") {{ dataItem.comments }}
              div(class="text-subtitle2 text-red") {{ dataItem.price }} 원~

                    div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
          q-card.card(class="my-card")
            q-img(src="https://search.pstatic.net/common/?src=https://media.datahc.com/HI595096817.jpg&type=f1128_672_hotel" style="height: 150px;")
            q-card-section
              div(class="row no-wrap items-center")
                div(class="col text-h6 ellipsis") {{ dataItem.name }}
                q-card-section(class="q-pt-none")
              div(class="text-caption") {{ dataItem.address }}
            q-card-section(class="q-pt-none")
              div(class="text-caption text-grey") {{ dataItem.comments }}
              div(class="text-subtitle2 text-red") {{ dataItem.price }} 원~
</template>

<script>
import { ref } from 'vue'
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
  data() {
    return {
      dataList: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/carousel',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.dataList.length < 10) {
              const uuid = Response.data[i].UUID
              const path = Response.data[i].PATH
              const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
              const jsonData = {
                hotelid: Response.data[i].HOTELID,
                name: Response.data[i].NAME,
                address: Response.data[i].ADDRESS,
                comments: Response.data[i].COMMENTS,
                price: Response.data[i].PRICE,
                starrate: Response.data[i].STARRATE,
                latitude: Response.data[i].LATITUDE,
                longitude: Response.data[i].LONGITUDE,
                imgurl: url + path + '/' + uuid
              }
              this.dataList.push(jsonData)
            }
          }
          console.log(this.dataList[0].imgurl)
          // console.log(this.dataList)
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
    }
  }
}
</script>



<style lang="sass" scoped>
.my-card
  max-width: 300px
  margin: 10px


</style>
