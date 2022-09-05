<template>
<Header></Header>
<div style="margin: 70px; border-radius: 10px;">
      <p class="goodsRegister">  상품등록페이지 </p>
      <form  class="q-gutter-md">
      <table class="goodsRegisterJointable">
          <tr>
            <th> 제품명</th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input filled v-model="productNameText" :dense="dense" />
              </div>
            </td>
          </tr>
          <tr>
            <th> 제품가격 </th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input filled v-model="productPriceText" :dense="dense" />
              </div>
            </td>
          </tr>
          <tr>
            <th>제품사진</th>
            <td style="padding-top: 20px; display: flex;">
                <div class="q-pa-md">
                  <div class="q-gutter-md row items-start">
                    <q-input
                        @update:model-value="val => { files = val }"
                        multiple
                        filled
                        type="file"
                        hint="Native file (multiple)"
                      />
                  </div>
              </div>
            </td>
          </tr>

          <tr>
            <th>제품설명</th>
            <td style="padding-top: 20px; display: flex;">
                <div class="q-pa-md" style="width: 400px">
                <q-input
                  v-model="productDescriptiontext"
                  filled
                  autogrow
                />
              </div>
            </td>
          </tr>

        </table>
        <br>
        <div style="padding: 10px;">
          <div class="registerButton">
            <div class="q-pa-md q-gutter-md form-group">
              <q-btn type="submit" style="color: white; background-color: #FF9800; width: 300px;
            height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;">등록하기</div>
              </q-btn>
            </div>
          </div>


          <div style="padding: 10px;">
          <div class="cancelButton">
            <div class="q-pa-md q-gutter-md form-group">
              <q-btn type="submit" style="color: black; background-color:  #E7E7E7; width: 300px;
            height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;">취소하기</div>
              </q-btn>
            </div>
          </div>
          </div>

        </div>
      </form>
      </div>
  <Footer></Footer>
</template>

<script>
import { ref } from 'vue'
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';

export default{
    setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
      file: ref(null),
      files: ref(null)
    }
  },
    components: { Header, Footer }
  }
</script>

<style>
.goodsRegister {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
}

.goodsRegisterJointable {

  margin: 0 auto;
  font-size: 28px;
  font-family: 'Noto Sans KR', sans-serif;
}

.textForm {
  width: 400px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;
}

tr {
  font-size: 17px;
}
</style>
