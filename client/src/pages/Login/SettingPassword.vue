<template>
<Header></Header>
 <div style="margin: 70px;border-radius: 10px;">
    <p class="SettingPasswordTitle" > Set New Password</p>
      <table class="SettingPasswordJointable">
        <tr>
          <th><label for="user_pwd"> 새로운 비밀번호</label></th>
          <td style="padding: 4px;"><input type="password" id="user_pwd" class="textForm"></td>
        </tr>
        <tr>
          <th><label for="user_pwd"> 비밀번호 확인</label></th>
          <td style="padding: 4px;"><input type="password" id="user_pwd" class="textForm"></td>
        </tr>
      </table>
      <div class="SettingPasswordButton" >
        <div class="q-pa-md q-gutter-md">
          <q-btn style="color: white; background-color: #F79a38; width: 300px;
          height: 40px; margin: 0 auto; display: block; " >
          <div style="font-size: 20px;
          font-family: 'Noto Sans KR', sans-serif;">등록하기</div>
          </q-btn>
        </div>
      </div>
    </div>
<Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
export default{
    components: { Header, Footer }
}</script>

<style>
.SettingPasswordTitle{
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
}
.SettingPasswordJointable{
  padding: 40px;
  padding-bottom:60px ;
  margin: 0 auto;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
