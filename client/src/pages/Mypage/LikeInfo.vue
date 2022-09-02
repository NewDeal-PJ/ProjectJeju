<template>
  <Header></Header>
      <div class="likeBox1">
          <p> Like </p>
          <div>
    <div  style=" margin:0 auto; max-width: 80%;">

      <q-markup-table :separator="separator" flat >
        <thead>
          <tr>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> 작성한 글 </th>
            <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;">
                        <div>
                            <div style="display: flex; font-size: 15px;">
                              <span> 닉네임 </span>
                              <span> ⭐️⭐️⭐️⭐️⭐️</span>
                              <span> YYYY.MM.DD</span>
                            </div>
                            <div class="cat" >
                              <img src="https://velog.velcdn.com/images/kimjyunny_dev/post/370f3dab-9470-4918-a11f-3f05348dcf4b/image.jpeg" >
                            </div>
                            <div class="reviewDescription" style="font-size: 15px;">
                              살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~ 살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~
                            </div>
                        </div>
                      </div>

            <td class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </td>
          </tr>
        </tbody>
      </q-markup-table>
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
  width: 70%;
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

  img{
  max-width:100%;
  max-height:100%;

}

.cat {
 height: 300px;
 width: 300px;
 margin: 0 auto;
}
  </style>
