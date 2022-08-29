<template>
<Header></Header>
    <div class="likebox1">
        <p> 좋아요 </p>
        <div class="likebox2">           
        </div>
    </div>
</template>

<script>
import Header from 'src/components/Home/Header.vue';

export default{
    components: { Header }
}
</script>


<style>
.likebox1{
    background-color: aqua;
    text-align: center;
     font-family: 'Noto Sans KR', sans-serif;
     padding: 20px;
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
