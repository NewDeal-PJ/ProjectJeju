<template lang="pug">
div(class="q-pa-md" style="max-width: 90%; overflow:hidden; margin: 0 auto; text-align: center; padding: 15px 0px;")
  q-btn-dropdown(split push no-caps @click="displayHotel(category, filter, locationFilterHotel)" style="margin-left: 0.8rem; margin-right: 0.9rem; width: 18.5rem; height: 3rem; position: relative; z-index: 10; border: 3px solid #f04040; color: #f04040; background-color: #fafafa; font-family: 'Nanum Gothic Coding', monospace;")
    template(v-slot:label)
      div(class="row items-center no-wrap")
        q-icon(left name="img:https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/hotel.svg")
        div(class="text-center" style="font-size: 1.35rem;") 숙소
    div(class="q-gutter-sm" style="margin-right: 0.75rem")
      q-radio(v-model="locationFilterHotel" val="all" color="red-9") 전체
      q-radio(v-model="locationFilterHotel" val="jeju" color="red-9") 제주시
      q-radio(v-model="locationFilterHotel" val="aewol" color="red-9") 애월
      q-radio(v-model="locationFilterHotel" val="hamdeok" color="red-9") 함덕
      q-radio(v-model="locationFilterHotel" val="moonset" color="red-9") 월정
      q-radio(v-model="locationFilterHotel" val="gujwa" color="red-9") 구좌
      q-radio(v-model="locationFilterHotel" val="seogwipo" color="red-9") 서귀포
      q-radio(v-model="locationFilterHotel" val="seongsan" color="red-9") 성산
      q-radio(v-model="locationFilterHotel" val="pyoseon" color="red-9") 표선
      hr
    div(class="q-gutter-sm" style="margin-right: 0.75rem;")
      q-radio(v-model="category" val="0" label="전체" color="red-9")
      q-radio(v-model="category" val="1" label="호텔, 리조트" color="red-9")
      q-radio(v-model="category" val="2" label="펜션" color="red-9")
      hr
    div(class="q-gutter-sm" )
      q-checkbox(v-model="filter" val="wifi" color="red-9") Wifi
      q-checkbox(v-model="filter" val="tv" color="red-9") TV
      q-checkbox(v-model="filter" val="airConditioner" color="red-9") 에어컨
      q-checkbox(v-model="filter" val="miniBar" color="red-9") 미니바
      q-checkbox(v-model="filter" val="refrigerator" color="red-9") 냉장고
      q-checkbox(v-model="filter" val="bathTub" color="red-9") 욕조
    div(class="q-gutter-sm")
      q-checkbox(v-model="filter" val="karaoke" color="red-9") 노래방
      q-checkbox(v-model="filter" val="convenienceStore" color="red-9") 편의점
      q-checkbox(v-model="filter" val="parkingLot" color="red-9") 주차장
      q-checkbox(v-model="filter" val="seminarRoom" color="red-9") 세미나실
      q-checkbox(v-model="filter" val="bbq" color="red-9") BBQ
      q-checkbox(v-model="filter" val="restaurant" color="red-9") 식당
    div(class="q-gutter-sm")
      q-checkbox(v-model="filter" val="pickup" color="red-9") 픽업가능
      q-checkbox(v-model="filter" val="breakfast" color="red-9") 조식포함
      q-checkbox(v-model="filter" val="freeParking" color="red-9") 무료주차가능
      q-checkbox(v-model="filter" val="cooking" color="red-9") 취사가능
  q-btn-dropdown(split push no-caps @click="displayStore(locationFilterStore)" style="margin-left: 0.8rem; margin-right: 0.9rem; width: 18.5rem;height: 3rem; position: relative; z-index: 10; border: 3px solid #ffc107; color: #ffc107; background-color: #fafafa;font-family: 'Nanum Gothic Coding', monospace;")
    template(v-slot:label)
      div(class="row items-center no-wrap")
        q-icon(left name="img:https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/store.svg")
        div(class="text-center" style="font-size: 1.35rem;") 맛집
    div(class="q-gutter-sm" style="margin-right: 0.75rem;")
      q-radio(v-model="locationFilterStore" val="all" color="amber-5") 전체
      q-radio(v-model="locationFilterStore" val="jeju" color="amber-5") 제주시
      q-radio(v-model="locationFilterStore" val="aewol" color="amber-5") 애월
      q-radio(v-model="locationFilterStore" val="hamdeok" color="amber-5") 함덕
      q-radio(v-model="locationFilterStore" val="moonset" color="amber-5") 월정
      q-radio(v-model="locationFilterStore" val="gujwa" color="amber-5") 구좌
      q-radio(v-model="locationFilterStore" val="seogwipo" color="amber-5") 서귀포
      q-radio(v-model="locationFilterStore" val="seongsan" color="amber-5") 성산
      q-radio(v-model="locationFilterStore" val="pyoseon" color="amber-5") 표선
  q-btn-dropdown(split push no-caps @click="displayCharger(locationFilterCharger)" style="margin-left: 0.8rem; margin-right: 0.9rem; width: 18.5rem; height: 3rem; position: relative; z-index: 10; border: 3px solid #03a9f4; color: #03a9f4; background-color: #fafafa;font-family: 'Nanum Gothic Coding', monospace;")
    template(v-slot:label)
      div(class="row items-center no-wrap")
        q-icon(left name="img:https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/chargerloc.svg")
        div(class="text-center" style="font-size: 1.25rem;") 전기차 충전소
    div(class="q-gutter-sm" style="margin-right: 0.75rem;")
      q-radio(v-model="locationFilterCharger" val="all" color="light-blue-6") 전체
      q-radio(v-model="locationFilterCharger" val="jeju" color="light-blue-6") 제주시
      q-radio(v-model="locationFilterCharger" val="aewol" color="light-blue-6") 애월
      q-radio(v-model="locationFilterCharger" val="hamdeok" color="light-blue-6") 함덕
      q-radio(v-model="locationFilterCharger" val="moonset" color="light-blue-6") 월정
      q-radio(v-model="locationFilterCharger" val="gujwa" color="light-blue-6") 구좌
      q-radio(v-model="locationFilterCharger" val="seogwipo" color="light-blue-6") 서귀포
      q-radio(v-model="locationFilterCharger" val="seongsan" color="light-blue-6") 성산
      q-radio(v-model="locationFilterCharger" val="pyoseon" color="light-blue-6") 표선
  q-btn-dropdown(push no-caps style="margin-left: 0.8rem; margin-right: 0.9rem; width: 18.5rem; height: 3rem; position: relative; z-index: 10; border: 3px solid #ff9800; color: #ff9800; background-color: #fafafa; font-family: 'Nanum Gothic Coding', monospace;")
    template(v-slot:label)
      div(class="row items-center no-wrap")
        q-icon(left name="map")
        div(class="text-center"  style="font-size: 1.3rem;") 나만의 경로 만들기
    div(class="q-gutter-sm" style="margin-right: 0rem;")
      q-radio(:disable="CustomDirection==2||CustomDirection==3 ? true : false" v-model="CustomDirection" val="1" color="orange" @click.once="customDirection(CustomDirection)" style="margin-left: 0.7rem; margin-right: 0.6rem;") DAY1
      q-radio(:disable="CustomDirection==1 ? false : true" v-model="CustomDirection" val="2" color="cyan" @click.once="customDirection(CustomDirection)" style="margin-left: 0.6rem; margin-right: 0.6rem;") DAY2
      q-radio(:disable="CustomDirection==2 ? false : true" v-model="CustomDirection" val="3" color="red" @click.once="customDirection(CustomDirection)" style="margin-left: 0.6rem; margin-right: 0.7rem;") DAY3
      br
      q-btn(@click.once="resetCustom()" color="orange-6" no-caps style="width: 18rem;") 초기화

