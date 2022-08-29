<template>
  <Header></Header>
  <div id="join-wrap">
  
    <form action="aaa.html" method="get">
      <!-- 실제사용할때 보낼 페이지url 넣기  -->
      <div style="margin: 70px; border-radius: 10px;">
        <p class="userInfoTitle" > User Information </p>
        <table class="userInfoJointable">
  
          <tr>
            <th class="userInfoFirst"><label for="user_id"> 아이디</label></th>
            <td style="padding: 10px;"><input type="text" id="user_id" class="textForm" required autofocus>
            <input type="button" value="중복확인" class="btn"
            style="  background-color: #F79a38;
            color: white;
            width: 70px;
            height: 40px;
            border: 0;
            font-size: 15px;
            border-radius: 5px;
            margin-left: 10px;
             font-family: 'Noto Sans KR', sans-serif;">
            </td>
          </tr>
  
          <tr>
            <th><label for="user_pwd"> 비밀번호</label></th>
            <td style="padding: 10px;"><input type="password" id="user_pwd" class="textForm"></td>
          </tr>
  
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
  
        <div class="userInfoButton" >
          <div class="q-pa-md q-gutter-md">
            <q-btn style="color: white; background-color: #F79a38; width: 300px;
            height: 40px; margin: 0 auto; display: block; " >
            <div style="font-size: 18px; font-weight: 500;
             font-family: 'Noto Sans KR', sans-serif;">수정하기</div>
            </q-btn>
          </div>
        </div>
      </div>
  
    </form>
  </div>
  <Footer></Footer>
  </template>
  
  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  export default{
      components: { Header, Footer }
  }
  </script>
  
  <style>
  .userInfoTitle{
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Rubik', sans-serif;
  }
  
  .userInfoJointable{
  
    margin: 0 auto;
    font-size: 28px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  .textForm{
    width: 400px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  tr{
    font-size: 17px;
  }
  
  </style>
  