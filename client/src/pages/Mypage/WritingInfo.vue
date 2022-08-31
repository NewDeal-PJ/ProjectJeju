<template>
    <Header></Header>
        <div class="writingBox1">
            <p> My Comment </p>
            <div class="writingBox2">
              <div class="writingBox">
                <table class="writingBoxTable">
                  <tr style="background-color: #E7E7E7;">
                    <th> 작성한 글 </th>
                    <th> 수정 </th>
                    <th> 삭제 </th>
                  </tr>
                    <td>
                      <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;">
                        <div>
                            <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px;">
                              닉네임
                            </div>
                            <div style="display: flex;">
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
                    </td>

                    <td> <span class="modifyContainer" style="color: black;" v-on:click="ModifyComment">
                         <i class="fas fa-pencil" aria-hidden="true"></i> </span></td>
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
    padding-bottom: 20px;
    width: 70%;
    }

    .writingBox{
        padding: 1% 1%;
        }

    .writingBoxTable{
     width: 100%; font-size: 16px;
    }

    .writingDetailBoxTable{
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
