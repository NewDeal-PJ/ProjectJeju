<template lang="pug">
div(class="q-pa-md")
  div(class="q-gutter-sm bg-grey-10 text-white")
    q-radio(dark v-model="category" val="1" label="호텔, 리조트" color="yellow")
    q-radio(dark v-model="category" val="2" label="펜션" color="yellow")
    hr
  div(class="q-gutter-sm")
    q-checkbox(v-model="filter" val="wifi") Wifi
    q-checkbox(v-model="filter" val="tv") TV
    q-checkbox(v-model="filter" val="airConditioner") 에어컨
    q-checkbox(v-model="filter" val="miniBar") 미니바
    q-checkbox(v-model="filter" val="refrigerator") 냉장고
    q-checkbox(v-model="filter" val="bathTub") 욕조
  div(class="q-gutter-sm")
    q-checkbox(v-model="filter" val="karaoke") 노래방
    q-checkbox(v-model="filter" val="convenienceStore") 편의점
    q-checkbox(v-model="filter" val="parkingLot") 주차장
    q-checkbox(v-model="filter" val="seminarRoom") 세미나실
    q-checkbox(v-model="filter" val="bbq") BBQ
    q-checkbox(v-model="filter" val="restaurant") 식당
  div(class="q-gutter-sm")
    q-checkbox(v-model="filter" val="pickup") 픽업가능
    q-checkbox(v-model="filter" val="breakfast") 조식포함
    q-checkbox(v-model="filter" val="freeParking") 무료주차가능
    q-checkbox(v-model="filter" val="cooking") 취사가능
  div(class="q-px-sm")
  q-btn(@click="displayHotel(category, filter)") 숙소
  q-btn(@click="displayCharger(chargerMarkerPositions)") 전기차충전소
div(class="map_wrap")
  div(id="map" style="width:100%;height:700px;margin:0 auto; overflow:hidden; border:1px solid;")
  div(id="menu_wrap" class="bg_white")
    div(class="option")
      div
        form(onsubmit="searchPlaces(); return false;") 검색 :
          input(type="text" value="이태원 맛집" id="keyword" size="15")
          button(type="submit") 검색하기
  hr
  ul(id="placesList")
  div(id="pagination")

//- q-dialog( v-model="dialog" persistent  style="display:block")
//-   q-card( class="bg-teal text-white" style="width: 300px")
//-     q-card-section
//-       div( class="text-h6") 새로만들기
//-     q-card-section( class="q-pt-none")
//-       q-input(v-model="newData.name" label="약국이름")
//-       q-input(v-model="newData.address" label="주소")
//-       q-input(v-model="newData.open" label="영업시간")
//-       q-input(v-model="newData.tel" label="전화번호")

//-     q-card-actions( align="right" class="bg-white text-teal")
//-       q-btn(style="background:white; color:black" @click="createData(newData)" v-close-popup) 만들기

//- q-dialog( v-model="dialog" persistent  style="display:block")
//-   q-card( class="bg-teal text-white" style="width: 300px")
//-     q-card-section
//-       div( class="text-h6") 수정하기
//-     q-card-section( class="q-pt-none")
//-       q-input(v-model="newData.name" label="약국이름")
//-       q-input(v-model="newData.address" label="주소")
//-       q-input(v-model="newData.open" label="영업시간")
//-       q-input(v-model="newData.tel" label="전화번호")

//-     q-card-actions( align="right" class="bg-white text-teal")
//-       q-btn(style="background:white; color:black" @click="createData()" v-close-popup) 수정

//- div {{ targetIdx }} {{ targetData }}
//- //- address, name, open, sido, sigungu, tel
//- q-input(v-model="targetData.name" label="약국이름")
//- q-input(v-model="targetData.address" label="주소")
//- q-input(v-model="targetData.open" label="영업시간")
//- q-input(v-model="targetData.tel" label="전화번호")

//- q-card(v-if="dataList" v-for="(dataItem, idx) in dataList"
//-   dark bordered
//-   class="bg-grey-9 my-card"
//-   @click="selectData(dataItem.key, dataItem)"
//-   v-bind:class="{ selected: dataItem.key === targetIdx }"
//-   )

//-   q-card-section
//-     div( class="text-h6") {{ dataItem.key }}: {{ dataItem.name }} {{ dataItem.key === targetIdx }}
//-     div( class="text-subtitle2") {{ dataItem.address }}

//-     q-separator( dark inset)

//-     q-card-section
//-       div {{ dataItem.open }}
//-       div {{ dataItem.tel }}
</template>

