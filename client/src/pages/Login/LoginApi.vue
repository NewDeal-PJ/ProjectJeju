<template>
<!-- 로그인 아이콘 -->
<div class="logo" >
            <div class="kakao">
            <button @click="loginWithKakao">
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
export default{
  name: 'LoginPage',
  methods: {
    kakaoInit() { 
        Kakao.init('81423af9935f23cdd7cda810e21a0837')
        Kakao.isInitialized()
      },
    async loginWithKakao (){
      await Kakao.Auth.authorize({
        redirectUri: `${window.location.origin}/kakao-callback`
      })
    }
  },
  mounted() {  
    this.kakaoInit()
  }
}

</script>

<style>
.logo{
  display: block;
  text-align: center;
  padding: 20px;
}
.kakao{
  display:inline-block;zoom:1;
  padding-right: 50px;
}
.google{
  display:inline-block;zoom:1;
}

</style>