//- <q-btn label="Left" icon="keyboard_arrow_left" color="primary" @click="open('left')" />
//- <q-btn label="Right" icon="keyboard_arrow_right" color="primary" @click="open('right')" />
div
  q-dialog(v-model="dialog" :position="position")
    q-card(style="width: 400px")
      q-linear-progress(:value="0.7" color="red-9")
      q-card-section(class="row items-center no-wrap")
        div(v-for="dataItem in sidePanel" :key="dataItem.STOREID" :name="dataItem.STOREID")
          img(class="responsive" :src="dataItem.imgurl" width="400")
          div(class="text-weight-bold") {{dataItem.NAME}}
          div(class="text-grey") {{dataItem.ADDRESS}}
          q-card-actions(align="right")
            a(:href="'http://localhost:9000/#/detail/'+ dataItem.STOREID")
              q-btn(flat label="더보기" color="primary")
            q-btn(flat label="Cancel" color="primary" v-close-popup)
      q-linear-progress(:value="0.3" color="amber-5")


div(id="map" style="width:90%; height:30rem; overflow:hidden; border-radius: 5px; margin: 0 auto;")

BestHotel(:customHotelDATA="customHotelDATA")
BestRestaurant(:customStoreDATA="customStoreDATA")
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import BestHotel from "./BestHotel.vue";
import BestRestaurant from "./BestRestaurant.vue";
axios.defaults.withCredentials = true;
export default {
  components: {
    BestHotel,
    BestRestaurant,
  },
  setup() {
    const id = ref([]);
    const dialog = ref(false);
    const position = ref("top");
    return {
      storeWordCloud: ref([]),
      hotelWordCloud: ref([]),
      customStore: ref([]),
      customHotel: ref([]),
      customMarkers: ref([]),
      customStoreDATA: ref([]),
      customHotelDATA: ref([]),
      id,
      category: ref("0"),
      filter: ref([]),
      locationFilterHotel: ref("all"),
      locationFilterStore: ref("all"),
      locationFilterCharger: ref("all"),
      CustomDirection: ref(),
      event: ref([]),
      hotelMarkers: ref([]),
      chargerMarkers: ref([]),
      storeMarkers: ref([]),
      hotelMarkerPositions: ref([]),
      chargerMarkerPositions: ref([]),
      storeMarkerPositions: ref([]),
      sidePanel: ref([]),
      customMarkersDay1: ref([]),
      customMarkersDay2: ref([]),
      customMarkersDay3: ref([]),
      clickPosition: ref([]),
      dialog,
      position,
      open(pos) {
        position.value = pos;
        dialog.value = true;
      }
    };
  },
  mounted() {
    // this.checkLogin()
    if (this.$route.query.addr) {
      window.location.href = "http://localhost:9000/#/api/map";
    }
    if (window.kakako && window.kakako.maps) {
      this.initMap();
    }
    else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cfd4e527f6a472cb323f1ffa306cf3a8&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.37113980098013, 126.55530201679869),
          level: 9 // 지도의 확대 레벨
        };
      this.map = new kakao.maps.Map(mapContainer, mapOption);
    },
    displayHotel(selectedCategory, selectedFilter, locationFilter) {
      if (this.hotelMarkers.length > 0) {
        this.hotelMarkers.forEach((marker) => marker.setMap(null));
      }
      this.hotelMarkers = [];
      this.hotelMarkerPositions = [];
      let wifi, tv, airConditioner, miniBar, refrigerator, bathTub, karaoke, convenienceStore, parkingLot, seminarRoom, bbq, restaurant, pickup, breakfast, freeParking, cooking;
      let jeju, aewol, hamdeok, moonset, gujwa, seogwipo, seongsan, pyoseon;
      if (locationFilter.includes("jeju")) {
        jeju = 1;
      }
      if (locationFilter.includes("aewol")) {
        aewol = 1;
      }
      if (locationFilter.includes("hamdeok")) {
        hamdeok = 1;
      }
      if (locationFilter.includes("moonset")) {
        moonset = 1;
      }
      if (locationFilter.includes("gujwa")) {
        gujwa = 1;
      }
      if (locationFilter.includes("seogwipo")) {
        seogwipo = 1;
      }
      if (locationFilter.includes("seongsan")) {
        seongsan = 1;
      }
      if (locationFilter.includes("pyoseon")) {
        pyoseon = 1;
      }
      if (selectedFilter.includes("wifi")) {
        wifi = 1;
      }
      if (selectedFilter.includes("tv")) {
        tv = 1;
      }
      if (selectedFilter.includes("airConditioner")) {
        airConditioner = 1;
      }
      if (selectedFilter.includes("miniBar")) {
        miniBar = 1;
      }
      if (selectedFilter.includes("refrigerator")) {
        refrigerator = 1;
      }
      if (selectedFilter.includes("bathTub")) {
        bathTub = 1;
      }
      if (selectedFilter.includes("karaoke")) {
        karaoke = 1;
      }
      if (selectedFilter.includes("convenienceStore")) {
        convenienceStore = 1;
      }
      if (selectedFilter.includes("parkingLot")) {
        parkingLot = 1;
      }
      if (selectedFilter.includes("seminarRoom")) {
        seminarRoom = 1;
      }
      if (selectedFilter.includes("bbq")) {
        bbq = 1;
      }
      if (selectedFilter.includes("restaurant")) {
        restaurant = 1;
      }
      if (selectedFilter.includes("pickup")) {
        pickup = 1;
      }
      if (selectedFilter.includes("breakfast")) {
        breakfast = 1;
      }
      if (selectedFilter.includes("freeParking")) {
        freeParking = 1;
      }
      if (selectedFilter.includes("cooking")) {
        cooking = 1;
      }
      axios({
        method: "post",
        url: "http://localhost:3000/hotel",
        data: {
          category: selectedCategory[0],
          wifi,
          tv,
          airConditioner,
          miniBar,
          refrigerator,
          bathTub,
          karaoke,
          convenienceStore,
          parkingLot,
          seminarRoom,
          bbq,
          restaurant,
          pickup,
          breakfast,
          freeParking,
          cooking,
          jeju,
          aewol,
          hamdeok,
          moonset,
          gujwa,
          seogwipo,
          seongsan,
          pyoseon,
        },
        headers: { "X-Requested-With": "XMLHttpRequest" },
        responseType: "json"
      }).then((Response) => {
        for (let i = 0; i < Response.data.length; i++) {
          if (this.hotelMarkerPositions.length < Response.data.length) {
            this.hotelMarkerPositions.push({
              content: "<div style=\"font-weight:600; font-size: 10pt; font-family: 나눔고딕; text-align: center;\"><img src=\"https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/" + Response.data[i].PATH + "/" + Response.data[i].UUID + "\" width=\"240px\" height=\"110px\" style=\"overflow:hidden; margin-bottom:8px;\"><br>" + Response.data[i].NAME + "<br> 별점 : " + Math.round(Response.data[i].STARRATE * 100) / 100 + "</div>",
              latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
              info: {
                HOTELID: Response.data[i].HOTELID,
                NAME: Response.data[i].NAME,
                CATEGORY: Response.data[i].CATEGORY,
                ADDRESS: Response.data[i].ADDRESS,
                COMMENTS: Response.data[i].COMMENTS,
                PRICE: Response.data[i].PRICE,
                STARRATE: Response.data[i].STARRATE,
                UUID: Response.data[i].UUID,
                PATH: Response.data[i].PATH,
              }
            });
          }
        }
      }).then(() => {
        var imageSrc = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/hotel.svg", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(21, 26);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        for (var i = 0; i < this.hotelMarkerPositions.length; i++) {
          var marker = new kakao.maps.Marker({
            map: this.map,
            position: this.hotelMarkerPositions[i].latlng,
            image: markerImage,
          });
          var infowindow = new kakao.maps.InfoWindow({
            content: this.hotelMarkerPositions[i].content, // 인포윈도우에 표시할 내용
          });
          kakao.maps.event.addListener(marker, "mouseover", this.displayInfowindow(marker, infowindow));
          kakao.maps.event.addListener(marker, "mouseout", this.closeInfowindow(infowindow));
          kakao.maps.event.addListener(marker, "click", this.displaySidePanel(this.hotelMarkerPositions[i].info));
          this.hotelMarkers.push(marker);
        }
      })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        });
    },
    displayCharger(locationFilter) {
      if (this.chargerMarkers.length > 0) {
        this.chargerMarkers.forEach((marker) => marker.setMap(null));
      }
      this.chargerMarkers = [];
      this.chargerMarkerPositions = [];
      let jeju, aewol, hamdeok, moonset, gujwa, seogwipo, seongsan, pyoseon;
      if (locationFilter.includes("jeju")) {
        jeju = 1;
      }
      if (locationFilter.includes("aewol")) {
        aewol = 1;
      }
      if (locationFilter.includes("hamdeok")) {
        hamdeok = 1;
      }
      if (locationFilter.includes("moonset")) {
        moonset = 1;
      }
      if (locationFilter.includes("gujwa")) {
        gujwa = 1;
      }
      if (locationFilter.includes("seogwipo")) {
        seogwipo = 1;
      }
      if (locationFilter.includes("seongsan")) {
        seongsan = 1;
      }
      if (locationFilter.includes("pyoseon")) {
        pyoseon = 1;
      }
      axios({
        method: "post",
        url: "http://localhost:3000/charger",
        data: {
          jeju,
          aewol,
          hamdeok,
          moonset,
          gujwa,
          seogwipo,
          seongsan,
          pyoseon,
        },
        headers: { "X-Requested-With": "XMLHttpRequest" },
        responseType: "json"
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.chargerMarkerPositions.length < Response.data.length) {
              this.chargerMarkerPositions.push({
                content: "<div style=\"font-weight:600; text-align: center;\">" + Response.data[i].NAME + "<br><br>" + Response.data[i].ADDRESS + "<br><br></div>",
                latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
                info: {
                  CHAGERID: Response.data[i].CHAGERID,
                  NAME: Response.data[i].NAME,
                  ADDRESS: Response.data[i].ADDRESS,
                }
              });
            }
          }
        }).then(() => {
          var imageSrc = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/chargerloc.svg", // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(21, 26);
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
          for (var i = 0; i < this.chargerMarkerPositions.length; i++) {
            var marker = new kakao.maps.Marker({
              map: this.map,
              position: this.chargerMarkerPositions[i].latlng,
              image: markerImage,
            });
            var infowindow = new kakao.maps.InfoWindow({
              content: this.chargerMarkerPositions[i].content, // 인포윈도우에 표시할 내용
            });
            kakao.maps.event.addListener(marker, "mouseover", this.displayInfowindow(marker, infowindow));
            kakao.maps.event.addListener(marker, "mouseout", this.closeInfowindow(infowindow));
            // kakao.maps.event.addListener(marker, 'click', this.displaySidePanel(this.chargerMarkerPositions[i].info));
            this.chargerMarkers.push(marker);
          }
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        });
    },
    displayStore(locationFilter) {
      if (this.storeMarkers.length > 0) {
        this.storeMarkers.forEach((marker) => marker.setMap(null));
      }
      this.storeMarkers = [];
      this.storeMarkerPositions = [];
      let jeju, aewol, hamdeok, moonset, gujwa, seogwipo, seongsan, pyoseon;
      if (locationFilter.includes("jeju")) {
        jeju = 1;
      }
      if (locationFilter.includes("aewol")) {
        aewol = 1;
      }
      if (locationFilter.includes("hamdeok")) {
        hamdeok = 1;
      }
      if (locationFilter.includes("moonset")) {
        moonset = 1;
      }
      if (locationFilter.includes("gujwa")) {
        gujwa = 1;
      }
      if (locationFilter.includes("seogwipo")) {
        seogwipo = 1;
      }
      if (locationFilter.includes("seongsan")) {
        seongsan = 1;
      }
      if (locationFilter.includes("pyoseon")) {
        pyoseon = 1;
      }
      axios({
        method: "post",
        url: "http://localhost:3000/store",
        data: {
          jeju,
          aewol,
          hamdeok,
          moonset,
          gujwa,
          seogwipo,
          seongsan,
          pyoseon,
        },
        headers: { "X-Requested-With": "XMLHttpRequest" },
        responseType: "json"
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.storeMarkerPositions.length < Response.data.length) {
              this.storeMarkerPositions.push({
                content: "<div style=\"font-weight:600; font-size: 10pt; font-family: 나눔고딕; text-align: center;\">" + Response.data[i].STORENAME + "</div>",
                latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
                info: {
                  STOREID: Response.data[i].STOREID,
                  NAME: Response.data[i].STORENAME,
                  CATEGORY: Response.data[i].CATEGORY,
                  ADDRESS: Response.data[i].ADDRESS,
                  INFO: Response.data[i].INFO,
                  KEYWORD: Response.data[i].KEYWORD,
                  STARRATE: Response.data[i].STARRATE,
                  OPEN: Response.data[i].OPEN,
                  TEL: Response.data[i].TEL,
                  UUID: Response.data[i].UUID,
                  PATH: Response.data[i].PATH,
                }
              });
            }
          }
        }).then(() => {
          var imageSrc = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/store.svg", // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(21, 26);
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
          for (var i = 0; i < this.storeMarkerPositions.length; i++) {
            var marker = new kakao.maps.Marker({
              map: this.map,
              position: this.storeMarkerPositions[i].latlng,
              image: markerImage,
            });
            var infowindow = new kakao.maps.InfoWindow({
              content: this.storeMarkerPositions[i].content, // 인포윈도우에 표시할 내용
            });
            kakao.maps.event.addListener(marker, "mouseover", this.displayInfowindow(marker, infowindow));
            kakao.maps.event.addListener(marker, "mouseout", this.closeInfowindow(infowindow));
            kakao.maps.event.addListener(marker, "click", this.displaySidePanel(this.storeMarkerPositions[i].info));
            this.storeMarkers.push(marker);
          }
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        });
    },
    displayInfowindow(marker, infowindow) {
      return () => {
        infowindow.open(this.map, marker);
      };
    },
    closeInfowindow(infowindow) {
      return () => {
        infowindow.close();
      };
    },
    displaySidePanel(info) {
      return () => {
        this.sidePanel = [];
        if (info.STOREID) {
          this.open("right");
          const url = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/RestWordcloudW/" + info.STOREID + ".jpg";
          this.sidePanel.push({
            STOREID: info.STOREID,
            NAME: info.NAME,
            ADDRESS: info.ADDRESS,
            imgurl: url
          });
          console.log(this.sidePanel);
          // console.log("https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/RestWordcloudW/"+info.STOREID+".jpg")
        }
        else if (info.HOTELID) {
          this.open("left");
          const url = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/HotelWordcloudW/" + info.HOTELID + ".jpg";
          this.sidePanel.push({
            HOTELID: info.HOTELID,
            NAME: info.NAME,
            ADDRESS: info.ADDRESS,
            imgurl: url
          });
          console.log(this.sidePanel);
          // console.log("https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/HotelWordcloudW/"+info.HOTELID+".jpg")
        }
        // if (this.id == '') {
        //   window.location.href = 'http://localhost:9000/#/detail/' + info.STOREID
        // }
        // else {
        //   window.location.href = 'http://localhost:9000/#/detail/' + info.STOREID + '?auth=' + this.id;
        // }
      };
    },
    customDirection(day) {
      var geocoder = new kakao.maps.services.Geocoder();
      function searchDetailAddrFromCoords(coords, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
      }
      const CUSTOMSTORE = this.customStore;
      const CUSTOMHOTEL = this.customHotel;
      const map = this.map;
      const customMarkers = this.customMarkers;
      const customStoreDATA = this.customStoreDATA
      const customHotelDATA = this.customHotelDATA
      function displayInfowindow(params1, params2) {
        return () => {
          params2.open(map, params1);
        };
      }
      function closeInfowindow(params) {
        return () => {
          params.close();
        };
      }
      function customList(LATITUDE, LONGITUDE) {
        axios({
          method: "post",
          url: "http://localhost:3000/customList",
          data: {
            LATITUDE,
            LONGITUDE
          },
          headers: { "X-Requested-With": "XMLHttpRequest" },
          responseType: "json"
        })
          .then((Response) => {
            if (customMarkers.length > 0) {
              customMarkers.forEach((marker) => marker.setMap(null));
            }
            if (CUSTOMSTORE.length > 0) {
              CUSTOMSTORE.length = 0;
            }
            if (CUSTOMHOTEL.length > 0) {
              CUSTOMHOTEL.length = 0;
            }
            setTimeout(() => {
              if (customStoreDATA.length > 0) {
                customStoreDATA.length = 0
              }
              if (customHotelDATA.length > 0) {
                customHotelDATA.length = 0
              }
              for (let i = 0; i < Response.data.length; i++) {
                if (Response.data[i].STOREID) {
                  if (Response.data[i].STOREID!==Response.data[i+1].STOREID) {
                    customStoreDATA.push(Response.data[i])
                  }
                  CUSTOMSTORE.push({
                    content: "<div style=\"font-weight:bold;\"><img src=\"https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/" + Response.data[i].PATH + "/" + Response.data[i].UUID + "\"width=\"240px\" height=\"110px\" style=\"display: block; margin: 0 auto;overflow:hidden; margin-bottom:8px;\"><br>" + Response.data[i].STORENAME + "<br><br>" + Response.data[i].ADDRESS + "<br><br></div>",
                    latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE)
                  });
                  var imageSrc = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/store.svg", // 마커이미지의 주소입니다
                    imageSize = new kakao.maps.Size(21, 26);
                  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                  for (var j = 0; j < CUSTOMSTORE.length; j++) {
                    var marker = new kakao.maps.Marker({
                      map,
                      position: CUSTOMSTORE[j].latlng,
                      image: markerImage,
                    });
                    var infowindow = new kakao.maps.InfoWindow({
                      content: CUSTOMSTORE[j].content, // 인포윈도우에 표시할 내용
                    });
                    kakao.maps.event.addListener(marker, "mouseover", displayInfowindow(marker, infowindow));
                    kakao.maps.event.addListener(marker, "mouseout", closeInfowindow(infowindow));
                    customMarkers.push(marker);
                  }
                }
                if (Response.data[i].HOTELID) {

                  customHotelDATA.push(Response.data[i])
                  CUSTOMHOTEL.push({
                    content: "<div style=\"font-weight:bold;\"><img src=\"https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/" + Response.data[i].PATH + "/" + Response.data[i].UUID + "\" width=\"240px\" height=\"110px\" style=\"overflow:hidden; margin-bottom:8px;\"><br>" + Response.data[i].NAME + "<br> 별점 : " + Math.round(Response.data[i].STARRATE * 100) / 100 + "</div>",
                    latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
                  });
                  var imageSrc = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/hotel.svg", // 마커이미지의 주소입니다
                    imageSize = new kakao.maps.Size(21, 26);
                  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                  for (var j = 0; j < CUSTOMHOTEL.length; j++) {
                    var marker = new kakao.maps.Marker({
                      map,
                      position: CUSTOMHOTEL[j].latlng,
                      image: markerImage,
                    });
                    var infowindow = new kakao.maps.InfoWindow({
                      content: CUSTOMHOTEL[j].content, // 인포윈도우에 표시할 내용
                    });
                    kakao.maps.event.addListener(marker, "mouseover", displayInfowindow(marker, infowindow));
                    kakao.maps.event.addListener(marker, "mouseout", closeInfowindow(infowindow));
                    customMarkers.push(marker);
                  }
                }
              }
            }, 80);
          })
          .catch(function (error) {
            // 에러 핸들링
            console.log(error.toJSON());
          });
      }
      if (this.hotelMarkers.length > 0) {
        this.hotelMarkers.forEach((marker) => marker.setMap(null));
      }
      if (this.chargerMarkers.length > 0) {
        this.chargerMarkers.forEach((marker) => marker.setMap(null));
      }
      if (this.storeMarkers.length > 0) {
        this.storeMarkers.forEach((marker) => marker.setMap(null));
      }
      var clickLine; // 마우스로 클릭한 좌표로 그려질 선 객체입니다
      var distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다
      var dots = {}; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.
      if (this.event[0] !== undefined) {
        kakao.maps.event.removeListener(this.map, "click", this.event[0]);
        this.event.pop();
      }
      var imageSrc = "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/flagDay" + day + ".png"; // 마커이미지의 주소입니다
      if (day == 1) {
        var imageSize = new kakao.maps.Size(55, 41);
      }
      if (day == 2) {
        var imageSize = new kakao.maps.Size(55, 41);
      }
      if (day == 3) {
        var imageSize = new kakao.maps.Size(56, 41);
      }
      var image = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var marker = new kakao.maps.Marker({
        position: this.map.getCenter(),
        image,
      });
      marker.setMap(this.map);
      var direcitonEvent = function (mouseEvent) {
        searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            var latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            customList(marker.getPosition().Ma, marker.getPosition().La);
            var url = location.origin + "/#/api/map?addr=" + result[0].address.address_name;
            history.pushState(null, null, url);
          }
        });
      };
      kakao.maps.event.addListener(this.map, "click", direcitonEvent);
      this.event.push(direcitonEvent);
      if (day == 1) {
        this.customMarkersDay1.forEach((marker) => marker.setMap(null));
        this.customMarkersDay1.push(marker);
      }
      if (day == 2) {
        this.customMarkersDay2.forEach((marker) => marker.setMap(null));
        this.customMarkersDay2.push(marker);
      }
      if (day == 3) {
        this.customMarkersDay3.forEach((marker) => marker.setMap(null));
        this.customMarkersDay3.push(marker);
      }
    },
    resetCustom() {
      this.customMarkersDay1.forEach((marker) => marker.setMap(null));
      this.customMarkersDay2.forEach((marker) => marker.setMap(null));
      this.customMarkersDay3.forEach((marker) => marker.setMap(null));
      this.CustomDirection = "";
    },
    checkLogin() {
      axios.get("/api/login").then((res) => {
        this.id.push(res.data.id);
      });
    }
  },
}
</script>
<style>
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  font-size: 12px;
}

