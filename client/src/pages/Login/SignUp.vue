<template>
  <Header></Header>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px"></div>
    <!-- 실제사용할때 보낼 페이지url 넣기  -->
    <div style="margin: 70px; border-radius: 10px;">
      <p class="SignUpTitle"> Sign up </p>
      <form action="http://localhost:9000/#/" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <table class="SignUpJointable">

          <tr>
            <th class="SignUpFirst"><label for="user_id"> 아이디</label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 310px;">
                <q-input ref="IDRef" outlined v-model="ID" :dense="dense" id="user_id" lazy-rules :rules="IDRules"
                  required autofocus />
                <!-- <input type="text" id="user_id" class="textForm" required autofocus> -->
              </div>
              <div class="CheckButton">
                <div class="q-pa-md q-gutter-md form-group">
                  <q-btn @click="check_id()" style="color: white; background-color: #FF9800; width: 85px;
                height: 30px; margin: 0 auto; display: block; margin-left: 5px;">
                    <div style="font-size: 14px; font-weight: 500;
                font-family: 'Noto Sans KR', sans-serif;">중복확인</div>
                  </q-btn>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th><label for="user_pwd"> 비밀번호</label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="PWDRef" type="password" outlined v-model="PWD" :dense="dense" id="user_pwd" lazy-rules
                  :rules="PWDRules" required />
              </div>
            </td>
          </tr>
          <tr>
            <th><label for="user_pwdChk">비밀번호 확인 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="PWDChkRef" type="password" outlined v-model="PWDChk" :dense="dense" id="user_pwdChk" lazy-rules
                  :rules="PWDChkRules" required />
              </div>
            </td>
          </tr>
          <tr>
            <th><label for="user_name">이름 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div  class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="NameRef" outlined v-model="Name" :dense="dense" id="user_name" lazy-rules
                  :rules="NameRules" required />
              </div>
            </td>
          </tr>
          <tr>
            <th><label for="date">생년월일 (6자리) </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group" style="width: 400px;">
                <q-btn-toggle v-model= gender no-caps toggle-color="orange" color="white" text-color="black"
                  :options="[
                    { label: '남', value: '1' },
                    { label: '여', value: '2' }
                  ]" style="width: 90px; height: 30px; float: right;" />
                <q-input ref="dateRef" outlined v-model="date" :dense="dense" id="date" lazy-rules :rules="dateRules" required/>
              </div>
            </td>
          </tr>

          <tr>
            <th><label for="user_tel">연락처 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div  class="q-gutter-md form-group"
                style="width: 150px;">
                <q-input ref="TelRef" outlined v-model="Tel" :dense="dense" id="user_tel" lazy-rules :rules="TelRules"
                  style="width: 80%; float: left;"  required/>
              </div>
              <div  class="q-gutter-md form-group"
                style="width: 150px;">
                <q-input ref="TelRef2" outlined v-model="Tel2" :dense="dense" id="user_tel2" lazy-rules
                  :rules="TelRules2" style="width: 80%; float: left;" required/>
              </div>
              <div class="q-gutter-md form-group"
                style="width: 150px;">
                <q-input ref="TelRef3" outlined v-model="Tel3" :dense="dense" id="user_tel3" lazy-rules
                  :rules="TelRules3" style="width: 80%; float: left;" required/>
              </div>
            </td>
          </tr>

          <tr>
            <th><label for="user_email">이메일 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="emailRef" outlined v-model="email" :dense="dense" id="user_email" lazy-rules
                  :rules="emailRules" required />
              </div>
            </td>
          </tr>

          <tr>
            <th><label for="user_nickname">닉네임 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="NicknameRef" outlined v-model="Nickname" :dense="dense" id="user_nickname" lazy-rules
                  :rules="NicknameRules" required/>
              </div>
            </td>
          </tr>

        </table>
        <br>
        <div class="SignUpButton">
          <div class="q-pa-md q-gutter-md form-group">
            <q-btn @click="onsubmit()" style="color: white; background-color: #FF9800; width: 300px;
          height: 40px; margin: 0 auto; display: block; ">
            <div style="font-size: 18px; font-weight: 500;
           font-family: 'Noto Sans KR', sans-serif;">가입하기</div>
            </q-btn>
          </div>
        </div>
      </form>
      </div>

  </div>
  <Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import {reactive} from 'vue';
