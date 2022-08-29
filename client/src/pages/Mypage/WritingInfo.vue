<template>
    <Header></Header>
        <div class="writingBox1">
            <p> My Comment </p>
            <div class="writingBox2">    
                <div class="writingInfoComment">
                    <div class="date" style="display: flex; gap: 10px;">
                    <p> 닉네임</p>
                    <span>⭐⭐⭐⭐⭐</span>
                    <span> yyyy.mm.dd</span>
                    </div>

                    <div style="display: flex; gap:70%">
                        <div class= "writingInfo">
                            <span> 고사리 육개장 맛있어요</span>
                        </div>
                        <div>
                            <span >쓰레기통 </span>
                        </div> 
                    </div>
                </div>

                <!-- <div class="writingInfoComment">
                    <div class="date" style="display: flex; gap: 10px;">
                    <p> 가나다라마바사</p>
                    <span>⭐⭐⭐⭐⭐</span>
                    <span> yyyy.mm.dd</span>
                    </div>

                    <div style="display: flex; gap:70%">
                        <div class= "writingInfo">
                            <span> 가나다라마바사아자차카타파하</span>
                        </div>
                        <div>
                            <span >쓰레기통 </span>
                        </div> 
                    </div>
                </div> -->
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
    .writingBox1{
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      margin-top: 70px;
      font-family: 'Rubik', sans-serif;
      margin-bottom: 70px;
    }
    
    .writingBox2{
    margin: 0 auto;
    border-top: 5px solid black;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 60%;
    }
    
    .writingInfoComment{
       border-bottom: 2px solid  black;
        width: 100%;
        padding: 1% 1%;
         margin: 0 auto;
         font-size: 15px;
        }


    </style>
    