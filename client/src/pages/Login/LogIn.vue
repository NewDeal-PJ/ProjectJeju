<template>
<Header></Header>
<div>
  <div class="Login">
    Login
  </div>
        <div class="LoginIdBox">
          <div class="q-pa-md" style="padding: 0px 16px;">
            <div class="q-gutter-y-md column"  style="max-width: 500px; margin: 0 auto;">
             <q-input outlined v-model="ph" placeholder="User  ID"  :dense="dense" />
            </div>
          </div>
        </div>
        <div class="LoginPasswordBox">
           <div class="q-pa-md"  >
             <div class="q-gutter-y-md column" style="max-width: 500px; margin: 0 auto;">
              <q-input outlined v-model="ph" placeholder="Password"  :dense="dense" />
              </div>
           </div>
        </div>
        <div class="LoginButton" >
            <div class="q-pa-md q-gutter-md">
              <q-btn style="color: white; background-color: #F79a38; width: 500px; margin: 0 auto; display: block; padding: 10px; margin-top: 10px;" >
                <div style="font-size: 18px; font-weight: 900;">로그인</div>
              </q-btn>
           </div>
        </div>

      <div class="LoginText" style="margin: 20px;">
        <a href="http://localhost:9000/#/signup"  style="color: black;">회원가입 </a>
        <a href="http://localhost:9000/#/findpassword" style="color:black;">비밀번호찾기</a>
       </div>
       <hr class="two" style="width: 600px; color:gray; border: thin solid;"/>
</div>
<LoginApi></LoginApi>
<Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import LoginApi from './LoginApi.vue';


export default{
    components: { Header, Footer, LoginApi }
}</script>

<style>
.Login{
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 70px;
  font-family: 'Rubik', sans-serif;
  padding-bottom: 30px;
}
.LoginText{
  word-spacing: 20px;
  text-align: center;
  font-size: 15px;
}

#wrapper{
  height: auto;
  min-height: 100%;
  padding-bottom: (100px);
}

Footer{
    height: 100px;
  position: relative;

  transform: translateY(-100%);
}

a{text-decoration: none;}
</style>

