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
div(id="map" style="width:100%;height:700px;margin:0 auto; overflow:hidden; border:1px solid;")

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

<!-- src="" -->
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
              this.hotelMarkerPositions.push([Response.data[i].LATITUDE, Response.data[i].LONGITUDE])
            }
          }
        }).then(() => {
          var imageSrc = 'https://blog.kakaocdn.net/dn/oCYKg/btrKi9fc0wM/IKXkfr79wkJh2hyqDMl2KK/img.png', // 마커이미지의 주소입니다
              imageSize = new kakao.maps.Size(24, 29)
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
          const positions = hotelMarkerPositions.map(
            (position) => new kakao.maps.LatLng(...position)
          );
          if (positions.length > 0) {
            this.hotelMarkers = positions.map(
              (position) =>
                new kakao.maps.Marker({
                  map: this.map,
                  position,
                  image : markerImage
                })
            );
        //           // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        // var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        //     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // // 인포윈도우를 생성합니다
        // var infowindow = new kakao.maps.InfoWindow({
        //     content : iwContent,
        //     removable : iwRemoveable
        // });

        // // 마커에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'click', function() {
        //       // 마커 위에 인포윈도우를 표시합니다
        //       infowindow.open(map, marker);
        // });
          }
          console.log(positions.length)
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
          var imageSrc = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcGE5q1%2FbtrKlbisPRp%2FrTmikZR8EOP6jZhFvfZnU1%2Fimg.png', // 마커이미지의 주소입니다
              imageSize = new kakao.maps.Size(14, 19)
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

          const positions = chargerMarkerPositions.map(
            (position) => new kakao.maps.LatLng(...position)
          );
          if (positions.length > 0) {
            this.chargerMarkers = positions.map(
              (position) =>
                new kakao.maps.Marker({
                  map: this.map,
                  position,
                  image : markerImage
                })
            );
          }
          console.log(positions.length)
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
    },

  },

}
</script>
<style>
.listContainer {
  padding: 8px;
  background: lightgray;
  margin-bottom: 12px;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
}

.selected {
  background: red !important;
}
</style>
