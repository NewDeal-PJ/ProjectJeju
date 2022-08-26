<template>
<header>
    <div class="background">
    <div class="menuWrap">
      <div class="title"> JEJU Olle? </div>
      <ul class="menu">
        <a href="http://localhost:9000" style="color: white;"> Home</a>
        <a href="http://localhost:9000/#/shop"  style="color: white;"> Shop</a>
        <a href="http://localhost:9000/#/cart1"  style="color: white;"> Cart</a>
        <a href="http://localhost:9000/#/mypage" style="color: white;"> MyPage</a>
        <a href="http://localhost:9000/#/login" style="color: white;"> LogIn</a>
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
    .background {
    height: 250px;
    overflow: hidden;
    margin:0;
    background-image: url("https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 93%;
    }
    .title {
        position: absolute;
        width: 329px;
        height: 94px;
        margin-top: 100px;
        margin-left: 30px;


        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        line-height: 62px;

        color: #FFFFFF;
    }
    .menu{
      float: right;
      margin-top: 50px;
      margin-right: 30px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 25px;
      word-spacing: 20px;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
    }
    a { text-decoration:none }
</style>
