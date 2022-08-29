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
            <a href="http://localhost:9000/#/login" style="color: white; padding-left: 3%;"> LogIn</a>
            <a href="http://localhost:9000/#/CustomerService" style="color: white; padding-left: 3%;">Q&A</a> 
          </ul>
        </div>
        </div>
    </header>
    </template>
    
    <script>
        export default{
    
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
    