import axios from 'axios';
export default {
  components: { Header, Footer },
  setup() {
    const $q = useQuasar();
    const ID = ref(null)
    const IDRef = ref(null)
    const PWD = ref(null)
    const PWDRef = ref(null)
    const PWDChk = ref(null)
    const PWDChkRef = ref(null)
    const Name = ref(null)
    const NameRef = ref(null)
    const gender = ref(null)
    const date = ref(null)
    const dateRef = ref(null)
    const Tel = ref(null)
    const TelRef = ref(null)
    const Tel2 = ref(null)
    const TelRef2 = ref(null)
    const Tel3 = ref(null)
    const TelRef3 = ref(null)
    const Nickname = ref(null)
    const NicknameRef = ref(null)
    const email = ref(null)
    const emailRef = ref(null)
    const state = reactive({
      data : [],
    });
    return {
      gender,
      state,
      dense: ref(true),
      ID,
      IDRef,
      IDRules: [
        val => (val && val.length > 0) || 'ID를 입력해주세요.',
        val => (val && val.length >= 4) || 'ID는 4자 이상이어야 합니다.',
        val => (val && 20 >= val.length) || 'ID는 20자 이하여야 합니다.',
        val => (/^[a-zA-Z0-9]*$/.test(val)) || 'ID는 영문, 숫자만 가능합니다. 확인해주세요.',
      ],
      PWD,
      PWDRef,
      PWDRules: [
        val => (val && val.length > 0) || '비밀번호를 입력해주세요.',
        val => (val && val.length >= 8) || '비밀번호는 8자리 이상이어야 합니다.',
        val => (val && 20 >= val.length) || '비밀번호는 20자리 이하여야 합니다.',
        val => (/[A-z]/.test(val)) || '영문자를 포함해주세요.',
        val => (/[`"'\\/~!@#$%^&*()_+|<>?;:[{}=,.-/]/.test(val)) || '특수문자를 포함해주세요.',
        val => (!(/\s/.test(val))) || '비밀번호는 공백이 들어갈 수 없습니다.',
        val => (!(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(val))) || '비밀번호는 영문, 숫자, 특수문자만 가능합니다.',
      ],
      PWDChk,
      PWDChkRef,
      PWDChkRules: [
        val => (val && val.length > 0) || '비밀번호를 확인해주세요.',
        val => (val == PWD.value) || '비밀번호가 일치하지 않습니다.',
      ],
      Name,
      NameRef,
      NameRules: [
        val => (val && val.length > 0) || '이름을 입력해주세요.',
        val => (!(/\s/.test(val))) || '이름은 공백이 들어갈 수 없습니다.',
        val => (!(/[`"'\\/~!@#$%^&*()_+|<>?;:[{}=,.-/]/.test(val))) || '이름은 한글, 영문만 가능합니다.',
        val => (!(/^[0-9]*$/.test(val))) || '이름은 한글, 영문만 가능합니다.',
      ],
      date,
      dateRef,
      dateRules: [
        val => (val && val.length > 0) || '생년월일 6자리를 입력해주세요.',
        val => (val && val.length == 6) || '생년월일은 6자리만 입력해주세요',
        val => (!(/\s/.test(val))) || '공백을 제거해주세요.',
        val => (/([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/.test(val)) || '생년월일을 정확히 입력해주세요',
      ],
      Tel,
      TelRef,
      TelRules: [
        val => (val && val.length > 0) || '전화번호 첫째자리',
        val => (val && val.length <= 3) || '전화번호 첫째자리',
        val => (/01[01]/.test(val)) || '전화번호 첫째자리',
      ],
      Tel2,
      TelRef2,
      TelRules2: [
        val => (val && val.length > 0) || '전화번호 둘째자리',
        val => (val && val.length <= 4) || '전화번호 둘째자리',
        val => (/^[0-9]{3,4}$/.test(val)) || '전화번호 둘째자리',
      ],
      Tel3,
      TelRef3,
      TelRules3: [
        val => (val && val.length > 0) || '전화번호 셋째자리',
        val => (val && val.length <= 4) || '전화번호 셋째자리',
        val => (/^[0-9]{3,4}$/.test(val)) || '전화번호 셋째자리',
      ],
      Nickname,
      NicknameRef,
      NicknameRules: [
        val => (val && val.length > 0) || '닉네임을 입력해주세요.',
        val => (val && 20 >= val.length) || '닉네임은 20자 이하여야 합니다.',
        val => (!(/[`"'\\/~!@#$%^&*()_+|<>?;:[{}=,.-/]/.test(val))) || '특수문자는 사용 불가능합니다',
        val => (!(/\s/.test(val))) || '공백은 들어갈 수 없습니다.',
      ],
      email,
      emailRef,
      emailRules: [
        val => (val && val.length > 0) || '이메일을 입력해주세요.',
        val => (/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(val)) || '이메일 형식이 올바르지 않습니다.',
      ],
      onsubmit() {
        IDRef.value.validate()
        PWDRef.value.validate()
        PWDChkRef.value.validate()
        NameRef.value.validate()
        dateRef.value.validate()
        TelRef.value.validate()
        TelRef2.value.validate()
        TelRef3.value.validate()
        NicknameRef.value.validate()
        emailRef.value.validate()

        const args = {
        user_id : ID,
        user_pwd : PWD,
        user_name : Name,
        user_birth : date,
        user_gender : gender,
        user_tel1 : Tel,
        user_tel2 : Tel2,
        user_tel3 : Tel3,
        user_email : email,
        user_nickname : Nickname
      };
        if (IDRef.value.hasError || PWDRef.value.hasError || PWDChkRef.value.hasError ||NameRef.value.hasError||dateRef.value.hasError||TelRef.value.hasError||TelRef2.value.hasError||TelRef3.value.hasError||NicknameRef.value.hasError||emailRef.value.hasError) {
          $q.notify({
            color: 'negative',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
      axios
      .post("/api/signup", args)
      .then((res) => {
      state.data = res.data;
      window.location.href = 'http://localhost:9000/#/api/login';
      $q.notify({
            icon: 'done',
            color: 'orange-10',
            message: `환영합니다 `+Nickname.value+`  회원님`
          })
      })
      //redirect logic
      .catch(()=> {
        alert("회원가입에 실패하셧습니다.")
      })
        }
      },

      onReset() {
        ID.value = null
        PWD.value = null
        PWDChk.value = null

        IDRef.value.resetValidation()
        PWDRef.value.resetValidation()
        PWDChkRef.value.resetValidation()
      },
      check_id() {
        const args = {
        user_id : ID
      };
      axios
      .post("/api/check_id", args)
      .then((res) => {
      state.data = res.data;
      if(res.data.result === 1){
        alert('중복된 아이디가 존재합니다.')
        this.$refs.id.focus();
        return false;
      }
      if(res.data.result === 0){
        alert('사용가능한 아이디입니다')
        this.$refs.pw.focus();
      }    

      
      })
      //redirect logic
      }
    }
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
