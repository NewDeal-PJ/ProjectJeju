<template>
<Header></Header>
<div id="join-wrap">

      <div class="cartInfo2" style="text-align: center;">
      <table class="jointable" style="width: 1200px; height: 180px; padding: 30px; margin-left: 140px;">
          <tr style="background-color: #E7E7E7; height: 30px; font-size: 15px;">
          <th> 상품 사진</th>
          <th> 상품명</th>
          <th> 배송비 </th>
          <th> 수량</th>
          <th> 상품금액</th>
        </tr>
          <td>사진</td>
          <td> 아이폰 </td>
          <td> 2500원 </td>
          <td> 1개 </td>
          <td>15300원</td>
      </table>
    </div>

  <table class="jointable" style="width: 1200px; height: 200px; padding: 30px; margin-left: 140px;">
          <tr style="background-color: #E7E7E7; height: 30px; font-size: 15px;">

  <th colspan="5"> 배송지정보</th>
   </tr>

    <tr>

      <th></th>
      <td style="font-weight: bold; text-align: center;">수 령 인<input type="text" id="receiver_name" class="textForm" style="width: 500px; margin-left: 13px"></td>
    </tr>

    <tr>
      <th></th>
      <td style="font-weight: bold; text-align: center;">연 락 처<input type="tel" id="receiver_tel" class="textForm" style="width: 158px; margin-left: 12px;"> -
      <input type="tel" id="receiver_tel" class="textForm" style="width: 158px;"> -
      <input type="tel" id="receiver_tel" class="textForm" style="width: 158px;"></td>
    </tr>

    <tr>
      <th></th>
      <td style="font-weight: bold; text-align: center;">배송주소<input type="address" id="user_add" class="textForm" style="width: 500px; margin-left: 10px"></td>
    </tr>

    <tr>
      <th></th>
      <td style="font-weight: bold; text-align: center;">배송메모<input class="textForm"  style="width: 500px; margin-left: 10px"></td>
    </tr>
    </table>

</div>

<div class="button" >
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
