<template>
<Header></Header>
 <fieldset style="margin: 70px;border-radius: 10px;">
    <legend class="title"> 비밀번호 찾기</legend>
      <table class="jointable">
        <tr>
          <th class="first"><label for="user_id"> 아이디</label></th>
          <td style="padding: 10px;"><input type="text" id="user_id" class="textForm" required autofocus>
          </td>
        </tr>
        </table>

      <div class="button" >
        <div class="q-pa-md q-gutter-md">
          <q-btn style="color: white; background-color: #F79a38; width: 300px;
          height: 40px; margin: 0 auto; display: block; " >
          <div style="font-size: 25px;
           font-family: 'Noto Sans KR', sans-serif;"> 이메일 보내기</div>
          </q-btn>
        </div>
      </div>
        </fieldset>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
export default{
    components: { Header }
}</script>

<style>
.title{
text-align: center;
font-size: 40px;
font-weight: bold;
font-family: 'Noto Sans KR', sans-serif;
}
.jointable{
  padding: 100px;
  margin: 0 auto;
  font-size: 28px;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
