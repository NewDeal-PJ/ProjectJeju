<template>
<Header></Header>
<div style="width: 100%; display: flex;">
  
    <div class="cartGoods">
      <div class="cartTitle1">
        <span style="margin-left: 50px;
        margin-right: 200px;">Item</span>
        <span>Price</span>
        <span>Action</span>
      </div>
        <hr width="90%">


        
      <div class="cartItem" >
        <ul style="list-style: none;">
          <li style="padding: 10px;  display: flex; gap: 160px">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/726e1fc4-be7c-48a9-8f50-99d4b8edf2c2/image.png" width="50">
            <span>아이폰</span>
            <span>가격</span>
            <button> 쓰레기통 </button>
          </li>
          
          <li style="padding: 10px; display: flex; gap: 160px">       
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/726e1fc4-be7c-48a9-8f50-99d4b8edf2c2/image.png" width="50">
            <span>아이폰</span>
            <span>가격</span>
            <button> 쓰레기통 </button>
          </li>
          
          <li style="padding: 10px; display: flex; gap: 160px">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/726e1fc4-be7c-48a9-8f50-99d4b8edf2c2/image.png" width="50">
            <span>아이폰</span>
            <span>가격</span>
            <button> 쓰레기통 </button>
          </li>
        </ul>
      </div>
      </div>
    <div class="cartTotal">
      <span 
      style="font-size: 23px; 
      font-family: 'Rubik', sans-serif;
      margin-left: 20px;">Total</span>
      <hr width="90%">
      <div>
      <div style="margin:20px;  padding: 10px;   display: flex; gap: 30%">
        <span>아이폰</span>
        <span>3개</span>
        <span> 13,800원</span>
      </div>
      <div style="margin:20px; padding: 10px;  display: flex; gap: 70%">
        <span>배송비</span>
        <span> +3000원</span>
      </div>
        
      </div>
      <hr width="90%">
      <div style="margin:20px; padding: 10px;  display: flex; gap: 70%">   
        <span>합 계</span>
        <span> 46,200원</span>
      </div>
  
    </div>     
</div>

  <div class="button" >
      <q-btn style="color: white; 
      background-color: #F79a38; 
      width: 180px;
      height: 30px;  
      display: block; 
      margin-left: 1180px;
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
</style>
