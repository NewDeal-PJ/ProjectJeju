<template>
  <Header/>
  <div id="join-wrap">

    <form action="aaa.html" method="get">
      <!-- 실제사용할때 보낼 페이지url 넣기  -->
      <div style="margin: 70px; border-radius: 10px;">
        <p class="SignUpTitle"> Sign up </p>
        <table class="SignUpJointable">

          <tr>
            <th class="SignUpFirst"><label for="user_id"> 아이디</label></th>
            <td style="padding: 10px;"><input type="text" id="user_id" v-model="state.form.user_id" placeholder="example : dodozzang1234" class="textForm" required autofocus>
              <button @click="check_id()" class="btn" style="  background-color: #F79a38;
          color: white;
          width: 70px;
          height: 40px;
          border: 0;
          font-size: 15px;
          border-radius: 5px;
          margin-left: 10px;
           font-family: 'Noto Sans KR', sans-serif;">
           중복확인
           </button>
            </td>
          </tr>

          <tr>
            <th><label for="user_pwd"> 비밀번호</label></th>
            <td style="padding: 10px;"><input type="password" id="user_pwd" v-model="state.form.user_pwd" class="textForm" placeholder="***********" required></td>
          </tr>
          <tr>
            <th><label for="user_pwd"> 비밀번호 확인</label></th>
            <td style="padding: 10px;"><input type="password" id="user_pwd2" v-model="state.form.user_cpwd" class="textForm" placeholder="***********" required></td>
          </tr>

          <!-- <tr>
          <th><label for="inputInvalid"> 비밀번호 재확인</label></th>
          <td><input type="password" id="inputInvalid" class="form-control is-invalid"><div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div></td>
        </tr> -->

          <tr>
            <th><label for="user_name"> 이름</label></th>
            <td style="padding: 5px;"><input type="text" id="user_name" v-model="state.form.user_name" class="textForm" placeholder="example : 황정민"></td>
          </tr>

          <tr>
            <th>생년월일</th>
            <td style="padding: 5px;"><input type="date" id="user_birth" v-model="state.form.user_birth" class="textForm">
              
              <input type="radio" name="gender" value="1" id="male" v-model="state.form.user_gender" style="margin-left: 10px;">
              <label for="male"> 남 </label>
              <input type="radio" name="gender" value="2" id="female" v-model="state.form.user_gender" style="margin-left: 10px;">
              <label for="female"> 여 </label>
            </td>
          </tr>


          <tr>
          <th><label for="user_tel"> 연락처</label></th>
          <td style="padding: 5px;"><input type="tel" id="user_tel" class="textForm" v-model="state.form.user_tel1" style="width: 150px;"> -
          <input type="tel" id="user_tel" class="textForm" v-model="state.form.user_tel2" style="width: 150px;"> -
          <input type="tel" id="user_tel" class="textForm" v-model="state.form.user_tel3" style="width: 150px;">
          </td>
        </tr>

          <tr>
            <th><label for="user_add"> 이메일</label></th>
            <td style="padding: 5px;"><input type="email" v-model="state.form.user_email" id="user_email" class="textForm" placeholder="example : dodo@naver.com"></td>
          </tr>

          <tr>
            <th><label for="user_nickname"> 닉네임</label></th>
            <td style="padding: 5px;"><input type="text" v-model="state.form.user_nickname" id="user_nickname" class="textForm" placeholder="example : I am king"></td>
          </tr>
        </table>

        <div class="SignUpButton">
          <div class="q-pa-md q-gutter-md">
            <q-btn @click="submit()" style="color: white; background-color: #F79a38; width: 300px;
          height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 500;
           font-family: 'Noto Sans KR', sans-serif;">가입하기</div>
            </q-btn>
          </div>
        </div>
      </div>

    </form>
  </div>
  <Footer/>

</template>


<script>

import Header from '../components/Home/Header.vue';
import Footer from '../components/Home/Footer.vue';
import {reactive, render} from 'vue';
import axios from 'axios';
// import {ValidationProvider} from 'vee-validate'

export default {
  components: { Header, Footer },
  setup(){
    const state = reactive({
      data : [],
      form : {
        user_id : "",
        user_pwd : "",
        user_cpwd : "",
        user_name : "",
        user_birth : "",
        user_gender : "",
        user_tel1 : "",
        user_tel2 : "",
        user_tel3 : "",
        user_email : "",
        user_nickname : ""
      },
    });
    const check_id = () => {

    }
    const submit = () => {
        const args = {
        user_id : state.form.user_id,
        user_pwd : state.form.user_pwd,
        user_name : state.form.user_name,
        user_birth : state.form.user_birth,
        user_gender : state.form.user_gender,
        user_tel1 : state.form.user_tel1,
        user_tel2 : state.form.user_tel2,
        user_tel3 : state.form.user_tel3,
        user_email : state.form.user_email,
        user_nickname : state.form.user_nickname
      };

      axios
      .post("/api/signup", args)
      .then((res) => {
      state.data = res.data;
      alert(`회원가입을 축하드립니다`)
      })
      //redirect logic
      .catch(()=> {
        return alert("회원가입에 실패하셧습니다.")
      })
      }
    return {state,submit,check_id}
  }
}
</script>




<style>
.SignUpTitle {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
}

.SignUpJointable {

  margin: 0 auto;
  font-size: 28px;
  font-family: 'Noto Sans KR', sans-serif;
}

.textForm {
  width: 400px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;
}

tr {
  font-size: 17px;
}
</style>