<template>
<Header></Header>
<body>
  <div style="border-radius: 10px;
 margin-bottom: 150px;">
    <p class="findPasswordTitle" >Find password </p>
      <table class="findPasswordJointable">
        <tr>
          <th class="findPasswordFirst"><label for="user_id"> ID </label></th>
          <td style="padding: 6px;"><input type="text" id="user_id" class="textForm" required autofocus>
          </td>
        </tr>
        </table>

      <div class="findPasswordButton" >
        <div class="q-pa-md q-gutter-md">
          <q-btn style="color: white; background-color: #F79a38; width: 250px;
          height: 40px; margin: 0 auto; display: block; " >
          <div style="font-size: 20px;
           font-family: 'Noto Sans KR', sans-serif;"> 이메일 보내기</div>
          </q-btn>
        </div>
      </div>
  </div>
</body>
<Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
export default{
    components: { Header, Footer }
}</script>

<style>
.findPasswordTitle{
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
  margin-top: 70px;
}
.findPasswordJointable{
  padding: 40px;
  padding-bottom:60px ;
  margin: 0 auto;
  font-size: 25px;
  font-family: 'Ubuntu', sans-serif;
}
</style>
