<template>
    <div class="foodDetailReviewStar">
        <div class="star" style="padding:0 30% ;text-align: center; margin-top: 1%;">
            <q-form @submit="onSubmit" class>
                <q-rating name="quality" v-model="quality" max="5" size="3em" color="yellow" icon="star_border"
                    icon-selected="star" no-dimming />
            </q-form>
        </div>

        <div style="padding: 1% 20%;">
            <div>
                <div style="width: 500px;">
                    <q-input v-model="content" filled autogrow val="content" />
                </div>
            </div>
        </div>

        <div style="display: flex; padding: 1% 20%;">
            <div style="width: 400px;">
                <q-input @update:model-value="val => { files = val }" multiple filled type="file"
                    hint="최대 5장의 사진 파일만 가능합니다." accept=".jpg, .png, .svg" />
            </div>
            <div style="padding:10px;">
                <q-btn @click="creatReply(content)" label="등록" type="submit" color="orange" />
            </div>
        </div>

    </div>
    <div class="foodDetailReview" style="width: 50%; margin: 0 auto;padding: 20px;" v-if="jsdata"
        v-for="(dataItem, idx) in jsdata" @click="selectReply(dataItem.RNO, dataItem)"
        v-bind:class="{ selected: dataItem.RNO === targetIdx }">
        <hr>

        <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px; display: flex; ">
            <span> 🧡　</span>
            <p> {{ dataItem.NICKNAME }} </p>
        </div>
        <div style="display: flex;">
            <q-form @submit="onSubmit" class>
                <q-rating name="quality" v-model="quality" max="5" size="1rem" color="yellow" icon="star_border"
                    icon-selected="star" no-dimming />
            </q-form>
            <span> {{ dataItem.STARRATE }}</span>
            <span> 📅　</span>
            <p> {{ dataItem.REGDATE }} </p>
        </div>
        <div class="cover">
            <!-- <img :src="dataItem.imgurl" /> -->
        </div>
        <div class="reviewDescription" style="font-size: 15px; display: flex;">
            <span> 🗣️　 </span>
            <p> {{ dataItem.CONTENT }} </p>
            <q-btn @click="updateReply(dataItem.RNO)" v-bind:class="{ selected: dataItem.RNO === targetIdx }">
                <td class="text-middle"> <span class="ModifyContainer" v-on:click="ModifyComment">
                        <i class="fas fa-pencil"></i> </span> </td>
            </q-btn>
            <q-btn @click="deleteReply(dataItem.RNO)" v-bind:class="{ selected: dataItem.RNO === targetIdx }">
                <td class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
                        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </td>
            </q-btn>
        </div>

        <div class="reviewDescription" style="font-size: 15px;  display: flex;">

            <td class="text-middle"> </td>

            <q-expansion-item dense dense-toggle expand-separator icon="fa fa-comments" style="color: gray;"
                v-on:click="readReply(value)">
                <q-card>
                    <q-input outlined v-model="recontent" :dense="dense" val="recontent" />
                </q-card>

                <div style="padding:10px;">
                    <q-btn @click="creatReply(recontent, rno)" label="등록" color="orange" />
                </div>

            </q-expansion-item>

        </div>
    </div>

    <!-- </q-pagination> -->






</template>


<script>
import axios from "axios";
import { ref } from 'vue'
import { useQuasar } from 'quasar';
import { v4 } from "uuid";
import { uuidv4 } from "@firebase/util";
axios.defaults.withCredentials = true;
export default {
    setup() {

        const $q = useQuasar();
        const jsdata = ref([])
        const submitResult = ref([])
        return {
            $q,
            current: ref(1),
            jsdata,
            slide: ref(1),
            fullscreen: ref(false),
            content: ref([]),
            files: ref(null),
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
    mounted() {
        this.getListReply()
    },
    data() {
        return {
            targetIdx: 0,
            targetData: {},
        }
    },
    methods: {
        selectReply(idx, data) {
            this.targetData = data
            this.targetIdx = idx
            console.log(idx)
            console.log(data)

        },
        getListReply() {
            axios({
                method: 'get',
                url: 'http://localhost:3000/reply/' + this.$route.params.id,
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).then((Response) => {
                for (let i = 0; i < Response.data.length; i++) {
                    const uuid = Response.data[i].UUID
                    const path = Response.data[i].PATH
                    const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
                    this.jsdata.push({
                        RNO: Response.data[i].RNO,
                        NICKNAME: Response.data[i].NICKNAME,
                        REGDATE: Response.data[i].REGDATE.slice(0, -14),
                        STOREID: Response.data[i].STOREID,
                        CONTENT: Response.data[i].CONTENT,
                        STARRATE: Response.data[i].STARRATE,
                        RRNO: Response.data[i].RRNO,
                        imgurl: url + path + '/' + uuid
                    })
                }
            })
                .catch(function (error) {
                    console.log(error.toJSON())
                })
        },
        creatReply(content) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/reply/insert',
                data: {
                    NICKNAME: "soobintest",
                    STOREID: this.$route.params.id,
                    CONTENT: content,
                    STARRATE: 4.1,
                    RRNO: null,
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).then((Response)=>{
                const RNO=Response.data[0]
                if (this.files) {
                function uuidv4() {
                     return (
                     [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                         (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                     );
                 }
                for (let i = 0; i < this.files.length; i++) {
                    console.log(this.files[i])
                    const uploadFile = this.files[i]
                    formData.append("File", uploadFile)
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/reply/insertAttach',
                        // data: formData,
                        data :{
                            formData: new FormData(),
                            UUID:uuidv4(),
                            PATH :'ReplyPic/'+this.$route.params,
                            RNO
                        },
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                            'Content-Type': 'multipart/form-data',
                        },
                    }).catch(function (error) {
                        console.log(error.toJSON())
                    });
                }
            }

            }).then(() => {
                this.$q.notify({
                    color: 'orange-7',
                    icon: 'thumb_up',
                    message: `소중한 의견 감사합니다.`,
                    position: 'center',
                    timeout: 1200
                })
                // window.location.reload()
            }).catch(function (error) {
                // 에러 핸들링
                console.log(error.toJSON());
            })
           
            

        },
        updateReply(rno, data) {
            this.targetData = data
            this.targetIdx = rno
            // axios({
            //     method: 'put',
            //     url: 'http://localhost:3000/updateReply',
            //     data: {
            //         rno,
            //         content,
            //         starRate
            //     },
            //     headers: { 'X-Requested-With': 'XMLHttpRequest' },
            //     responseType: 'json'
            // }).catch(function (error) {
            //     // 에러 핸들링
            //     console.log(error.toJSON());
            // })

        },
        deleteReply(rno) {
            this.targetIdx = rno
            axios({
                method: 'delete',
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
                window.location.reload()
            }).catch(function (error) {
                // 에러 핸들링
                console.log(error.toJSON());
            })

        },
    }

};

</script>