<template>
<Header></Header>
<div style="width: 100%; display: flex;">

    <div class="cartGoods">
      <div class="foodDetail">
        <div class="foodDetailBox">
          <table style="width: 100%; margin: 0 auto; text-align: center; padding: 20px 0px;">
            <tr style="background-color: #E7E7E7;">
                      <th> Item </th>
                      <th> Detail </th>
                      <th> Price </th>
                      <th> Action </th>
            </tr>
            <td> 사진 </td>
            <td> 아이폰 </td>
            <td> 15,300</td>
            <td> 쓰레기통</td>
          </table>
        </div>
      </div>
    </div>
    <div class="cartTotal">
      <span
      style="font-size: 23px;
      font-family: 'Rubik', sans-serif;
      margin-left: 20px;">Total</span>
      <hr width="90%">
      <div>
        <div class="foodDetail">
        <div class="foodDetailBox">
          <table style="width: 100%; margin: 0 auto; text-align: center; padding: 20px 0px;">

            <td> 아이폰 </td>
            <td> 1개 </td>
            <td> 15,300</td>
            <tr></tr>
            <td> 배송비 </td>
            <td> </td>
            <td> 3,000</td>
          </table>
        </div>
      </div>
      </div>
      <hr width="90%">
      <div style="padding: 10px 40px;">
        <table style="margin-left:auto;">
          <td style="font-weight: bold;"> 합계 </td>
          <td> 18,300</td>
        </table>
      </div>

    </div>
</div>

  <div class="button" >
      <q-btn style="color: white;
      background-color: #F79a38;
      width: 180px;
      height: 30px;
      display: block;
      margin-left: 75%;
      margin-bottom: 50px;" >
        <div style="font-size: 18px; font-weight: 900;
        font-family: 'Noto Sans KR', sans-serif;">결제하기</div>
      </q-btn>
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
.cartGoods{
  background-color:#E7E7E7;
  width: 60%;
  height: 350px;
  margin: 60px;
}
.cartTitle1{
   margin: 10px;
   font-size: 23px;
   font-family: 'Rubik', sans-serif;
   display: flex;
   gap: 0px 130px;
   padding: 5px;

}
.cartTotal{
  width: 30%;
  margin: 60px;
  border: 5px solid #E7E7E7;
  padding: 10px;
}

th{
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 23px;
}

td{
  font-size: 15px;
}
</style>
