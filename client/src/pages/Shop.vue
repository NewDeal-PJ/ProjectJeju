<template>
<Header></Header>


<!-- 제품 -->
<main style="margin: 60px">
  <div class="container">
    <div class="row g-3">
      <div class="col-lg-2 col-md-6">
        <q-card class="my-card">
          <q-img src="https://s3.marpple.co/files/u_1686012/2022/4/original/20e610c531fa9ae667cefe084a0f23e6701c96481.jpeg" />
            <q-card-section class="goods">
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  아이폰13 PRO 젤리케이스
                <div class="text-caption text-grey">
                  투명한과 그립감을 동시에 원한다면
                </div>
                <div class="text-subtitle1 text-red">
                  15,300원
                </div>
              <div class="row">
                <div class="col-auto">
                    <q-input
                      v-model.number="model"
                      type="number"
                      filled/>

                </div>
              </div>
                <q-btn flat style="color: blue" label="ADD TO CART" />
                </div>
              </div>
            </q-card-section>
          </q-card>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import { ref } from 'vue';

export default{
  setup () {
    return {
      model: ref(10)
    }
  },
    components: { Header }
}</script>


<style>
.my-card{
  text-align: center;
}
</style>
