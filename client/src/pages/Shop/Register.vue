<template>
<Header></Header>
<div style=" border-radius: 10px;">
      <p class="goodsRegister">  상품등록페이지 </p>
      <form  class="q-gutter-md">
      <table class="goodsRegisterJointable">
          <tr>
            <th> 제품명</th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="product_nameRef" filled v-model="product_name" :dense="dense" id="product_name" lazy-rules
                  :rules="product_nameRules" required />
              </div>
            </td>
          </tr>
          <tr>
            <th> 제품가격 </th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="product_priceRef" filled v-model="product_price" :dense="dense" id="product_price" lazy-rules
                  :rules="product_priceRules" required />
              </div>
            </td>
          </tr>
          <tr>
            <th>제품사진</th>
            <td style="padding-top: 20px; display: flex;">
                <div class="q-pa-md">
                  <div class="q-gutter-md row items-start">
                    <q-file
      v-model="image"
      label="Pick one file"
      filled
      style="max-width: 300px"
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
                  v-model="product_content"
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
              <q-btn @click="onsubmit()" type="submit" style="color: white; background-color: #FF9800; width: 300px;
            height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;">등록하기</div>
              </q-btn>
            </div>
          </div>


          <div style="padding: 10px;">
          <div class="cancelButton">
            <div class="q-pa-md q-gutter-md form-group">
              <q-btn @click="submit_cancel" type="submit" style="color: black; background-color:  #E7E7E7; width: 300px;
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
import { useQuasar } from 'quasar';
import { reactive } from 'vue';
import axios from 'axios';

export default{
    setup () {
      const state = reactive({
      data: []
    });
    const product_name = ref(null)
    const product_nameRef = ref(null)
    const product_price = ref(null)
    const product_priceRef = ref(null)
    const product_content = ref(null)
    const image = ref(null)
    const $q = useQuasar();

    return {
      dense: ref(false),
      image,
      state,
      product_content,
      product_name,
      product_nameRef,
      product_nameRules: [
        val => (val && val.length > 0) || '상품명을 입력해주세요.',
        val => (!(/\s/.test(val))) || '상품명은 공백이 들어갈 수 없습니다.',
      ],
      product_price,
      product_priceRef,
      product_priceRules: [
        val => (val && val.length > 1) || '10원 이상 입력',
      ],



      onsubmit() {
        // product_name.value.validate()
        // product_price.value.validate()
            const args = {
              product_name : product_name,
              product_price : product_price,
              product_image : image,
              product_content : product_content
            };
            if (product_nameRef.value.hasError || product_priceRef.value.hasError) {
              $q.notify({
                color: 'negative',
                message: '필수 정보를 입력해주세요.'
              })
            }
            else {
              axios
                .post("/api/shop/register", args)
                .then((res) => {
                  console.log(image)
                  // console.log(image._value[0].name)
                  // console.log(img._value)
                  state.data = res.data;
                  window.location.href = 'http://localhost:9000/#/api/shop';
                  $q.notify({
                    color: 'orange-7',
                    icon: 'thumb_up',
                    message: product_name.value + `등록이 완료되었습니다.`,
                    position: 'center',
                    timeout: 1200

                  })
                })
                //redirect logic
                .catch(function (error) {
                  // 에러 핸들링
                  console.log(error);
                })
            }
          },
          submit_cancel(){
            window.location.href = 'http://localhost:9000/#/api/shop';
          },
          // upload(image) {
          //   console.log(image)
          //   this.image = image[0]
          //   console.log(this.image)


// },
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
