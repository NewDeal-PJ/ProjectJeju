<template>
  <Header></Header>


  <!-- 제품 -->
  <!-- 물량 추가버튼 수정하기 -->
  <main style="margin: 60px">
    <div class="shopContainer">
      <div class="row g-3">
        <div>
          <div style="display:flex; ">
            <q-card class="my-card" v-for="dataItem in jsdata" :key="dataItem.PRODUCTID" :name="dataItem.PRODUCTID">
              <q-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpo2xqATkvmnvnMEaj3IVVcyjVV3rW6S3iQ&usqp=CAU" />
              <q-card-section class="goods">
                <div class="row no-wrap items-center">
                  <div style="font-weight:bold">
                    {{dataItem.PRODUCTNAME}}
                    <div class="text-caption text-grey">
                      {{dataItem.PRODUCTDESCRIPTION}}
                    </div>
                    <div class="text-subtitle1 text-red">
                      {{dataItem.PRODUCTPRICE}} 원
                    </div>
                    <div class="row">
                      <div class="col-auto">
                        <!-- <q-input
                      v-model.number="model"
                      type="number"
                      filled/> -->

                      </div>
                    </div>
                    <q-btn flat style="color: blue" label="ADD TO CART" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </main>


  <Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import axios from 'axios'
import { ref } from "vue";
export default {
  setup() {
    const jsdata=ref([])
    return {
      jsdata,
    }
  },
  mounted() {
    this.getProduct()

  },
  methods: {
    getProduct() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/shop',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      })
        .then((Response) => {
          for (let i = 0; i < Response.data.length; i++) {
            this.jsdata.push({
              PRODUCTID: Response.data[i].id,
              PRODUCTNAME: Response.data[i].product_name,
              PRODUCTPRICE: Response.data[i].price,
              PRODUCTDESCRIPTION: Response.data[i].description
            })
          }
          console.log(this.jsdata)
        }).catch(function (error) {
          console.log(error.toJSON())
        })
    },
    //   axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/api/shop',
    //     headers: { 'X-Requested-With': 'XMLHttpRequest' },
    //     responseType: 'json'
    //   }).then((res) => {
    //     for (let i=0; i < res.data.length; i++) {
    //       this.jsdata.push({
    //         PRODUCTID: res.data[i].id,
    //         PRODUCTNAME: res.data[i].product_name,
    //         PRODUCTPRICE: res.data[i].price,
    //         PRODUCTDESCRIPTION: res.data[i].description
    //       })
    //     }
    //     console.log(this.jsdata)
    //   }).catch(function (error) {
    //     console.log(error.toJSON())
    //   })
    // }

  },
  components: { Header, Footer }
}
</script>


<style>
.my-card {
  text-align: center;
}
</style>
