<template>
<Header></Header>
    <div class="likebox1">
        <p> like </p>
        <div class="likebox2">           
        </div>
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
.likebox1{
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 70px;
  font-family: 'Rubik', sans-serif;
  background-color: aqua;
}

.likebox2{
    background-color: yellow;
    margin: 0 auto;
    border: 3px solid black;
    border-radius: 5px;
    padding: 20px;
    width: 80%;
}
</style>
