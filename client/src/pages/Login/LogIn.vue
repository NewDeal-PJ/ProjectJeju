<template>
<Header></Header>
<div>
  <div class="Login">
    Login
  </div>
        <div class="LoginIdBox">
          <div class="q-pa-md" style="padding: 0px 16px;">
            <div class="q-gutter-y-md column"  style="max-width: 500px; margin: 0 auto;">
             <q-input outlined v-model="state.form.loginId" type="text" id="loginId" placeholder="User  ID"  :dense="dense" />
            </div>
          </div>
        </div>
        <div class="LoginPasswordBox">
           <div class="q-pa-md"  >
             <div class="q-gutter-y-md column" style="max-width: 500px; margin: 0 auto;">
              <q-input outlined v-model="state.form.loginPw" type="password" id="loginPw" placeholder="Password"  :dense="dense" />
              </div>
           </div>
        </div>
        <div class="LoginButton" >
            <div class="q-pa-md q-gutter-md">
              <q-btn @click="submit()" style="color: white; background-color: #F79a38; width: 500px; margin: 0 auto; display: block; padding: 10px; margin-top: 10px;">
                <div style="font-size: 18px; font-weight: 900;">로그인</div>
              </q-btn>
           </div>
        </div>
     

      <div class="LoginText" style="margin: 20px;">
        <a href="http://localhost:9000/#/api/signup"  style="color: black;">회원가입 </a>
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
import axios from "axios";
import {reactive, resolveDirective} from 'vue';
// import router from 'src/router';
export default{
    components: { Header, Footer, LoginApi },
    //셋업 설정
        //CORS 이슈는 quasar.config.js 파일에서 proxy 설정을 통해서 우회했다.
        data(){
          return {
            foobar : null
          }
        },
        setup(){
          const state = reactive({
            account: {
              id : '',
              name : ''
            },
            // 로그인 정보 담아서 보내주려면 객체를 만들어줘야죠~
            form: {
              loginId : "",
              loginPw : ""
            },
      
          });
      
          const submit = () => {
            const args = {
            loginId : state.form.loginId,
            loginPw : state.form.loginPw
            }
            
            axios.post("/api/login", args).then((res) => {
              //로그인에 성공
              alert("로그인에 성공하셨습니다! 즐거운 여행 되세요 !")
              state.account = res.data;
              window.location.href = 'http://localhost:9000/#/';
              //로그인 성공시 '/' 페이지로 이동
            })
            //로그인 실패
              .catch((error) => {
                alert("로그인에 실패하셨습니다.")
                window.location.href = 'http://localhost:9000/#/api/login';
                //login 실패서 login 페이지로 이동
            });
      
          //submit함수가 실행이 되면 server에 post방식으로 던진다.
          
          }

          // 로그아웃  method
          const logout = () => {
            axios.delete("/api/logout").then((res) => {
              alert("로그아웃이 완료되었습니다.")
              state.account.id = null;
              state.account.name = "";
            });
      
          }
      
          // 백엔드의 계정정보를 호출
          axios.get("/api/login").then((res) => {
            state.account = res.data;
          });
          return { state, submit, logout};
        }
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

