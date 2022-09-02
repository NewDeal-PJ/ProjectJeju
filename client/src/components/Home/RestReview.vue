<template>
    <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;">
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


        
            <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;" v-for="dataItem in jsdata" :key="dataItem.RNO" :name="dataItem.RNO">
                <!-- <p> {{ dataItem.RNO }} </p> -->
                <hr>
                <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px; display: flex; ">
                    <span> 🧡　</span>
                    <p> {{ dataItem.NICKNAME }} </p>
                </div>
                <div style="display: flex;">
                    <span> 📅　</span>
                    <p> {{ dataItem.DATE }} </p>
                </div>
                <!-- <div class="cat"> : 사진 나중에 넣을거임 삭제 하지말것
                <img
                    src="https://velog.velcdn.com/images/kimjyunny_dev/post/370f3dab-9470-4918-a11f-3f05348dcf4b/image.jpeg">
                </div> -->
                <div class="reviewDescription" style="font-size: 15px; display: flex;">
                    <span> 🗣️　 </span>
                    <p> {{ dataItem.CONTENT }} </p>
                </div>
            
            </div>


        </div>

        
    <div style="display: flex; padding: 1% 20%;">
        <div style="width: 400px;">
            <q-input @update:model-value="val => { files = val }" multiple filled type="file"
                hint="Native file (multiple)" />
        </div>
        <div style="padding:10px;">
            <q-btn label="Submit" type="submit" color="orange" />
        </div>
    </div>

</template>


<script>
import axios from "axios";
import { ref } from 'vue'
axios.defaults.withCredentials = true;
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
    mounted(){
        this.getReply()
    },
    methods: {
        getReply() {
            axios({
                method: 'post',
                url: 'http://localhost:3000/reply',
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                responseType: 'json'
            }).then((Response) => {
                for (let i = 0; i < Response.data.length; i++) {
                    this.jsdata.push({
                        RNO: Response.data[i].RNO,
                        NICKNAME: Response.data[i].NICKNAME,
                        DATE: Response.data[i].DATE.slice(0, -14),
                        STOREID: Response.data[i].STOREID,
                        CONTENT: Response.data[i].CONTENT
                    })
                }

            })
            .then(()=>{
                console.log(this.jsdata)
            }).catch(function (error) {
                console.log(error.toJSON())
            })
        }
    }

};

</script>