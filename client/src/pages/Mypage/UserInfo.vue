<template>
  <Header></Header>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px"></div>
    <!-- 실제사용할때 보낼 페이지url 넣기  -->
    <div style="margin: 70px; border-radius: 10px;">
      <p class="UserInformationTitle"> Modifying Information </p>
      <form action="http://localhost:9000/#/" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <table class="UserInformationJointable">


          <tr>
            <th><label for="user_pwd"> 새비밀번호</label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="PWDRef" outlined v-model="PWD" :dense="dense" id="user_pwd" lazy-rules
                  :rules="PWDRules" required />
              </div>
            </td>
          </tr>
          <tr>
            <th><label for="user_pwdChk">비밀번호 확인 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group"
                style="width: 400px;">
                <q-input ref="PWDChkRef" outlined v-model="PWDChk" :dense="dense" id="user_pwdChk" lazy-rules
                  :rules="PWDChkRules" required />
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
        <div style="padding: 10px;">
          <div class="ModifyUserButton">
            <div class="q-pa-md q-gutter-md form-group">
              <q-btn type="submit" style="color: white; background-color: #FF9800; width: 300px;
            height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;">수정하기</div>
              </q-btn>
            </div>
          </div>


          <div class="DeleteUserButton">
            <div class="q-pa-md q-gutter-md form-group">
              <q-btn @click="confirm" style="color: black; background-color: #E7E7E7; width: 300px;
            height: 40px; margin: 0 auto; display: block; ">
              <div style="font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;">탈퇴하기</div>
              </q-btn>
            </div>
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




// 탈퇴하기 버튼
// export default {
//   setup () {
//     const $q = useQuasar()
//     function confirm () {
//       $q.dialog({
//         title: 'Confirm',
//         message: '탈퇴하시겠습니까?',
//         cancel: true,
//         persistent: true
//       }).onOk(() => {
//         // console.log('>>>> OK')
//       }).onOk(() => {
//         // console.log('>>>> second OK catcher')
//       }).onCancel(() => {
//         // console.log('>>>> Cancel')
//       }).onDismiss(() => {
//         // console.log('I am triggered on both OK and Cancel')
//       })
//     }
//     return { confirm}
//   }
// }



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
    return {
      model: ref('male'),
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

        if (IDRef.value.hasError || PWDRef.value.hasError || PWDChkRef.value.hasError ||NameRef.value.hasError||dateRef.value.hasError||TelRef.value.hasError||TelRef2.value.hasError||TelRef3.value.hasError||NicknameRef.value.hasError||emailRef.value.hasError) {
          $q.notify({
            color: 'negative',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            icon: 'done',
            color: 'orange-10',
            message: '환영합니다 '+Nickname+"님"
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
.UserInformationTitle {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
}

.UserInformationJointable {

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
