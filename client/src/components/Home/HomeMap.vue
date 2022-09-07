<template lang="pug">
div(class="q-pa-md")
      q-btn-dropdown(split color="red-5" push no-caps @click="displayHotel(category, filter, locationFilter)" style="margin-left: 0.5rem; width: 10.5rem; height: 3.5rem; position: relative; z-index: 10;")
        template(v-slot:label)
          div(class="row items-center no-wrap")
            q-icon(left name="img:https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/hotel.svg")
            div(class="text-center" style="font-size: 1.35rem;") 숙소
        div(class="q-gutter-sm" style="margin-right: 0.75rem;")
          q-radio(v-model="locationFilter" val="all" color="amber-9") 전체
          q-radio(v-model="locationFilter" val="jeju" color="amber-9") 제주시
          q-radio(v-model="locationFilter" val="aewol" color="amber-9") 애월
          q-radio(v-model="locationFilter" val="hamdeok" color="amber-9") 함덕
          q-radio(v-model="locationFilter" val="moonset" color="amber-9") 월정
          q-radio(v-model="locationFilter" val="gujwa" color="amber-9") 구좌
          q-radio(v-model="locationFilter" val="seogwipo" color="amber-9") 서귀포
          q-radio(v-model="locationFilter" val="seongsan" color="amber-9") 성산
          q-radio(v-model="locationFilter" val="pyoseon" color="amber-9") 표선
          hr
        div(class="q-gutter-sm" style="margin-right: 0.75rem;")
          q-radio(v-model="category" val="0" label="전체" color="amber-9")
          q-radio(v-model="category" val="1" label="호텔, 리조트" color="amber-9")
          q-radio(v-model="category" val="2" label="펜션" color="amber-9")
          hr
        div(class="q-gutter-sm" )
          q-checkbox(v-model="filter" val="wifi" color="amber-9") Wifi
          q-checkbox(v-model="filter" val="tv" color="amber-9") TV
          q-checkbox(v-model="filter" val="airConditioner" color="amber-9") 에어컨
          q-checkbox(v-model="filter" val="miniBar" color="amber-9") 미니바
          q-checkbox(v-model="filter" val="refrigerator" color="amber-9") 냉장고
          q-checkbox(v-model="filter" val="bathTub" color="amber-9") 욕조
        div(class="q-gutter-sm")
          q-checkbox(v-model="filter" val="karaoke" color="amber-9") 노래방
          q-checkbox(v-model="filter" val="convenienceStore" color="amber-9") 편의점
          q-checkbox(v-model="filter" val="parkingLot" color="amber-9") 주차장
          q-checkbox(v-model="filter" val="seminarRoom" color="amber-9") 세미나실
          q-checkbox(v-model="filter" val="bbq" color="amber-9") BBQ
          q-checkbox(v-model="filter" val="restaurant" color="amber-9") 식당
        div(class="q-gutter-sm")
          q-checkbox(v-model="filter" val="pickup" color="amber-9") 픽업가능
          q-checkbox(v-model="filter" val="breakfast" color="amber-9") 조식포함
          q-checkbox(v-model="filter" val="freeParking" color="amber-9") 무료주차가능
          q-checkbox(v-model="filter" val="cooking" color="amber-9") 취사가능
      q-btn-dropdown(split color="amber-4" push no-caps @click="displayStore(locationFilter)" style="margin-left: 0.65rem; width: 10.5rem; height: 3.5rem;position: relative; z-index: 10;")
        template(v-slot:label)
          div(class="row items-center no-wrap")
            q-icon(left name="img:https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/store.svg")
            div(class="text-center" style="font-size: 1.35rem;") 맛집
        div(class="q-gutter-sm" style="margin-right: 0.75rem;")
          q-radio(v-model="locationFilter" val="all" color="amber-9") 전체
          q-radio(v-model="locationFilter" val="jeju" color="amber-9") 제주시
          q-radio(v-model="locationFilter" val="aewol" color="amber-9") 애월
          q-radio(v-model="locationFilter" val="hamdeok" color="amber-9") 함덕
          q-radio(v-model="locationFilter" val="moonset" color="amber-9") 월정
          q-radio(v-model="locationFilter" val="gujwa" color="amber-9") 구좌
          q-radio(v-model="locationFilter" val="seogwipo" color="amber-9") 서귀포
          q-radio(v-model="locationFilter" val="seongsan" color="amber-9") 성산
          q-radio(v-model="locationFilter" val="pyoseon" color="amber-9") 표선
      q-btn-dropdown(split color="light-blue-5" push no-caps @click="displayCharger(locationFilter)" style="margin-left: 0.65rem; width: 10.5rem; height: 3.5rem;position: relative; z-index: 10;")
        template(v-slot:label)
          div(class="row items-center no-wrap")
            q-icon(left name="img:https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/chargerloc.svg")
            div(class="text-center" style="font-size: 1.25rem;") 전기차충전소
        div(class="q-gutter-sm" style="margin-right: 0.75rem;")
          q-radio(v-model="locationFilter" val="all" color="amber-9") 전체
          q-radio(v-model="locationFilter" val="jeju" color="amber-9") 제주시
          q-radio(v-model="locationFilter" val="aewol" color="amber-9") 애월
          q-radio(v-model="locationFilter" val="hamdeok" color="amber-9") 함덕
          q-radio(v-model="locationFilter" val="moonset" color="amber-9") 월정
          q-radio(v-model="locationFilter" val="gujwa" color="amber-9") 구좌
          q-radio(v-model="locationFilter" val="seogwipo" color="amber-9") 서귀포
          q-radio(v-model="locationFilter" val="seongsan" color="amber-9") 성산
          q-radio(v-model="locationFilter" val="pyoseon" color="amber-9") 표선

