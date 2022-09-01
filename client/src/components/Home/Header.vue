<template>
    <header>
        <div class="headBackground">
        <div class="menuWrap">
          <a href="http://localhost:9000" style="color: white;"> <div class="headTitle">  Jeju Olle?  </div></a>
          <ul class="headMenu">
            <a href="http://localhost:9000" style="color: white; padding-left: 3%;"> Home</a>
            <a href="http://localhost:9000/#/shop"  style="color: white; padding-left: 3%;"> Shop</a>
            <a href="http://localhost:9000/#/cart1"  style="color: white; padding-left: 3%;"> Cart</a>
            <a href="http://localhost:9000/#/mypage" style="color: white; padding-left: 3%;"> MyPage</a>
            <div v-if="state.account.name">
            <a href="http://localhost:9000/#/api/logout" @click='logout()' style="color: white; padding-left: 3%;"> 
            LogOut</a>
            </div>
            <div v-else>
            <a href="http://localhost:9000/#/api/login" style="color: white; padding-left: 3%;"> LogIn</a>
          </div>
            <a href="http://localhost:9000/#/CustomerService" style="color: white; padding-left: 3%;">Q&A</a>
          </ul>
        </div>
        </div>
        
    </header>
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
          // 로그아웃  method
          const logout = () => {
            axios.delete("/api/logout").then((res) => {
              alert("로그아웃이 완료되었습니다.")
              state.account.name = "";
            });
      
          }
      
          // 백엔드의 계정정보를 호출
          axios.get("/api/login").then((res) => {
            state.account = res.data;
          });
          return { state, submit, logout};
        }
      }
      </script>
    
    <style scoped>
        .headBackground {
        height: 130px;
        overflow: hidden;
        margin:0;
        background-image: url("https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 93%;
        }
        .headTitle {
            position: absolute;
            /* width: 329px;
            height: 94px; */
            padding-top: 40px;
            padding-left: 3%;
            font-family: 'Rubik', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 62px;
        }
        .headMenu{
          float: right;
          padding-top: 10px;
          padding-right: 9%;
          color: #FFFFFF;
          font-weight: bold;
          font-size: 20px;
          font-family: 'Rubik', sans-serif;
          font-style: normal;
          display: flex;
        }
        a { text-decoration:none }
    </style>
    