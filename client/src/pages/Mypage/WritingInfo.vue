<template>
  <Header></Header>
  <body>
    <div class="writingInfoBox1">
      <p> My Comment </p>
      <div>
        <div style=" margin:0 auto; max-width: 80%;" v-if="jsdata" v-for="(dataItem, idx) in jsdata"
          @click="selectReply(dataItem.RNO, dataItem)" v-bind:class="{ selected: dataItem.RNO === targetIdx }">

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
                <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;">
                  <div>
                    <div style="display: flex; font-size: 15px;">
                      <span>🍽️　</span>
                      <a href="'#/detail/' + dataItem.STOREID">
                        <p> {{ dataItem.STOREID }} </p> 
                      </a>
                    </div>
                    <div style="display: flex; font-size: 15px;">
                      <span>🧡　</span>
                      <p> {{ dataItem.NICKNAME }} </p>
                    </div>
                    <div style="display: flex; font-size: 15px;">
                      <span>📅　</span>
                      <p> {{ dataItem.REGDATE }} </p>
                    </div>
                    <div style="display: flex; font-size: 15px;">
                      <span>⭐　</span>
                      <p> {{ dataItem.STARRATE }} / 5점</p>
                    </div>
                    <div class="reviewDescription" style="font-size: 15px; display: flex; ">
                      <span>🗣️　 </span>
                      <p> {{ dataItem.CONTENT }} </p>
                    </div>
                    <div class="cover">
                      <img :src="dataItem.imgurl" />
                    </div>
                  </div>
                </div>
                <td class="text-middle">
                  <div class="cursor-pointer">
                    <span class="ModifyContainer" v-on:click="ModifyComment">
                      <i class="fas fa-pencil"></i> </span>
                    <q-popup-edit v-model="editContent" :validate="val=>val.length>=1" v-slot="scope">
                      <q-input autofocus dense v-model="scope.value" :model-value="scope.value" hint="댓글 수정" :rules="[
                        val => scope.validate(val) || '한 글자 이상 적어주세요.'
                      ]">
                        <template v-slot:after>
                          <q-btn flat dense color="negative" icon="cancel" @click.stop.prevent="scope.cancel" />
                          <q-btn flat dense color="positive" icon="check_circle" @click.stop.prevent="scope.set"
                            :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"
                            @click="updateReply(dataItem.RNO,editContent)"
                            v-bind:class="{ selected: dataItem.RNO === targetIdx }" />
                        </template>
                      </q-input>
                    </q-popup-edit>
                  </div>
                </td>
                <td style=" margin-left: 1.5rem;" @click="deleteReply(dataItem.RNO,dataItem.uuid)"
                  v-bind:class="{ selected: dataItem.RNO === targetIdx }">
                  <div class="cursor-pointer">
                    <span class="removeContainer" style="color: red;">
                      <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>

    </div>
  </body>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import { useQuasar } from 'quasar';
import { useRoute } from "vue-router";
axios.defaults.withCredentials = true;
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import { ref, onMounted } from 'vue'


export default {
  setup() {
    const submitResult = ref([])
    const route = useRoute()
    const $q = useQuasar();
    onMounted(() =>
      axios.get("http://localhost:3000/api/login").then((res) => {
        const id = res.data.id
        if (id !== route.query.auth) {
          $q.notify({
            color: 'negative',
            position: 'center',
            message: '잘못된 접근입니다.'
          })
          window.location.href = '#/';
        }
      }));
    return {
      slide: ref(1),
      fullscreen: ref(false),
      editContent: ref([]),
      quality: ref(3),
      $q,
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
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/writinginfo',
        data: {
          nickname: this.$route.query.auth,
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then((Response) => {
        for (let i = 0; i < Response.data.length; i++) {
          if (Response.data[i].UUID) {
            const uuid = Response.data[i].UUID
            const path = Response.data[i].PATH
            const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
            this.jsdata.push({
              RNO: Response.data[i].RNO,
              STORENAME: Response.data[i].STORENAME,
              NICKNAME: Response.data[i].NICKNAME,
              REGDATE: Response.data[i].REGDATE.slice(0, -14),
              STOREID: Response.data[i].STOREID,
              CONTENT: Response.data[i].CONTENT,
              STARRATE: Response.data[i].STARRATE,
              RRNO: Response.data[i].RRNO,
              imgurl: url + path + '/' + uuid,
              uuid
            })
          }
          else {
            this.jsdata.push({
              RNO: Response.data[i].RNO,
              STORENAME: Response.data[i].STORENAME,
              NICKNAME: Response.data[i].NICKNAME,
              REGDATE: Response.data[i].REGDATE.slice(0, -14),
              STOREID: Response.data[i].STOREID,
              CONTENT: Response.data[i].CONTENT,
              STARRATE: Response.data[i].STARRATE,
              RRNO: Response.data[i].RRNO,
              imgurl: null
            })
          }
        }
        console.log(Response.data[0])
      }).catch(function (error) {
        console.log(error.toJSON())
      })
    },
    updateReply(rno, editContent) {
      this.targetIdx = rno
      axios({
        method: 'put',
        url: 'http://localhost:3000/updateReply',
        data: {
          rno,
          starRate: 4.1,
          content: editContent,
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then(() => {
        this.$q.notify({
          color: 'teal',
          icon: 'thumb_up',
          message: `수정되었습니다.`,
          position: 'center',
          timeout: 1200
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }).catch(function (error) {
        // 에러 핸들링
        console.log(error.toJSON());
      })

    },
    deleteReply(rno, UUID) {
      this.targetIdx = rno
      console.log(UUID)
      if (UUID) {
        axios({
          method: 'post',
          url: 'http://localhost:3000/deleteReplyAttach',
          data: {
            rno,
            path: 'ReplyPic/' + this.$route.params.id,
            UUID
          },
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          responseType: 'json'
        })
        setTimeout(() => {
          axios({
            method: 'post',
            url: 'http://localhost:3000/deleteReply',
            data: {
              rno,
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            responseType: 'json'
          }).then(() => {
            this.$q.notify({
              color: 'red-7',
              icon: 'thumb_up',
              message: `삭제되었습니다.`,
              position: 'center',
              timeout: 1200
            })
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          }).catch(function (error) {
            // 에러 핸들링
            console.log(error.toJSON());
          })
        }, 1000);
      }
      else {
        axios({
          method: 'post',
          url: 'http://localhost:3000/deleteReply',
          data: {
            rno,
          },
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          responseType: 'json'
        }).then(() => {
          this.$q.notify({
            color: 'red-7',
            icon: 'thumb_up',
            message: `삭제되었습니다.`,
            position: 'center',
            timeout: 1200
          })
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        }).catch(function (error) {
          // 에러 핸들링
          console.log(error.toJSON());
        })
      }

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
  font-family: 'Ubuntu', sans-serif;
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