.map_wrap a,
.map_wrap a:hover,
.map_wrap a:active {
  color: #000;
  text-decoration: none;
}

.map_wrap {
  position: relative;
  width: 100%;
  height: 500px;
}

#menu_wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
}

.bg_white {
  background: #fff;
}

#menu_wrap hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #5F5F5F;
  margin: 3px 0;
}

#menu_wrap .option {
  text-align: center;
}

#menu_wrap .option p {
  margin: 10px 0;
}

#menu_wrap .option button {
  margin-left: 5px;
}

#placesList li {
  list-style: none;
}

#placesList .item {
  position: relative;
  border-bottom: 1px solid #888;
  overflow: hidden;
  cursor: pointer;
  min-height: 65px;
}

#placesList .item span {
  display: block;
  margin-top: 4px;
}

#placesList .item h5,
#placesList .item .info {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#placesList .item .info {
  padding: 10px 0 10px 55px;
}

#placesList .info .gray {
  color: #8a8a8a;
}

#placesList .info .jibun {
  padding-left: 26px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;
}

#placesList .info .tel {
  color: #009900;
}

#placesList .item .markerbg {
  float: left;
  position: absolute;
  width: 36px;
  height: 37px;
  margin: 10px 0 0 10px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;
}

#placesList .item .marker_1 {
  background-position: 0 -10px;
}

