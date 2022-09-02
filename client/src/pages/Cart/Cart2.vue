<template>
  <Header></Header>
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

  <div class="cart2Button" >
          <div class="q-pa-md q-gutter-md">
            <q-btn style="color: white; background-color: #F79a38; width: 150px;
            height: 30px; margin: 0 auto; display: block; " >
            <div style="font-size: 15px; font-weight: 900;
             font-family: 'Noto Sans KR', sans-serif;">결제하기</div>
            </q-btn>
          </div>
        </div>

  <Footer></Footer>
  </template>

  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  export default{
      components: { Header, Footer }
  }
  </script>

  <style>
  </style>
