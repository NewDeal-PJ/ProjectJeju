<template>
<Header></Header>
<div>
  <div class="Login">
    Login
  </div>
        <div class="IdBox">
          <div class="q-pa-md">
            <div class="q-gutter-y-md column"  style="max-width: 600px; margin: 0 auto;">
             <q-input outlined v-model="ph" placeholder="User  ID"  :dense="dense" />
            </div>
          </div>
        </div>
        <div class="PasswordBox">
           <div class="q-pa-md"  >
             <div class="q-gutter-y-md column" style="max-width: 600px; margin: 0 auto;">
              <q-input outlined v-model="ph" placeholder="Password"  :dense="dense" />
              </div>
           </div>
        </div>
        <div class="button" >
            <div class="q-pa-md q-gutter-md">
              <q-btn style="color: white; background-color: #F79a38; width: 600px; margin: 0 auto; display: block; padding: 10px; margin-top: 10px;" >
                <div style="font-size: 20px; font-weight: 900;">로그인</div>
              </q-btn>
           </div>
        </div>

      <div class="text" style="margin: 20px;">
        <a href="http://localhost:9000/#/signup"  style="color: black;">회원가입 </a>
        <a href="http://localhost:9000/#/findpassword" style="color:black;">비밀번호찾기</a>
       </div>

       <hr class="two" style="width: 600px; color:gray; border: thin solid;"/>
</div>

<!-- 로그인 아이콘 -->
<div class="logo" >
            <div class="kakao">
            <a id="custom-login-btn" @click="kakaoLogin()">
                <img src=https://velog.velcdn.com/images/kimjyunny_dev/post/c68a56c7-23a6-41e0-9b82-0d0fc5f37e7e/image.png width="70"
                />
              </a>
            </div>
            <div class="google">
            <a>
              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/97da4d63-eae1-4f40-9251-680bb383ea7f/image.png" width="60"/>
            </a>
          </div>
  </div>
<Footer></Footer>
</template>

<script>

import Header from 'src/components/Home/Header.vue';
import Footer from '../components/Home/Footer.vue';

export default{
    components: { Header, Footer }
}</script>

<style>
.Login{
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin-top: 70px;
  font-family: 'Rubik', sans-serif;
}
.text{
  word-spacing: 30px;
  text-align: center;
  font-size: 20px;
}
.logo{
  display: block;
  text-align: center;
  padding: 20px;
}
.kakao{
  display:inline-block;zoom:1;
  padding-right: 60px;
}
.google{
  display:inline-block;zoom:1;
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