div(id="map" style="width:90%; height:30rem; overflow:hidden; border-radius: 5px; margin: 0 auto;")
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
        category: ref('0'),
        filter: ref([]),
        locationFilter: ref('all')
      }
    },
    name: "KakaoMap",
    data() {
      return {
        hotelMarkers: [],
        chargerMarkers: [],
        storeMarkers: [],
        hotelMarkerPositions: [],
        chargerMarkerPositions: [],
        storeMarkerPositions: [],
        sidePanel: [],
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
      displayHotel(selectedCategory, selectedFilter, locationFilter) {
        if (this.hotelMarkers.length > 0) {
          this.hotelMarkers.forEach((marker) => marker.setMap(null));
        }
        this.hotelMarkers = [];
        this.hotelMarkerPositions = [];
        let wifi,
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
          cooking
        let jeju,
          aewol,
          hamdeok,
          moonset,
          gujwa,
          seogwipo,
          seongsan,
          pyoseon
        if (locationFilter.includes('jeju')) {
          jeju = 1
        }
        if (locationFilter.includes('aewol')) {
          aewol = 1
        }
        if (locationFilter.includes('hamdeok')) {
          hamdeok = 1
        }
        if (locationFilter.includes('moonset')) {
          moonset = 1
        }
        if (locationFilter.includes('gujwa')) {
          gujwa = 1
        }
        if (locationFilter.includes('seogwipo')) {
          seogwipo = 1
        }
        if (locationFilter.includes('seongsan')) {
          seongsan = 1
        }
        if (locationFilter.includes('pyoseon')) {
          pyoseon = 1
        }
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
        axios({
          method: 'post',
          url: 'http://localhost:3000/hotel',
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
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          responseType: 'json'
        }).then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.hotelMarkerPositions.length < Response.data.length) {
              this.hotelMarkerPositions.push({
                content: '<div style="font-weight:bold;"><img src="https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/' + Response.data[i].PATH + '/' + Response.data[i].UUID + '" width="240px" height="110px" style="overflow:hidden; margin-bottom:8px;"><br>' + Response.data[i].NAME + '<br> 별점 : ' + Math.round(Response.data[i].STARRATE * 100) / 100 + '</div>',
                latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
                info : {
                    HOTELID : Response.data[i].HOTELID,
                    NAME : Response.data[i].NAME,
                    CATEGORY : Response.data[i].CATEGORY,
                    ADDRESS : Response.data[i].ADDRESS,
                    COMMENTS : Response.data[i].COMMENTS,
                    PRICE : Response.data[i].PRICE,
                    STARRATE : Response.data[i].STARRATE,
                    UUID : Response.data[i].UUID,
                    PATH : Response.data[i].PATH,
                  }
              })
            }
          }
        }).then(() => {
          var imageSrc = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/hotel.svg', // 마커이미지의 주소입니다
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
            kakao.maps.event.addListener(marker, 'click', this.displaySidePanel(this.hotelMarkerPositions[i].info));
            this.hotelMarkers.push(marker)
          }
        })
          .catch(function (error) {
            // 에러 핸들링
            console.log(error.toJSON());
          })
      },
      displayCharger(locationFilter) {
        if (this.chargerMarkers.length > 0) {
          this.chargerMarkers.forEach((marker) => marker.setMap(null));
        }
        this.chargerMarkers = [];
        this.chargerMarkerPositions = [];
        let jeju,
          aewol,
          hamdeok,
          moonset,
          gujwa,
          seogwipo,
          seongsan,
          pyoseon
        if (locationFilter.includes('jeju')) {
          jeju = 1
        }
        if (locationFilter.includes('aewol')) {
          aewol = 1
        }
        if (locationFilter.includes('hamdeok')) {
          hamdeok = 1
        }
        if (locationFilter.includes('moonset')) {
          moonset = 1
        }
        if (locationFilter.includes('gujwa')) {
          gujwa = 1
        }
        if (locationFilter.includes('seogwipo')) {
          seogwipo = 1
        }
        if (locationFilter.includes('seongsan')) {
          seongsan = 1
        }
        if (locationFilter.includes('pyoseon')) {
          pyoseon = 1
        }
        axios({
          method: 'post',
          url: 'http://localhost:3000/charger',
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
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          responseType: 'json'
        })
          .then((Response) => {
            for (let i = 0; i < Response.data.length; i++) {
              if (this.chargerMarkerPositions.length < Response.data.length) {
                this.chargerMarkerPositions.push({
                  content: '<div style="font-weight:bold;">' + Response.data[i].NAME + '<br><br>' + Response.data[i].ADDRESS + '<br><br></div>',
                  latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
                  info:{
                    CHAGERID :Response.data[i].CHAGERID,
                    NAME :Response.data[i].NAME,
                    ADDRESS :Response.data[i].ADDRESS,
                  }
                })
              }
            }
          }).then(() => {
            var imageSrc = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/chargerloc.svg', // 마커이미지의 주소입니다
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
              kakao.maps.event.addListener(marker, 'click', this.displaySidePanel(this.chargerMarkerPositions[i].info));
              this.chargerMarkers.push(marker)
            }
          })
          .catch(function (error) {
            // 에러 핸들링
            console.log(error.toJSON());
          })
      },
      displayStore(locationFilter) {
        if (this.storeMarkers.length > 0) {
          this.storeMarkers.forEach((marker) => marker.setMap(null));
        }
        this.storeMarkers = [];
        this.storeMarkerPositions = [];
        let jeju,
          aewol,
          hamdeok,
          moonset,
          gujwa,
          seogwipo,
          seongsan,
          pyoseon
        if (locationFilter.includes('jeju')) {
          jeju = 1
        }
        if (locationFilter.includes('aewol')) {
          aewol = 1
        }
        if (locationFilter.includes('hamdeok')) {
          hamdeok = 1
        }
        if (locationFilter.includes('moonset')) {
          moonset = 1
        }
        if (locationFilter.includes('gujwa')) {
          gujwa = 1
        }
        if (locationFilter.includes('seogwipo')) {
          seogwipo = 1
        }
        if (locationFilter.includes('seongsan')) {
          seongsan = 1
        }
        if (locationFilter.includes('pyoseon')) {
          pyoseon = 1
        }
        axios({
          method: 'post',
          url: 'http://localhost:3000/store',
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
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          responseType: 'json'
        })
          .then((Response) => {
            for (let i = 0; i < Response.data.length; i++) {
              if (this.storeMarkerPositions.length < Response.data.length) {
                this.storeMarkerPositions.push({
                  content: '<div style="font-weight:bold;"><img src="https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/' + Response.data[i].PATH + '/' + Response.data[i].UUID + '"width="240px" height="110px" style="display: block; margin: 0 auto;overflow:hidden; margin-bottom:8px;"><br>' + Response.data[i].STORENAME + '<br><br>' + Response.data[i].ADDRESS + '<br><br></div>',
                  latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE),
                  info : {
                    STOREID : Response.data[i].STOREID,
                    STORENAME : Response.data[i].STORENAME,
                    CATEGORY : Response.data[i].CATEGORY,
                    ADDRESS : Response.data[i].ADDRESS,
                    INFO : Response.data[i].INFO,
                    KEYWORD : Response.data[i].KEYWORD,
                    STARRATE : Response.data[i].STARRATE,
                    OPEN : Response.data[i].OPEN,
                    TEL : Response.data[i].TEL,
                    UUID : Response.data[i].UUID,
                    PATH : Response.data[i].PATH,
                  }
                })
              }
            }
          }).then(() => {
            var imageSrc = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/store.svg', // 마커이미지의 주소입니다
              imageSize = new kakao.maps.Size(21, 26)
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
            for (var i = 0; i < this.storeMarkerPositions.length; i++) {
              var marker = new kakao.maps.Marker({
                map: this.map,
                position: this.storeMarkerPositions[i].latlng,
                image: markerImage,
              })
              var infowindow = new kakao.maps.InfoWindow({
                content: this.storeMarkerPositions[i].content, // 인포윈도우에 표시할 내용
              });
              kakao.maps.event.addListener(marker, 'mouseover', this.displayInfowindow(marker, infowindow));
              kakao.maps.event.addListener(marker, 'mouseout', this.closeInfowindow(infowindow));
              kakao.maps.event.addListener(marker, 'click', this.displaySidePanel(this.storeMarkerPositions[i].info));
              this.storeMarkers.push(marker)
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
      displaySidePanel(info) {
        return () => {
          this.sidePanel=[],
          this.sidePanel.push(info)
          window.location.href = 'http://localhost:9000/#/detail/'+info.STOREID;
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

  .body--dark {
    background: #000
  }
  </style>

  <!-- https://velog.velcdn.com/images/kimjyunny_dev/post/c059d2b5-f7c1-4ad3-bd3b-16475b317069/image.svg     맛집 이미지-->
