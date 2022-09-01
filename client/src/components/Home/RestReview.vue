<template>
    <div class="foodDetailReview" style=" width: 50%; margin: 0 auto;padding: 20px;">
        <div>
            <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px;">
                닉네임
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
        </div>
        <hr>
        <div>
            <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px;">
                닉네임
            </div>
            <div style="display: flex;">
                <span> ⭐️⭐️⭐️⭐️⭐️</span>
                <span> YYYY.MM.DD</span>
            </div>
            <div class="cat">
                <img class="gogi"
                    src="https://velog.velcdn.com/images/kimjyunny_dev/post/c254bcb4-3fc7-450f-a1bc-10c834e2f38a/image.jpeg">
            </div>
            <div class="reviewDescription" style=" font-size: 15px;">
                살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~
            </div>
        </div>

        <hr>
        <div>
            <div class="foodDetailNickname" style=" font-weight: bold; font-size: 18px;">
                닉네임
            </div>
            <div style="display: flex;">
                <span> ⭐️⭐️⭐️⭐️⭐️</span>
                <span> YYYY.MM.DD</span>
            </div>
            <div class="cat">
                <img
                    src="https://velog.velcdn.com/images/kimjyunny_dev/post/c14d034d-bdef-4db4-9d72-688b466f9265/image.jpeg">
            </div>
            <div class="reviewDescription" style=" font-size: 15px;">
                살면서 먹은 물회 중에 제일 맛있었습니다. 재방문 할게요~
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

    },
    mounted() {

    },
    methods:{
    
    }

};

</script>