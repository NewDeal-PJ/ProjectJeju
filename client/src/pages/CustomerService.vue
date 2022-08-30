<template>
    <Header></Header>
        <div class="customerService1">
            <p> Q&A </p>
            <div class="customerService2">
              <div class="customerServiceBox">
                <table style="width: 100%; font-size: 16px;">
                  <tr style="background-color: #E7E7E7;">
                    <th> 분류 </th>
                    <th> 제목 </th>
                  </tr>
                    <td> 배송</td>
                    <td> 언제 배송예정일까요?</td>
                </table>
              </div>
            </div>
            <div class="LoginButton" >
            <div class="q-pa-md q-gutter-md">
              <q-btn style="color: white; background-color: #F79a38; width: 150px; margin: 0 auto; display: block; padding: 10px; margin-top: 10px;" >
                <div style="font-size: 15px; font-weight: 900;">글쓰기</div>
              </q-btn>
           </div>
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
    /* border-top: 5px solid black;
    border-bottom: 5px solid black; */
    padding-bottom: 20px;
    width: 60%;
    }

    </style>
