<template>
  <Header></Header>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px"></div>
    <form action="aaa.html" method="get">
      <!-- 실제사용할때 보낼 페이지url 넣기  -->
      <div style="margin: 70px; border-radius: 10px;">
        <p class="SignUpTitle"> Sign up </p>
        <table class="SignUpJointable">

          <tr>
            <th class="SignUpFirst"><label for="user_id"> 아이디</label></th>
            <td style="padding-top: 20px; display: flex;">
              <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md" style="width: 100%;">
                <q-input ref="IDRef" outlined v-model="ID" :dense="dense" id="user_id"  lazy-rules
                  :rules="IDRules" required autofocus/>
                <!-- <input type="text" id="user_id" class="textForm" required autofocus> -->
              </form>
              <div class="CheckButton">
                <div class="q-pa-md q-gutter-md">
                  <q-btn style="color: white; background-color: #F79a38; width: 90px;
                height: 30px; margin: 0 auto; display: block; ">
                    <div style="font-size: 15px; font-weight: 500;
                font-family: 'Noto Sans KR', sans-serif;">중복확인</div>
                  </q-btn>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th><label for="user_pwd"> 비밀번호</label></th>
            <td style="padding-top: 20px; display: flex;">
              <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md" style="width: 400px;">
                <q-input ref="PWDRef" outlined v-model="PWD" :dense="dense" id="user_pwd"  lazy-rules
                  :rules="PWDRules" />
              </form>
            </td>
          </tr>
          <tr>
            <th><label for="user_pwdChk">비밀번호 확인 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md" style="width: 400px;">
                <q-input ref="PWDChkRef" outlined v-model="PWDChk" :dense="dense" id="user_pwdChk"  lazy-rules
                  :rules="PWDChkRules" />
              </form>
            </td>
          </tr>

          <!-- <tr>
          <td style="padding: 10px;"><input type="password" id="user_pwd" class="textForm"></td>
        </tr> -->
          <!-- <tr>
          <th><label for="inputInvalid"> 비밀번호 재확인</label></th>
          <td><input type="password" id="inputInvalid" class="form-control is-invalid"><div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div></td>
        </tr> -->

          <tr>
            <th><label for="user_name"> 이름</label></th>
            <td style="padding: 5px;"><input type="text" id="user_name" class="textForm"></td>
          </tr>

          <tr>
            <th>생년월일</th>
            <td style="padding: 5px;"><input type="date" class="textForm">
              <input type="radio" name="gender" id="male" style="margin-left: 10px;">
              <label for="male"> 남</label>
              <input type="radio" name="gender" id="female" style="margin-left: 10px;">
              <label for="female">여</label>
            </td>
          </tr>


          <tr>
            <th><label for="user_tel"> 연락처</label></th>
            <td style="padding: 5px;"><input type="tel" id="user_tel" class="textForm" style="width: 150px;"> -
              <input type="tel" id="user_tel" class="textForm" style="width: 150px;"> -
              <input type="tel" id="user_tel" class="textForm" style="width: 150px;">
            </td>
          </tr>

          <tr>
            <th><label for="user_add"> 이메일</label></th>
            <td style="padding: 5px;"><input type="email" id="user_add" class="textForm"></td>
          </tr>

          <tr>
            <th><label for="user_nickname"> 닉네임</label></th>
            <td style="padding: 5px;"><input type="text" id="user_nickname" class="textForm"></td>
          </tr>
        </table>

        <div class="SignUpButton">
          <div class="q-pa-md q-gutter-md">
            <q-btn style="color: white; background-color: #F79a38; width: 300px;
          height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 500;
           font-family: 'Noto Sans KR', sans-serif;">가입하기</div>
            </q-btn>
          </div>
        </div>
      </div>

    </form>
  </div>
  <Footer></Footer>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
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
    return {
      ID,
      IDRef,
      IDRules: [
        val => (val && val.length > 0) || 'ID를 입력하세요.'
      ],
      PWD,
      PWDRef,
      PWDRules: [
        val => (val && val.length > 0) || '비밀번호를 입력하세요.',
        val => (val && val.length > 8) || '비밀번호는 8자리 이상이어야 합니다.',
        val => (val && 20>val.length) || '비밀번호는 20자리 이하여야 합니다.',
        val => (/[A-z]/.test(val)) || '영문자를 포함해주세요.',
        val => (/["'/~!@#$%^&*()_+|<>?;:[{}=,.-]/.test(val)) || '특수문자를 포함해주세요.',
      ],
      PWDChk,
      PWDChkRef,
      PWDChkRules: [
        val => (val && val.length > 0) || '비밀번호를 확인해주세요.',
      ],
      dense: ref(true),
      onsubmit() {
        IDRef.value.validate()
        PWDRef.value.validate()
        PWDChkRef.value.validate()

        if (IDRef.value.hasError || PWDRef.value.hasError) {
          // form has error
        }
        // else if (accept.value !== true) {
        //   $q.notify({
        //     color: 'negative',
        //     message: 'You need to accept the license and terms first'
        //   })
        // }
        else {
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Submitted'
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
