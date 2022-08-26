<template>
<Header></Header>
<div class="box">
  <div class="text">
    기본정보
  </div>

</div>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
export default{
    components: { Header }
}</script>

<style>
.box {

box-sizing: border-box;

position: absolute;
width: 985px;
height: 500px;
left: 228px;
margin: 0 auto;
margin-top: 50px;
background: #FFFFFF;
border: 3px solid #D9D9D9;
border-radius: 10px;
}
</style>
