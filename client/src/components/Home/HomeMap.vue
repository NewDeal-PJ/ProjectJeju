<template lang="pug">

div(class="q-pa-md")

    div(class="q-gutter-sm")
      q-checkbox(v-model="category" val="1") 호텔, 리조트
      q-checkbox(v-model="category" val="2") 펜션
      hr
    div(class="q-gutter-sm")
      q-checkbox(v-model="filter" val="wifi") Wifi
      q-checkbox(v-model="filter" val="tv") TV
      q-checkbox(v-model="filter" val="air") 에어컨
      q-checkbox(v-model="filter" val="mini") 미니바
      q-checkbox(v-model="filter" val="refr") 냉장고
      q-checkbox(v-model="filter" val="bath") 욕조
    div(class="q-gutter-sm")
      q-checkbox(v-model="filter" val="karaoke") 노래방
      q-checkbox(v-model="filter" val="conveni") 편의점
      q-checkbox(v-model="filter" val="parking") 주차장
      q-checkbox(v-model="filter" val="seminar") 세미나실
      q-checkbox(v-model="filter" val="bbq") BBQ
      q-checkbox(v-model="filter" val="restaur") 식당
    div(class="q-gutter-sm")
      q-checkbox(v-model="filter" val="pickup") 픽업가능
      q-checkbox(v-model="filter" val="breakfast") 조식포함
      q-checkbox(v-model="filter" val="freepark") 무료주차가능
      q-checkbox(v-model="filter" val="cooking") 취사가능
    div(class="q-px-sm")
      y selection :{{ category }}
      y selection :{{ filter }}
    q-btn(@click="displayHotel(hotelMarkerPositions)") 숙소
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
      category: ref([]),
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
      infowindows: [],
      hotelInfowindows: [],
      hotelContents: [],
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
    displayHotel(hotelMarkerPositions) {
      if (this.hotelMarkers.length > 0) {
        this.hotelMarkers.forEach((marker) => marker.setMap(null));
      }
      axios({
        method: 'post',
        url: 'http://localhost:3000/hotel',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.hotelMarkerPositions.length < 529) {
              this.hotelMarkerPositions.push({ content: '<div style="font-weight:bold;"><br>' + Response.data[i].NAME + ' / 별점 : ' + Response.data[i].STARRATE / 2 + '<br></div>', latlng: [Response.data[i].LATITUDE, Response.data[i].LONGITUDE] })
            }
            // if (this.hotelContents.length<529) {
            //   this.hotelContents.push({name :Response.data[i].NAME, starrate : Response.data[i].STARRATE, address :Response.data[i].ADDRESS})
            // }
          }
          console.log(this.hotelMarkerPositions)
          this.hotelMarkerPositions.push({ content: '<div style="font-weight:bold;"><br>' + Response.data[i].NAME + ' / 별점 : ' + Response.data[i].STARRATE / 2 + '<br></div>', latlng: new kakao.maps.LatLng(Response.data[i].LATITUDE, Response.data[i].LONGITUDE) })

        }).then(() => {
          var imageSrc = 'https://velog.velcdn.com/images/kimjyunny_dev/post/e5a92ac3-1f83-4fbb-a3a6-fa49a562cb76/image.svg', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(21, 26)
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
          // console.log(this.hotelContents.name)
          // var iwContent='<div>까꿍</div>'
          // const contents = hotelContents.map(
          //   (content)=> new kakako.maps.setContent('<div style="font-weight:bold;"><br>'+content.name+ ' / 별점 : '+content.starRate/2+'<br></div>')
          // )
          // 인포윈도우를 생성합니다
          const positions = hotelMarkerPositions.map(
            (position) => new kakao.maps.LatLng(...position)
          );
          if (positions.length > 0) {
            this.hotelMarkers = positions.map(
              (position) =>
                new kakao.maps.Marker({
                  map: this.map,
                  position,
                  image: markerImage
                })
            )
            //   for (let i = 0; i < this.hotelContents.length; i++) {
            // const contents = this.hotelContents.map(
            //   (content) => new kakako.maps.setContent('<div style="font-weight:bold;"><br>'+this.hotelContents[i].name+ ' / 별점 : '+this.hotelContents[i].starRate/2+'<br></div>')
            // )
            //       }
            // console.log(this.hotelMarkers[20])
            // console.log(this.infowindows[20])
            // var iwContent = '<div style="font-weight:bold;"><br>'+this.hotelContents[i].name+ ' / 별점 : '+this.hotelContents[i].starRate/2+'<br></div>' // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            //   if(contents.length>0){

            //     this.infowindows = positions.map(
            //         (position) =>
            //         contents.map(
            //           (content)=>
            //           new kakao.maps.InfoWindow({
            //             map:this.map,
            //           position,
            //           content,
            //           removable: true,
            //         })
            //           )
            // )
            //   }

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            //           // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다

            // 인포윈도우를 생성합니다

            // 마커에 클릭이벤트를 등록합니다
            // kakao.maps.event.addListener(marker, 'click', function() {
            //       // 마커 위에 인포윈도우를 표시합니다
            //       infowindow.open(map, marker);
            // });
            //   }
            //   console.log(positions.length)
            // setTimeout(() => {
            //   this.displayInfowindow()
            // }, 600);
            // 마커에 클릭이벤트를 등록합니다
            // kakao.maps.event.addListener(this.hotelMarkers[i],'click',function() {
            // 					// 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            // 					info = '<span>'
            // 							+ hotelContents.name
            // 							+ '</span>'
            // 							+ '<br>' + '<span>'
            // 							+ hotelContents.address
            // 							+ '</span>';
            // 					infowindow.setContent('<div class="wrap">'
            // 									+ '<div class="info">'
            // 									+ '<div class="title">'
            // 									+ hotelContents.name
            // 									+ '<div class="close" onclick="closeOverlay()" title="닫기"></div>'
            // 									+ '</div>'

            // 									+ '<div class="body">'
            // 									+ '<div class="img">'
            // 									+ '<img src="./img/dog.png" width="73" height="70">'
            // 									+ '</div>'

            // 									+ '<div class="desc">'
            // 									+ '<div class="ellipsis">'
            // 									+ hotelContents.address
            // 									+ '</div>'
            // 									+ '<br>'
            // 									+ '<div class="jibun ellipsis">'
            // 									+ hotelContents.starrate
            // 									+ '</div>'

            // 									+ '</div>'
            // 									+ '</div>'
            // 									+ '</div>'
            // 									+ '</div>');
            // 					infowindow.open(this.map, this.hotelMarkers[i]);
            // 				});
            for (var i = 0; i < this.hotelMarkerPositions.length; i++) {
              var marker = new kakao.maps.Marker({
                map: this.map,
                position: this.hotelMarkerPositions[i].latlng,
                image: markerImage,
                // clickable: true
              })
              var infowindow = new kakao.maps.InfoWindow({
                content: this.hotelMarkerPositions[i].content, // 인포윈도우에 표시할 내용
                removable: true
              });
              kakao.maps.event.addListener(marker, 'click', this.displayInfowindow(marker, infowindow));
            }
          }
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
    },
    displayCharger(chargerMarkerPositions) {
      if (this.chargerMarkers.length > 0) {
        this.chargerMarkers.forEach((marker) => marker.setMap(null));
      }
      axios({
        method: 'post',
        url: 'http://localhost:3000/charger',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            if (this.chargerMarkerPositions.length < 500) {
              this.chargerMarkerPositions.push([Response.data[i].LATITUDE, Response.data[i].LONGITUDE])
            }
          }
        }).then(() => {
          var imageSrc = 'https://velog.velcdn.com/images/kimjyunny_dev/post/86b20ccf-b1a1-4a47-85ee-c0272e90af09/image.svg', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(21, 26)
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

          const positions = chargerMarkerPositions.map(
            (position) => new kakao.maps.LatLng(...position)
          );
          if (positions.length > 0) {
          }
          this.chargerMarkers = positions.map(
            (position) =>
              new kakao.maps.Marker({
                map: this.map,
                position,
                image: markerImage
              })
          );
          console.log(positions.length)
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
    },
    displayInfowindow() {
      for (let i = 0; i < this.hotelMarkers.length; i++) {
        var infowindow = this.infowindows[i];
        var map = this.map
        var marker = this.hotelMarkers[i];
        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, this.hotelMarkers);
        });
      }
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
    
    
    //  https://velog.velcdn.com/images/kimjyunny_dev/post/c059d2b5-f7c1-4ad3-bd3b-16475b317069/image.svg     맛집 이미지
  