<template>
    <Header></Header>
        <div class="customerService1">
            <p> Q&A </p>
            <div class="customerService2">    
                <div class="likeInfoComment">
                    <div class="date" style="display: flex; gap: 10px;">
                    <p> 닉네임</p>
                    <span>⭐⭐⭐⭐⭐</span>
                    <span> yyyy.mm.dd</span>
                    </div>
                </div>
                <div class= "customerServiceQuestion">
                            <span> 여기에 질문을 작성해주세요</span>
                        </div> 
            </div>
            <div style="display: flex; gap:70%">
                 
                    </div>
        </div>
    
 <Footer></Footer>
    </template>
    
    <script>
    import Header from 'src/components/Home/Header.vue';
import Footer from '../components/Home/Footer.vue';

    
    export default{
        components: { Header, Footer }
    }
    </script>
    
    
    <style>
    .customerService1{
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      margin-top: 70px;
      font-family: 'Rubik', sans-serif;
      margin-bottom: 70px;
    }
    
    .customerService2{
    margin: 0 auto;
    border-top: 5px solid black;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 60%;
    }
    
    .customerServiceQuestion{
       border-bottom: 2px solid  black;
        width: 100%;
        padding: 1% 1%;
         margin: 0 auto;
         font-size: 15px;
        }


    </style>
    