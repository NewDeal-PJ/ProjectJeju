<template>
    <div class="foodDetailReviewStar">
        <div class="star" style="padding:0 30% ;text-align: center; margin-top: 1%;">
            <q-form @submit="onSubmit" class>
                <q-rating name="quality" v-model="quality" value="quality" max="5" size="3em" color="yellow"
                    icon="star_border" icon-selected="star" no-dimming />
            </q-form>
        </div>

        <div style="padding: 1% 20%;">
            <div>
                <div style="width: 500px; max-width: 100%;">
                    <q-input v-model="content" filled autogrow val="content" />
                </div>
            </div>
        </div>

        <div style="display: flex; padding: 1% 20%;">
            <div style="width: 400px; max-width: 100%;">
                <q-input @update:model-value="val => { file  = val[0] }" filled type="file" accept=".jpg, .png, .svg" />
            </div>
            <div style="padding:10px;">
                <q-btn @click="creatReply(quality,content)" label="SUBMIT" type="submit" color="orange" />
            </div>
        </div>

    </div>
    <div class="foodDetailReview" style="width: 50%; max-width: 100%; margin: 0 auto;padding: 20px;" v-if="jsdata"
        v-for="(dataItem, idx) in jsdata" @click="selectReply(dataItem.RNO, dataItem)"
        v-bind:class="{ selected: dataItem.RNO === targetIdx }">
        <hr>

        <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px; display: flex; ">
            <span>🧡　</span>
            <p> {{ dataItem.NICKNAME }} </p>
        </div>
        <div style="display: flex; font-size: 15px;">
            <span>📅　</span>
            <p> {{ dataItem.REGDATE }} </p>
        </div>
        <div style="display: flex; font-size: 15px;">
            <q-form @submit="onSubmit" class>
            </q-form>
            <span>⭐　</span>
            <span> {{ dataItem.STARRATE }} / 5점 </span>
        </div>
        <div class="reviewDescription" style="font-size: 16px; display: flex; margin-top: 10px;">
            <span> 🗣️　 </span>
            <p style="float: left; margin-right: 1.25rem;"> {{ dataItem.CONTENT }} </p>
            <div class="cursor-pointer" v-if="state.account.id==dataItem.NICKNAME">
                <td class="text-middle">
                    <i class="fas fa-pencil"></i>
                </td>
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
            <div class="cursor-pointer" v-if="state.account.id==dataItem.NICKNAME">
                <td style="float: left; margin-left: 1.5rem;" @click="deleteReply(dataItem.RNO,dataItem.uuid)"
                    v-bind:class="{ selected: dataItem.RNO === targetIdx }"> <span class="removeContainer"
                        style="color: red;">
                        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </td>
            </div>
        </div>
        <div class="cover">
            <img :src="dataItem.imgurl" />
        </div>

        <div class="reviewDescription" style="font-size: 15px;  display: flex;">

            <td class="text-middle"> </td>

            <!-- <q-expansion-item dense dense-toggle expand-separator icon="fa fa-comments" style="color: gray;"
                v-on:click="readReply(value)">
                <q-card>
                    <q-input outlined v-model="recontent" :dense="dense" val="recontent" />
                </q-card>

                <div style="padding:10px;">
                    <q-btn @click="creatReply(recontent, rno)" label="등록" color="orange" />
                </div>

            </q-expansion-item> -->

        </div>
    </div>

    <div class="q-pa-lg flex flex-center">
        <q-pagination @click="selectReply((current-1)*20,current*20); GoToTop()" v-model="current" :max="pageCnt" color="black"
            active-color="orange" />
        <q-pagination  />
    </div>

    <div>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="orange" />
        </q-page-scroller>
    </div>


</template>



