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
    <!-- <div>
            <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px;">
                <p> 닉네임 </p>
            </div>
            <div style="display: flex;">
                <span> ⭐️⭐️⭐️⭐️⭐️</span>
                <span> YYYY.MM.DD</span>
            </div>
            <div class="cat">
                <img
                    src="https://velog.velcdn.com/images/kimjyunny_dev/post/370f3dab-9470-4918-a11f-3f05348dcf4b/image.jpeg">
            </div>
            <div class="reviewDescription" style="font-size: 15px;">
                살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~ 살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은
                물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~살면서 먹은 물회 중에 제일
                맛있었습니다. 재방문 할게요~
            </div>
        </div>-->


    <q-infinite-scroll @load="fetchPosts" :offset="250">
    <div class="foodDetailReview" style="width: 50%; margin: 0 auto;padding: 20px;" v-for="dataItem in jsdata"
        :key="dataItem.RNO">
        <!-- <p> {{ dataItem.RNO }} </p> -->
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
        <!-- <div class="cat"> : 사진 나중에 넣을거임 삭제 하지말것
                <img
                    src="https://velog.velcdn.com/images/kimjyunny_dev/post/370f3dab-9470-4918-a11f-3f05348dcf4b/image.jpeg">
                </div> -->
        <div class="reviewDescription" style="font-size: 15px; display: flex;">
            <span> 🗣️　 </span>
            <p> {{ dataItem.CONTENT }} </p>
            <q-btn @click="updateReply(dataItem.RNO)">
                <td class="text-middle"> <span class="ModifyContainer" v-on:click="ModifyComment">
                        <i class="fas fa-pencil"></i> </span> </td>
            </q-btn>
            <q-btn>
                <td class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
                        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </td>
            </q-btn>
        </div>


    </div>

    <template v-slot:loading>
            <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
            </div>
        </template>
    </q-infinite-scroll>





</template>


<script>
import axios from "axios";
import { ref } from 'vue'
axios.defaults.withCredentials = true;
export default {
    setup() {
        const jsdata = ref([])
        const submitResult = ref([])
        const limit=10
        return {
            jsdata,
            fetchposts(index,done) {
                console.log(index)
                const start=index*limit
                const query =`?_start=${start}&_limit=${limit}`
                jsdata
                done()
            },
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
        // this.getReply()
    },
    methods: {
        getReply() {
            axios({
                method: 'get',
                url: 'http://localhost:3000/reply'+this.$route.params.id,
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).then((Response) => {
                for (let i = 0; i < Response.data.length; i++) {
                    this.jsdata.push({
                        RNO: Response.data[i].RNO,
                        NICKNAME: Response.data[i].NICKNAME,
                        REGDATE: Response.data[i].REGDATE.slice(0, -14),
                        STOREID: Response.data[i].STOREID,
                        CONTENT: Response.data[i].CONTENT,
                        STARRATE: Response.data[i].STARRATE
                    })
                }
            })
                .catch(function (error) {
                    console.log(error.toJSON())
                })
        },
        creatReply(content) {
            if (this.files) {
                for (let i = 0; i < this.files.length; i++) {
                    console.log(this.files[i])
                    const uploadFile = this.files[i]
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
                }
            }
            axios({
                method: 'post',
                url: 'http://localhost:3000/reply/insert',
                data: {
                    NICKNAME: "soobintest",
                    STOREID: this.$route.params.id,
                    CONTENT: content,
                    STARRATE: 4.1
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).then(() => {
                $q.notify({
                    color: 'orange-7',
                    icon: 'thumb_up',
                    message: `소중한 의견 감사합니다.`,
                    position: 'center',
                    timeout: 1200
                })
                window.location.reload()
            }).catch(function (error) {
                // 에러 핸들링
                console.log(error.toJSON());
            })

        },
        updateReply(rno, starRate, content) {
            axios({
                method: 'put',
                url: 'http://localhost:3000/update',
                data: {
                    rno,
                    content,
                    starRate
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).catch(function (error) {
                // 에러 핸들링
                console.log(error.toJSON());
            })

        },
        deleteReply(rno, starRate, content) {
            axios({
                method: 'put',
                url: 'http://localhost:3000/delete',
                data: {
                    rno,
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).catch(function (error) {
                // 에러 핸들링
                console.log(error.toJSON());
            })

        },
    }

};

</script>