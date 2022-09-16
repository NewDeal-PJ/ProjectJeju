<template>
  <div class="app">
    <div v-if="state.account.id">
      <p> 안녕하세요 ? {{state.account.name}}님 !</p>
      <button @click="logout()">로그아웃</button>
    </div>

    <div v-else>
      <label for="loginId">
        <span>아이디 : </span>
        <input type="text" id="loginId" v-model="state.form.loginId" />
      </label>
      <br />
      <br />
      <label for="loginPw">
        <span>비밀번호 : </span>
        <input type="password" id="loginPw" v-model="state.form.loginPw" />
      </label>
      <hr />
      <button @click="submit()">로그인</button>
    </div>
  </div>

</template>
<script>
import axios from "axios";
import {reactive} from 'vue';

export default {
  //셋업 설정
  //CORS 이슈는 quasar.config.js 파일에서 proxy 설정을 통해서 우회했다.
  setup(){
    const state = reactive({
      account: {
        id: null,
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
      
      axios.post("http://localhost:3000/api/account", args).then((res) => {
        //로그인에 성공
        alert("로그인에 성공하셨습니다! 즐거운 여행 되세요 !")
        state.account = res.data;
      })
      //로그인 실패
        .catch(() => {
        alert("로그인에 실패하였습니다. 계정 정보를 확인해주세요 !")
      });


    //submit함수가 실행이 되면 server에 post방식으로 던진다.

    }
    // 로그아웃  method
    const logout = () => {
      axios.delete("http://localhost:3000/api/account").then((res) => {
        alert("로그아웃이 완료되었습니다.")
        state.account.id = null;
        state.account.name = "";
      });

    }

    // 백엔드의 계정정보를 호출
    axios.get("http://localhost:3000/api/account").then((res) => {
      state.account = res.data;
    });
    return { state, submit, logout};
  }
}
</script>