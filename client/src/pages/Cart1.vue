<template>
<Header></Header>
<div class="cartbox"> 장바구니</div>

<div class="totalbox">
 total
</div>

<div class="paymentbox">
  <a href="http://localhost:9000/#/cart2" style="color: black;">결제하기</a>
  </div>
</template>


<script>
import Header from 'src/components/Home/Header.vue';
export default{
    components: { Header }
}
</script>

<style>
.cartbox{
  position: absolute;
width: 859px;
height: 390px;
left: 66px;
margin-top: 50px;

background: #D9D9D9;
}

.totalbox{
  box-sizing: border-box;

position: absolute;
width: 389px;
height: 320px;
left: 983px;
margin-top: 50px;

background: #FFFFFF;
border: 1px solid #000000;
}

.paymentbox{
  position: absolute;
width: 286px;
height: 68px;
left: 1035px;
margin-top: 400px;

background: #D9D9D9;
border-radius: 10px;

text-align: center;
font-weight: bold;
font-size: 25px;
line-height: 65px;

}

a{text-decoration: none;}
</style>
