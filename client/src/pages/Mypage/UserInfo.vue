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
            <th><label for="user_tel">연락처 </label></th>
            <td style="padding-top: 20px; display: flex;">
              <div class="q-gutter-md form-group" style="width: 150px;">
                <q-input ref="TelRef" outlined v-model="Tel" :dense="dense" id="user_tel" lazy-rules :rules="TelRules"
                  style="width: 80%; float: left;" required />
              </div>
              <div class="q-gutter-md form-group" style="width: 150px;">
                <q-input ref="TelRef2" outlined v-model="Tel2" :dense="dense" id="user_tel2" lazy-rules
                  :rules="TelRules2" style="width: 80%; float: left;" required />
              </div>
              <div class="q-gutter-md form-group" style="width: 150px;">
                <q-input ref="TelRef3" outlined v-model="Tel3" :dense="dense" id="user_tel3" lazy-rules
                  :rules="TelRules3" style="width: 80%; float: left;" required />
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


          <div class="q-pa-md q-gutter-sm">
             <q-btn label="탈퇴하기" @click="prompt = true" style="color: black; background-color: #E7E7E7; width: 300px; height: 40px; margin: 0 auto; display: block; font-size: 18px; font-weight: 200;
            font-family: 'Noto Sans KR', sans-serif;" />

              <q-dialog v-model="prompt" persistent>
               <q-card style="min-width: 350px">
                <q-card-section>
                 <div class="text-h6"> 탈퇴 전 확인하세요!</div>
                <div> <p>탈퇴하시면 이용 중인 서비스는 삭제되며, 모든 데이터는 복구가 불가능합니다.
              <br> 안내사항을 모두 확인하였으며, 탈퇴를 원하시면 "동의합니다."라고 입력해 주십시오.</p>
            </div>
                </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="취소" v-close-popup style="color:red;"/>
          <q-btn flat label="확인" v-close-popup />
        </q-card-actions>
               </q-card>
              </q-dialog>
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


export default {
  components: { Header, Footer },
  setup() {
    const $q = useQuasar();
    const PWD = ref(null)
    const PWDRef = ref(null)
    const PWDChk = ref(null)
    const PWDChkRef = ref(null)
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
      prompt: ref(false),
      dense: ref(true),
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
        PWDRef.value.validate()
        PWDChkRef.value.validate()
        dateRef.value.validate()
        TelRef.value.validate()
        TelRef2.value.validate()
        TelRef3.value.validate()
        NicknameRef.value.validate()
        emailRef.value.validate()

        if (PWDRef.value.hasError || PWDChkRef.value.hasError ||TelRef.value.hasError||TelRef2.value.hasError||TelRef3.value.hasError||NicknameRef.value.hasError||emailRef.value.hasError) {
          $q.notify({
            color: 'negative',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            icon: 'done',
            color: 'orange-10',
            message: Nickname.value +"님"+'수정이 완료되었습니다.'
          })
        }
      },

      onReset() {
        PWD.value = null
        PWDChk.value = null

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
