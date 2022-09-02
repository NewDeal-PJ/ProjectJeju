<template>
  <Header></Header>

  <!-- 스테퍼 작업중 -->
  <!-- <div>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
        contracted
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Select campaign settings"
          icon="car"
          :done="step > 1"
        >
          For each ad campaign that you create, you can control how much you're willing to
          spend on clicks and conversions, which networks and geographical locations you want
          your ads to show on, and more.
        </q-step>

        <q-step
          :name="2"
          title="Create an ad group"
          caption="Optional"
          icon="car"
          :done="step > 2"
        >
          An ad group contains one or more ads which target a shared set of keywords.
        </q-step>

        <q-step
          :name="3"
          title="Create an ad"
          icon="car"
        >
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Continue'" />
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </div> -->

  <div id="join-wrap">

        <div class="cartInfo2" style="text-align: center;">
          <table class="jointable" style="width: 1200px;  height: 180px; padding: 30px; margin-left: 140px;">

            <div  style=" margin:0 auto;">

    <q-markup-table :separator="separator" flat >
      <thead>
        <tr>
          <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7">  </th>
          <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 상품정보 </th>
          <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 배송비</th>
          <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 수량</th>
          <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 상품금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-middle">사진</th>
          <th class="text-middle">아이폰</th>
          <th class="text-middle">3,000</th>
          <th class="text-middle">1</th>
          <th class="text-middle">18,300</th>
        </tr>

      </tbody>
    </q-markup-table>
    </div>

          </table>
        </div>

    <table class="jointable" style="width: 1200px; height: 200px; padding: 30px; margin-left: 140px;">
      <q-markup-table :separator="separator" flat >
          <thead>
            <tr>
              <td colspan='2'  style=" text-align: center; font-size: 15px; background-color: #FAEBD7"> 배송정보 </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-right"> 수령인</th>
              <th class="text-middle"><q-input filled v-model="text" :dense="dense"  style="max-width: 450px;" /></th>

            </tr>

            <tr>
              <th class="text-right"> 연락처</th>
              <th class="text-middle"><q-input filled v-model="text" :dense="dense"  style="max-width: 450px;" /></th>

            </tr>

            <tr>
              <th class="text-right">배송주소</th>
              <th class="text-middle"><q-input filled v-model="text" :dense="dense"  style="max-width: 450px;"/></th>
            </tr>

            <tr>
              <th class="text-right">배송메모</th>
              <th class="text-middle"><q-input filled v-model="text" :dense="dense"  style="max-width: 450px;" /></th>
            </tr>
          </tbody>
        </q-markup-table>



      </table>

  </div>

    <div class="orderInfoButton">
            <div class="q-pa-md q-gutter-md form-group">
              <q-btn @click="confirm" style="color: white; background-color: #FF9800; width: 300px;
            height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;">취소하기</div>
              </q-btn>
            </div>
          </div>


  <Footer></Footer>
  </template>

  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  import { ref } from 'vue';
  import { useQuasar } from 'quasar'
  export default{
    setup () {
      const $q = useQuasar()

      function confirm () {
      $q.dialog({
        title: 'Confirm',
        message: '취소하시겠습니까?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
      }
    return { confirm,
      step: ref(1)
    }
  },

      components: { Header, Footer }
  }




  </script>

  <style>
  </style>
