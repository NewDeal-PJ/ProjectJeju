<template>
  <Header></Header>
  <body>
      <div>
        <div class="Login">
          Login
        </div>
        <div class="LoginIdBox">

            <div class="q-gutter-y-md column" style="width: 400px; max-width: 100%; margin: 0 auto;">
              <q-input outlined v-model="state.form.loginId" type="text" id="loginId" placeholder="User  ID"
                :dense="dense" />
            </div>

        </div>
        <div class="LoginPasswordBox">

            <div class="q-gutter-y-md column" style="width: 400px; margin: 0 auto;">
              <q-input outlined v-model="state.form.loginPw" :type="isPwd ? 'password' : 'text'" id="loginPw"
                placeholder="Password" :dense="dense">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>

        </div>
        <div class="LoginButton">

            <q-btn @click="submit()"
              style="color: white; background-color: #F79a38; width: 400px; max-width: 100%; margin: 0 auto; display: block; padding: 10px; margin-top: 10px;">
              <div style="font-size: 18px; font-weight: 900;">로그인</div>
            </q-btn>

        </div>


        <div class="LoginText" style="margin: 20px;">
          <a href="#/api/signup" style="color: black;">회원가입 </a>
          <a href="#/api/findpassword" style="color:black;">비밀번호찾기</a>
        </div>
        <hr class="two" style="width: 500px; max-width: 100%; color:gray; border: thin solid;" />
      </div>
      <LoginApi></LoginApi>
  </body>
  <Footer></Footer>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar';
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import LoginApi from './LoginApi.vue';
import axios from "axios";
import { reactive, resolveDirective } from 'vue';
// import router from 'src/router';
export default {
  components: { Header, Footer, LoginApi },
  //셋업 설정
  //CORS 이슈는 quasar.config.js 파일에서 proxy 설정을 통해서 우회했다.
  data() {
    return {
      foobar: null
    }
  },
  setup() {
    const $q = useQuasar();
    const state = reactive({
      account: {
        id: '',
        name: ''
      },
      // 로그인 정보 담아서 보내주려면 객체를 만들어줘야죠~
      form: {
        loginId: "",
        loginPw: ""
      },

    });

    const submit = () => {
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw
      }

      axios.post("/api/login", args).then((res) => {
        //로그인에 성공
        state.account = res.data;
        if(res.data.id=='admin'){
          $q.notify({
              color: 'orange-7',
              position: 'center',
              message: '관리자님, 오셨군요. 관리자 페이지로 이동하시겠습니까?'
            })
        }
        else{
          $q.notify({
            color: 'orange-7',
            position: 'center',
            message: '로그인 성공! 즐거운 여행 되세요!'
          })
        }
        window.location.href = '#/';
        //로그인 성공시 '/' 페이지로 이동
      })
        //로그인 실패
        .catch((error) => {
          $q.notify({
            color: 'orange-7',
            position: 'center',
            message: '로그인에 실패하셨습니다. 계정정보를 확인해 주세요!'
          })
          console.log(error.toJSON());
          // window.location.href = '#/api/login';
          //login 실패서 login 페이지로 이동
        });

      //submit함수가 실행이 되면 server에 post방식으로 던진다.

    }

    // 로그아웃  method
    const logout = () => {
      axios.delete("/api/logout").then((res) => {
        $q.notify({
            color: 'teal',
            position: 'center',
            message: '로그아웃 되었습니다.'
          })
        state.account.id = null;
        state.account.name = "";
      });

    }

    // 백엔드의 계정정보를 호출
    axios.get("/api/login").then((res) => {
      state.account = res.data;
    });
    return { state, submit, logout, isPwd: ref(true), };
  }
}</script>

<style>
.Login {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 70px;
  font-family: 'Ubuntu', sans-serif;
  padding-bottom: 30px;
}

.LoginText {
  word-spacing: 20px;
  text-align: center;
  font-size: 15px;
}

#wrapper {
  height: auto;
  min-height: 100%;
  padding-bottom: (100px);
}

Footer {
  height: 100px;
  position: relative;

  transform: translateY(-100%);
}

a {
  text-decoration: none;
}
</style>


