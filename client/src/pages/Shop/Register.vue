<template>
<Header></Header>
  <div class="resisterContainer">
    <h4 class="text-center"> 제품등록 </h4>

  <div class="q-pa-md"> 제품명
    <div class="q-gutter-y-md column" style="max-width: 500px" >
      <q-input outlined v-model="text" :dense="dense" />
    </div>
    </div>

  <div class="q-pa-md"> 제품가격
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input outlined v-model="text" :dense="dense" />
    </div>
    </div>

  <div class="q-pa-md"> 배송비
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input outlined v-model="text" :dense="dense"/>
    </div>
    </div>

  <div class="q-pa-md"> 추가배송비(도서산간)
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input outlined v-model="text" :dense="dense" />
    </div>
    </div>

  <div class="q-pa-md"> 검색태그
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input outlined v-model="text" :dense="dense" />
    </div>
    </div>

  <div class="q-pa-md"> 제품사진
    <div class="q-gutter-md row items-start">
      <q-input
        @update:model-value="val => { file = val[0] }"
        filled
        type="file"
        accept="image/png, image/jpeg"/>
    </div>
  </div>

    <div class="row">
    <div class="q-pa-md q-gutter-sm">
         <q-btn color="black"  label="취소하기" />
    </div>
      <div class="q-pa-md q-gutter-sm">
         <q-btn color="red"  label="저장하기" />
    </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import { ref } from 'vue'
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';

export default{
    setup () {
    return {
      slide: ref(1),
      file: ref(null),
      files: ref(null)
    }
  },
    components: { Header, Footer }
  }
</script>

<style>
</style>
