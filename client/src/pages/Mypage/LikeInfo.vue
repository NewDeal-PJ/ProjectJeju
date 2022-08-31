<template>
  <Header></Header>
      <div class="likeBox1">
          <p> Like </p>
          <div class="likeBox2">
            <div class="likeBox">
              <table class="likeBoxTable">
                <tr style="background-color: #E7E7E7;">
                  <th> 작성한 글 </th>
                  <th> 삭제 </th>
                </tr>
                  <td>
                    <div class="likeDetail">
                      <div class="likeDetailBox">
                      <table class="likeDetailBoxTable">
                        <td> 김제주</td>
                        <td> ⭐️⭐️⭐️⭐️⭐️</td>
                        <td> 음식이 너무 맛있고 사장님이 친절해요</td>
                        <td> YYYY.MM.DD</td>
                      </table>
                      </div>
                    </div>
                  </td>
                  <td> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
                       <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span></td>
              </table>
            </div>
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
  .likeBox1{
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    margin-top: 70px;
    font-family: 'Rubik', sans-serif;
    margin-bottom: 70px;
  }

  .likeBox2{
  margin: 0 auto;
  padding-bottom: 20px;
  width: 60%;
  }

  .likeBox{
      padding: 1% 1%;
      }

  .likeBoxTable{
   width: 100%; font-size: 16px;
  }

  .likeDetailBoxTable{
    font-size: 16px; width: 70%; margin: 0 auto; text-align: center; padding: 20px 0px;
  }
  </style>
