<template>
<Header></Header>
<!-- mypage에서 다른 페이지 이동하면 다른페이지 깨짐 -->
  <div>
    <div class="myPageBox">
      <p class="myPageTitle" > My Page</p>
        <div class="myPageSelect" >
          <div class="myPageMember">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/4a9937e2-23f5-4595-bc39-6402a5e42187/image.png" width="80" > 
            <p>회원정보</p>
          </div>
          <div class="myPageOrder"> 
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/2422b5e0-250f-4a47-b0ec-631ca1c4ee94/image.png" width="80" > 
            <p>주문내역</p>
          </div>
          <div class="myPageWrite"> 
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/53ea14e5-f61a-44fb-ba7d-d1c542bc36a7/image.png" width="80" > 
            <p>작성한 글</p>
          </div>
          <div class="myPageLike">
            <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/bdc5cd07-2946-4985-847c-03689d903d46/image.png" width="80" >  
            <p>좋아요</p>
          </div>
        </div>
  </div>
  <Footer></Footer>
  </div>

</template>


<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
export default{
    components: { Header, Footer }
}</script>

<style>
.myPageTitle{
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  text-align: center;
  padding-top: 10px;
  margin-top: 70px;
}
.myPageSelect{
   margin: 0 auto;
   width:70%;
   display: flex;
   margin-top: 20px;
   margin-bottom: 20px;
   text-align: center;
   font-size: 25px;
   font-family: 'Noto Sans KR', sans-serif;
  padding: 10px;
}
.myPageMember{
  margin: 10px;
  width: 25%;
  background-color: #E7E7E7;
  border-radius: 5px;
  padding: 5%;
  
}
.myPageOrder{
 background-color: #E7E7E7;
  border-radius: 5px;
  margin: 10px;
  width: 25%;
   padding: 5%;
}
.myPageLike{
   background-color: #E7E7E7;
  border-radius: 5px;
   margin: 10px;
   width: 25%;
    padding: 5%;
}
.myPageWrite{
   background-color: #E7E7E7;
  border-radius: 5px;
   margin: 10px;
   width: 25%;
    padding: 5%;
}

</style>
