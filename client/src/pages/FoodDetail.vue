<template>
<Header></Header>
  <div class="foodDetailPic">
    <div class="q-pa-sm"
    style="width: 50%; padding: 20px;">
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
    <div class="foodDetailInfo">
        <p>식당이름</p>
        <p>식당주소</p>
        <p>영업시간</p>
        <p>식당소개</p>
        <p>테마키워드</p>
        <p>⭐5.0</p>

    </div>
  </div>

  <div class="foodDetail">
    <div class="foodDetailBox">
      <table style="font-size: 16px; width: 70%; margin: 0 auto; text-align: center; padding: 20px 0px;">
          <tr style="background-color: #E7E7E7; font-size: 18px;
    padding: 5px;">
                    <th> 닉네임 </th>
                    <th> 별점 </th>
                    <th> 내용 </th>
                    <th> 날짜 </th>
          </tr>
          <td> 김제주</td>
          <td> ⭐️⭐️⭐️⭐️⭐️</td>
          <td> 음식이 너무 맛있고 사장님이 친절해요</td>
          <td> YYYY.MM.DD</td>
      </table>
    </div>
  </div>

  <div class="foodDetailReview">
    <div class="star" style="padding:0 30% ;text-align: center; margin-top: 1%;">
        <q-form @submit="onSubmit" class>
                <q-rating
                    name="quality"
                    v-model="quality"
                    max="5"
                    size="3em"
                    color="yellow"
                    icon="star_border"
                    icon-selected="star"
                    no-dimming/>
        </q-form>
    </div>

    <div style="padding: 1% 20%;">
        <div style="display: flex;">
            <div style="width: 500px;">
                <q-input
                    v-model="text"
                    filled
                    autogrow/>
        </div>

        <div style="padding:10px;">
                <q-btn label="Submit" type="submit"  color="orange"/>
            </div>
        </div>
    </div>
  </div>
<Footer></Footer>
</template>

<script>
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
    components: { Header, Footer }

};



</script>

<style>
.foodDetailPic{
    margin: 0 auto;
    background-color: #E7E7E7;
    border-radius: 10px;
    width:70%;
   display: flex;
    margin-top: 40px;
}
.foodDetailInfo{

    width: 50%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    padding: 30px;

}

.foodDetailReview{
    border: 2px solid black;
    border-radius: 5px;
    width: 70%;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 40px;

}
</style>
