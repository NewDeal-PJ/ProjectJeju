<template>
<!-- 로그인 아이콘 -->
<div class="logo" >
            <div class="kakao">
            <button @click="kakaoLogin()">
                <img src=https://velog.velcdn.com/images/kimjyunny_dev/post/c68a56c7-23a6-41e0-9b82-0d0fc5f37e7e/image.png width="50"
                />
            </button>
            </div>
            <div class="google">
            <a>
              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/97da4d63-eae1-4f40-9251-680bb383ea7f/image.png" width="45"/>
            </a>
          </div>
  </div>

</template>

<script>
import axios from "axios";
import { useQuasar } from 'quasar';
import {reactive} from 'vue';
  export default {
    data (){
      return{
        kakao_account : '',
      }
    },
    setup() {
    const $q = useQuasar();
    const state = reactive({
      social : {
        email : '',
        method : '',
        nickname : ''
      },
    });
    return {
      $q,
      state,
      kakaoLogin(){
        window.Kakao.Auth.login({
          scope: 'profile_nickname,account_email,gender,age_range,birthday',
          success : function(authOb){
            console.log(authOb);
            window.Kakao.API.request({
              url: '/v2/user/me',
              success : res => {
                this.kakao_account = res.kakao_account
                console.log('kakao_account:',this.kakao_account)
                console.log(this.kakao_account.age_range)
                console.log(this.kakao_account.birthday)
                console.log(this.kakao_account.email)
                console.log(this.kakao_account.gender)
                console.log(this.kakao_account.profile.nickname)
                const args = {
                    "kakao_user_age_range" : this.kakao_account.age_range,
                    "kakao_user_birthday" : this.kakao_account.birthday,
                    "kakao_user_email" : this.kakao_account.email,
                    "kakao_user_gender" : this.kakao_account.gender,
                    "kakao_user_nickname" : this.kakao_account.profile.nickname,
                    "login_method" : "kakao"
                }
                axios.post("/api/kakao_login",args)
                .then((res) => {
                  console.log(res)
                  //카카오 로그인 성공
                  $q.notify({
                  color: 'orange-7',
                  position: 'center',
                  message: '로그인 성공! 즐거운 여행 되세요!'
                })
                window.location.href = 'http://localhost:9000/#/';
                })
              }
            });
          }
        });      
      }
    }
  },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', "https://developers.kakao.com/sdk/js/kakao.js")
      document.head.appendChild(recaptchaScript)
      window.Kakao.init('c0cd1db8ddcb5b51c1e9ab45427117e8');
      // SDK 초기화 여부를 판단합니다.
      console.log(Kakao.isInitialized());
    }
  }
</script>

<style>
.logo{
  display: block;
  text-align: center;
  padding: 20px;
  margin-bottom: 70px;
}
.kakao{
  display:inline-block;zoom:1;
  padding-right: 50px;
}
.google{
  display:inline-block;zoom:1;
}

</style>