<script>
import axios from "axios";
import { reactive } from 'vue';
import { ref, onMounted } from 'vue'
import { Loading, useQuasar } from 'quasar';
import { createWebHashHistory, useRoute } from "vue-router";
import { v4 } from "uuid";
import { uuidv4 } from "@firebase/util";
axios.defaults.withCredentials = true;
export default {
    setup() {
        const $q = useQuasar();
        const jsdata = ref([])
        const submitResult = ref([])
        const route = useRoute()
        onMounted(() => {
            if (route.query.auth) {
                axios.get("http://localhost:3000/api/login").then((res) => {
                    const id = res.data.id
                    if(id === ''){
                        axios.get("http://localhost:3000/api/kakao_login").then((res)=>{
                            id = res.data.id
                        })
                    }
                    if (id !== route.query.auth) {
                        $q.notify({
                            color: 'negative',
                            position: 'center',
                            message: '잘못된 접근입니다.'
                        })
                        window.location.href = '#';
                    }
                })
            }
        })
        const state = reactive({
            account: {
                id: '',
                name: ''
            },
            social : {
                id : '',
                nickname : '',
                method : ''
            },
            form: {
                loginId: "",
                loginPw: ""
            },

        });
        axios.get("http://localhost:3000/api/login").then((res) => {
            state.account = res.data;
        });
        axios.get("http://localhost:3000/api/kakao_login").then((res) => {
            state.social = res.data;
        });
        return {
            idx: ref(null),
            pageCnt: ref(null),
            state,
            editContent: ref([]),
            $q,
            id: ref([]),
            current: ref(0),
            jsdata,
            slide: ref(1),
            fullscreen: ref(false),
            content: ref([]),
            file: ref(null),
            quality: ref(0),
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
        axios({
            method: 'post',
            url: 'http://localhost:3000/reply/' + this.$route.params.id,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            responseType: 'json'
        }).then((Response) => {
            this.pageCnt = Math.round(Response.data[0] / 20)
        }).catch((err) => {
            console(err.toJSON)
        })
        this.selectReply(0, 20)
    },
    data() {
        return {
            targetIdx: 0,
            targetData: {},
        }
    },
    methods: {
        selectReply(firstReplyCount, lastReplyCount) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/replyPaging',
                data: {
                    storeid: this.$route.params.id,
                    lastReplyCount,
                    firstReplyCount,
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).then((Response) => {
                if (this.jsdata.length > 0) {
                    this.jsdata.length = 0
                }
                for (let i = 0; i < Response.data.length; i++) {
                    if (Response.data[i].UUID) {
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
                            imgurl: url + path + '/' + uuid,
                            uuid
                        })
                    }
                    else {
                        this.jsdata.push({
                            RNO: Response.data[i].RNO,
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
            })
                .catch(function (error) {
                    console.log(error.toJSON())
                })
        },
        creatReply(quality, content) {
            if (this.$route.query.auth) {
                this.id = []
                axios({
                    method: 'get',
                    url: 'http://localhost:3000/api/login',
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    responseType: 'json'
                }).then((res) => {
                    this.id[0] = res.data.id
                }).then(() => {
                    if (this.id[0] !== this.$route.query.auth) {
                        console.log(this.$route.query.auth)
                        this.$q.notify({
                            color: 'negative',
                            position: 'center',
                            message: '잘못된 접근입니다.'
                        })
                        window.location.href = '#';
                    }
                    else {
                        axios({
                            method: 'post',
                            url: 'http://localhost:3000/api/reply/insert',
                            data: {
                                NICKNAME: this.$route.query.auth,
                                STOREID: this.$route.params.id,
                                CONTENT: content,
                                STARRATE: quality,
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            responseType: 'json'
                        })
                        if (this.file !== undefined) {
                            setTimeout(() => {

                                function uuidv4() {
                                    const tokens = v4().split('-')
                                    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
                                }
                                axios({
                                    method: 'post',
                                    url: 'http://localhost:3000/replyInsertAttach',
                                    data: {
                                        UUID: uuidv4(),
                                        PATH: 'ReplyPic/' + this.$route.params.id,
                                    },
                                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                    responseType: 'json'
                                })
                            }, 400);
                            setTimeout(() => {
                                const uploadFile = this.file
                                const formData = new FormData()
                                formData.append("File", uploadFile)
                                axios({
                                    method: 'post',
                                    url: 'http://localhost:3000/upload',
                                    data: formData,
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                }).catch(function (error) {
                                    console.log(error.toJSON())
                                });
                            }, 600);
                            setTimeout(() => {
                                this.$q.notify({
                                    color: 'orange-7',
                                    icon: 'thumb_up',
                                    message: `소중한 의견 감사합니다.`,
                                    position: 'center',
                                    timeout: 1200
                                })
                            }, 1300);
                            // setTimeout(() => {
                            //     window.location.reload()
                            // }, 1500);
                        }
                        else {
                            this.$q.notify({
                                color: 'orange-7',
                                icon: 'thumb_up',
                                message: `소중한 의견 감사합니다.`,
                                position: 'center',
                                timeout: 1200
                            })
                            setTimeout(() => {
                                window.location.reload()
                            }, 600);
                        }

                    }
                }).catch(function (err) {
                    console.log(err.toJSON())
                })
            }
            else {
                this.$q.notify({
                    color: 'negative',
                    icon: 'thumb_up',
                    message: `리뷰등록은 로그인 후 가능합니다.`,
                    position: 'center',
                    timeout: 1100
                })
                setTimeout(() => {
                    window.location.href = '#/api/login';
                }, 900);
            }
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
        GoToTop() {
            window.scrollTo(0, 500);
        },
    }
};

</script>