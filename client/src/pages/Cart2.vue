<template>
<Header></Header>
  <div class="goodsinfo">
    상품정보
  </div>
  <div class="deliverinfo">
    배송정보
  </div>
  <div class="payment">
   <a href="http://localhost:9000/#/cart3" style="color: black;"> 결제하기</a>
  </div>

</template>

<script>
import Header from 'src/components/Home/Header.vue';
export default{
    components: { Header}
}
</script>

<style>
.goodsinfo{
  box-sizing: border-box;

position: absolute;
width: 1230px;
height: 174px;
left: 105px;
margin-top: 50px;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 0px 0px 10px 10px;
}

.deliverinfo{
  box-sizing: border-box;

position: absolute;
width: 1230px;
height: 300px;
left: 105px;
margin-top: 250px;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 0px 0px 10px 10px;
}

.payment{
  position: absolute;
width: 286px;
height: 68px;
left: 547px;
margin-top: 575px;

text-align: center;
font-weight: bold;
font-size: 25px;
line-height: 65px;

background: #D9D9D9;
border-radius: 10px;
}

a{text-decoration: none;}
</style>
