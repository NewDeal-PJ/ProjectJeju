<template>
  <Header></Header>
      <div class="likeDetailBox1">
          <p> Like </p>
          <div class="writingBox2">
            <div class="likeBox">
              <table style="width: 100%; font-size: 16px;">
                <tr style="background-color: #E7E7E7;">
                  <th> 작성한 글 </th>
                  <th> 삭제 </th>
                </tr>
                  <td>
                    <div class="likeDetail">
                      <div class="likeDetailBox">
                      <table style="font-size: 16px; width: 70%; margin: 0 auto; text-align: center; padding: 20px 0px;">
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
  .likeDetailBox1{
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    margin-top: 70px;
    font-family: 'Rubik', sans-serif;
    margin-bottom: 70px;
  }

  .likeDetailBox2{
  margin: 0 auto;
  padding-bottom: 20px;
  width: 60%;
  }

  .likeBox{
      width: 100%;
      padding: 1% 1%;
       margin: 0 auto;
       font-size: 15px;
      }


  </style>