#placesList .item .marker_2 {
  background-position: 0 -56px;
}

#placesList .item .marker_3 {
  background-position: 0 -102px
}

#placesList .item .marker_4 {
  background-position: 0 -148px;
}

#placesList .item .marker_5 {
  background-position: 0 -194px;
}

#placesList .item .marker_6 {
  background-position: 0 -240px;
}

#placesList .item .marker_7 {
  background-position: 0 -286px;
}

#placesList .item .marker_8 {
  background-position: 0 -332px;
}

#placesList .item .marker_9 {
  background-position: 0 -378px;
}

#placesList .item .marker_10 {
  background-position: 0 -423px;
}

#placesList .item .marker_11 {
  background-position: 0 -470px;
}

#placesList .item .marker_12 {
  background-position: 0 -516px;
}

#placesList .item .marker_13 {
  background-position: 0 -562px;
}

#placesList .item .marker_14 {
  background-position: 0 -608px;
}

#placesList .item .marker_15 {
  background-position: 0 -654px;
}

#pagination {
  margin: 10px auto;
  text-align: center;
}

#pagination a {
  display: inline-block;
  margin-right: 10px;
}

#pagination .on {
  font-weight: bold;
  cursor: default;
  color: #777;
}

.body--dark {
  background: #000
}

a {
  text-decoration: none;
}
</style>