<script>
import { ref } from "vue";
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  setup() {
    return {
      category: ref('1'),
      filter: ref([])
    }
  },
  name: "KakaoMap",
  data() {
    return {
      hotelMarkers: [],
      chargerMarkers: [],
      hotelMarkerPositions: [],
      chargerMarkerPositions: [],
    }
  },
  mounted() {
    if (window.kakako && window.kakako.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script")
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cfd4e527f6a472cb323f1ffa306cf3a8&libraries=services"
      document.head.appendChild(script)
    }
  },
  methods: {
    initMap() {
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.37113980098013, 126.55530201679869), // 지도의 중심좌표
          level: 9 // 지도의 확대 레벨
        };
      this.map = new kakao.maps.Map(mapContainer, mapOption);
    },
    displayHotel(selectedCategory, selectedFilter) {
      if (this.hotelMarkers.length > 0) {
        this.hotelMarkers.forEach((marker) => marker.setMap(null));
      }
      this.hotelMarkers = [];
      this.hotelMarkerPositions = [];
      let wifi;
      let tv;
      let airConditioner;
      let miniBar;
      let refrigerator;
      let bathTub;
      let karaoke;
      let convenienceStore;
      let parkingLot;
      let seminarRoom;
      let bbq;
      let restaurant;
      let pickup;
      let breakfast;
      let freeParking;
      let cooking;
      if (selectedFilter.includes('wifi')) {
        wifi = 1
      }
      if (selectedFilter.includes('tv')) {
        tv = 1
      }
      if (selectedFilter.includes('airConditioner')) {
        airConditioner = 1
      }
      if (selectedFilter.includes('miniBar')) {
        miniBar = 1
      }
      if (selectedFilter.includes('refrigerator')) {
        refrigerator = 1
      }
      if (selectedFilter.includes('bathTub')) {
        bathTub = 1
      }
      if (selectedFilter.includes('karaoke')) {
        karaoke = 1
      }
      if (selectedFilter.includes('convenienceStore')) {
        convenienceStore = 1
      }
      if (selectedFilter.includes("parkingLot")) {
        parkingLot = 1
      }
      if (selectedFilter.includes('seminarRoom')) {
        seminarRoom = 1
      }
      if (selectedFilter.includes('bbq')) {
        bbq = 1
      }
      if (selectedFilter.includes('restaurant')) {
        restaurant = 1
      }
      if (selectedFilter.includes('pickup')) {
        pickup = 1
      }
      if (selectedFilter.includes('breakfast')) {
        breakfast = 1
      }
      if (selectedFilter.includes('freeParking')) {
        freeParking = 1
      }
      if (selectedFilter.includes('cooking')) {
        cooking = 1
      }
      console.log(wifi)
      axios({
        method: 'post',
        url: 'http://localhost:3000/hotel',
        data: {
          category: selectedCategory[0],
          wifi: wifi,
          tv: tv,
          airConditioner: airConditioner,
          miniBar: miniBar,
          refrigerator: refrigerator,
          bathTub: bathTub,
          karaoke: karaoke,
          convenienceStore: convenienceStore,
          parkingLot: parkingLot,
          seminarRoom: seminarRoom,
          bbq: bbq,
          restaurant: restaurant,
          pickup: pickup,
          breakfast: breakfast,
          freeParking: freeParking,
          cooking: cooking,
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then((Response) => {
        for (let i = 0; i < Response.data.length; i++) {
          if (this.hotelMarkerPositions.length < 529) {
            this.hotelMarkerPositions.push({
              content: '<div style="font-weight:bold;"><img src="https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/' + Response.data[i].PATH + '/' + Response.data[i].UUID + '" width="250px" height="100px" style="overflow:hidden; margin-bottom:8px;"><br>' + Response.data[i].NAME + '<br> 별점 : ' + Math.round(Response.data[i].STARRATE * 100) / 100 + '</div>',
              latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE)
            })
          }
        }
      }).then(() => {
        var imageSrc = 'https://velog.velcdn.com/images/kimjyunny_dev/post/e5a92ac3-1f83-4fbb-a3a6-fa49a562cb76/image.svg', // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(21, 26)
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
        for (var i = 0; i < this.hotelMarkerPositions.length; i++) {
          var marker = new kakao.maps.Marker({
            map: this.map,
            position: this.hotelMarkerPositions[i].latlng,
            image: markerImage,
          })
          var infowindow = new kakao.maps.InfoWindow({
            content: this.hotelMarkerPositions[i].content, // 인포윈도우에 표시할 내용
          });
          kakao.maps.event.addListener(marker, 'mouseover', this.displayInfowindow(marker, infowindow));
          kakao.maps.event.addListener(marker, 'mouseout', this.closeInfowindow(infowindow));
          this.hotelMarkers.push(marker)
        }
      })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
    },
    displayCharger() {
      if (this.chargerMarkers.length > 0) {
        this.chargerMarkers.forEach((marker) => marker.setMap(null));
      }
      this.chargerMarkers = [];
      this.chargerMarkerPositions = [];
      axios({
        method: 'post',
        url: 'http://localhost:3000/charger',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.chargerMarkerPositions.length < 500) {
              this.chargerMarkerPositions.push({
                content: '<div style="font-weight:bold;">'+Response.data[i].NAME+'<br><br>'+Response.data[i].ADDRESS+'<br><br></div>',
                latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE)
              })
            }
          }
        }).then(() => {
          var imageSrc = 'https://velog.velcdn.com/images/kimjyunny_dev/post/86b20ccf-b1a1-4a47-85ee-c0272e90af09/image.svg', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(21, 26)
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
          for (var i = 0; i < this.chargerMarkerPositions.length; i++) {
            var marker = new kakao.maps.Marker({
              map: this.map,
              position: this.chargerMarkerPositions[i].latlng,
              image: markerImage,
            })
            var infowindow = new kakao.maps.InfoWindow({
              content: this.chargerMarkerPositions[i].content, // 인포윈도우에 표시할 내용
            });
            kakao.maps.event.addListener(marker, 'mouseover', this.displayInfowindow(marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', this.closeInfowindow(infowindow));
            this.chargerMarkers.push(marker)
          }
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
    },
    displayInfowindow(marker, infowindow) {
      return () => {
        infowindow.open(this.map, marker);
      }
    },
    closeInfowindow(infowindow) {
      return () => {
        infowindow.close();
      }
    },
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
</style>

<!-- https://velog.velcdn.com/images/kimjyunny_dev/post/c059d2b5-f7c1-4ad3-bd3b-16475b317069/image.svg     맛집 이미지-->
