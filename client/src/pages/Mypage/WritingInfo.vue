<template>
  <Header></Header>
  <div class="writingInfoBox1">
    <p> My Comment </p>
    <div>
      <div style=" margin:0 auto; max-width: 80%;">

        <q-markup-table :separator="separator" flat>
          <thead>
            <tr>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> 작성한 글 </th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 수정</th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;"
                v-for="dataItem in jsdata" :key="dataItem.NICKNAME" :name="dataItem.NICKNAME">
                <div>
                  <div style="display: flex; font-size: 15px;">
                    <p> {{ dataItem.NICKNAME }} </p>
                    <p> {{ dataItem.STARRATE }} </p>
                    <p> {{ dataItem.REGDATE }} </p>
                  </div>
                  <div class="cat">
                    <img
                      src="https://velog.velcdn.com/images/kimjyunny_dev/post/370f3dab-9470-4918-a11f-3f05348dcf4b/image.jpeg">
                  </div>
                  <div class="reviewDescription" style="font-size: 15px;">
                    <p> {{ dataItem.CONTENT }} </p>
                  </div>
                </div>
              </div>

              <td class="text-middle"> <span class="ModifyContainer" v-on:click="ModifyComment">
                  <i class="fas fa-pencil"></i> </span> </td>

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
import axios from "axios";
axios.defaults.withCredentials = true;
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import { ref } from 'vue'


export default {
  setup() {
    const submitResult = ref([])
    return {
      slide: ref(1),
      fullscreen: ref(false),

      quality: ref(3),
      submitResult,
      onSubmit(evt) {
        const formData = new FormData(evt.target)
        const data = []
        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value
          })
        }
        submitResult.value = data
      }
    }
  },
  data() {
    return {
      jsdata: [],
    }
  },
  mounted() {
    this.getReplyMypage()
  },
  methods: {
    getReplyMypage() {
      console.log(this.$route.query.auth)
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/writinginfo',
        data :{
          nickname : this.$route.query.auth,
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then((Response) => {
        
        for (let i = 0; i < Response.data.length; i++) {
          this.jsdata.push({
            RNO: Response.data[i].RNO,
            NICKNAME: Response.data[i].NICKNAME,
            REGDATE: Response.data[i].REGDATE.slice(1, -14),
            STOREID: Response.data[i].STOREID,
            CONTENT: Response.data[i].CONTENT,
            STARRATE: Math.round(Response.data[i].STARRATE * 100) / 100,
          })
        }
        console.log(Response.data[0])
        }).catch(function (error) {
          console.log(error.toJSON())
        })
    },
  },
  components: { Header, Footer }
};
</script>


  <style>
  .writingInfoBox1 {
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    margin-top: 70px;
    font-family: 'Rubik', sans-serif;
    margin-bottom: 70px;
  }
  
  .likeBox2 {
    margin: 0 auto;
    padding-bottom: 20px;
    width: 70%;
  }
  
  .likeBox {
    padding: 1% 1%;
  }
  
  .likeBoxTable {
    width: 100%;
    font-size: 16px;
  }
  
  .likeDetailBoxTable {
    font-size: 16px;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 20px 0px;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
  
  }
  
  .cat {
    height: 300px;
    width: 300px;
    margin: 0 auto;
  }
  </style>
