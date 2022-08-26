<template>
<Header></Header>
<div id="join-wrap">

  <form action="aaa.html" method="get">
    <!-- 실제사용할때 보낼 페이지url 넣기  -->
    <fieldset style="margin: 70px;">
      <legend class="title"> </legend>
      <table class="jointable">
      상품정보
      </table>
    </fieldset>

    <fieldset style="margin: 100px; ">
      <legend class="title"> </legend>
      <table class="jointable">

        <tr>
          <th class="first"><label for="user_id"> 수령인</label></th>
          <td style="padding: 10px;"><input type="text" id="user_id" class="textForm" required autofocus>
          </td>
        </tr>


        <tr>
          <th><label for="user_tel"> 연락처</label></th>
          <td style="padding: 5px;"><input type="tel" id="user_tel" class="textForm" style="width: 150px;"> -
          <input type="tel" id="user_tel" class="textForm" style="width: 150px;"> -
          <input type="tel" id="user_tel" class="textForm" style="width: 150px;">
          </td>
        </tr>

        <tr>
          <th><label for="user_add"> 배송지 주소</label></th>
          <td style="padding: 5px;"><input type="email" id="user_add" class="textForm"></td>
        </tr>

        <tr>
          <th> 배송 메모</th>
          <td><textarea name="user_memo"></textarea> ></td>
        </tr>
      </table>
    </fieldset>
  </form>
</div>

<div class="button" >
        <div class="q-pa-md q-gutter-md">
          <q-btn style="color: white; background-color: #F79a38; width: 200px;
          height: 40px; margin: 0 auto; display: block; " >
          <div style="font-size: 25px; font-weight: 900;
           font-family: 'Noto Sans KR', sans-serif;">결제하기</div>
          </q-btn>
        </div>
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
