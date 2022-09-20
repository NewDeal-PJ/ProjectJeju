<template>
  <Header></Header>
  <body>
    <!-- 스테퍼 작업중 -->
    <!-- <div>
      <div class="q-pa-md">
        <q-stepper
          v-model="step"
          ref="stepper"
          contracted
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Select campaign settings"
            icon="car"
            :done="step > 1"
          >
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="car"
            :done="step > 2"
          >
            An ad group contains one or more ads which target a shared set of keywords.
          </q-step>

          <q-step
            :name="3"
            title="Create an ad"
            icon="car"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div> -->

    <div id="join-wrap">

          <div class="cartInfo2" style="text-align: center;">
            <table class="jointable" style="width: 1200px;  height: 180px; padding: 30px; max-width: 100%; margin: 0 auto;">

              <div  style=" margin:0 auto;">

      <q-markup-table :separator="separator" flat >
        <thead>
          <tr>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7">  </th>
            <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 상품정보 </th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 수량</th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 상품금액</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in OrderProductInfo"
        :key="product.product_orderid"
        :name="product.product_orderid">
            <th class="text-middle">
              <img
            :src="product.imgurl"
            style="width:350px; max-width: 100%; height: 250px; max-height: 100%; position: inherit;"
          />
            </th>
            <th class="text-middle">{{product.product_name}}</th>
            <th class="text-middle">{{product.product_quantity}}</th>
            <th class="text-middle">{{product.product_price}}</th>
          </tr>

        </tbody>
      </q-markup-table>
      </div>

            </table>
          </div>


          
      <table class="jointable" style="width: 1200px; height: 200px; padding: 30px; max-width: 100%; margin: 0 auto; font-size: 15px; font-weight: bold;">
        <q-markup-table :separator="separator" flat >
            <thead>
              <tr>
                <td colspan='2'  style=" text-align: center; font-size: 15px; background-color: #FAEBD7"> 배송정보 </td>
              </tr>
            </thead>
            <thead>
          <tr>
            <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 주문이름 </th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 아이디 </th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 수령인 </th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 연락처 </th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 주소</th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 주문 가격</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in OrderInfo"
        :key="order.order_id"
        :name="order.order_id">
            <th class="text-middle">{{order.order_name}}</th>
            <th class="text-middle">{{order.order_userid}}</th>
            <th class="text-middle">{{order.order_recipient}}</th>
            <th class="text-middle">{{order.order_userphone}}</th>
            <th class="text-middle">{{order.order_addrs}}</th>
            <th class="text-middle">{{order.order_totalprice}}</th>
          </tr>

        </tbody>
          </q-markup-table>



        </table>

    </div>

    <div class="orderInfoButton">
              <div class="q-pa-md q-gutter-md form-group">
                <q-btn @click="confirm" style="color: white; background-color: #FF9800; width: 250px;
              height: 40px; margin: 0 auto; display: block; ">
                <div style="font-size: 18px; font-weight: 200;
              font-family: 'Noto Sans KR', sans-serif;">HOME으로 가기</div>
                </q-btn>
              </div>
    </div>
  </body>
  <Footer></Footer>
  </template>

  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  import { reactive, ref, onMounted } from 'vue';
  import { useQuasar } from 'quasar';
  import axios from 'axios';
  import { useRoute } from "vue-router";
  export default{
    data() {
    const OrderInfo = ref([]);
    const OrderProductInfo = ref([]);
    
    return {
      OrderInfo,
      OrderProductInfo
    };
  },
    setup () {
      const user_id = window.localStorage.getItem('userid')
      const $q = useQuasar()
      const route = useRoute()
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
            user : {
              id : ''
            }
      
          });
    return {
      state,
      $q,
      user_id
    }
  },
  created(){
    console.log(this.user_id)
    this.getOrderItem(this.user_id)
    this.getOrderInfo(this.user_id)
  
  },
  methods : {
    confirm () {
        window.location.href = "/#/api/map";
      },
    getOrderItem(data){
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/OrderProductInfo',
        data: {
          userid: data,
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then((Response) => {
        console.log(Response)
        for (let i = 0; i < Response.data.length; i++) {
          if (Response.data[i].product_uuid) {
              const uuid = Response.data[i].product_uuid;
              const path = Response.data[i].product_path;
              const url =
                "https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/";
              this.OrderProductInfo.push({
                product_orderid: Response.data[i].product_orderid,
                product_name: Response.data[i].product_name,
                product_id : Response.data[i].product_id,
                product_quantity: Response.data[i].product_quantity,
                product_price: Response.data[i].product_price,
                imgurl: url + path + "/" + uuid,
                uuid,
              });
            }
          }
          console.log(this.OrderProductInfo)
  })
    },
    getOrderInfo(data){
        axios({
        method: 'post',
        url: 'http://localhost:3000/api/OrderInfo',
        data: {
          userid: data,
        },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        responseType: 'json'
      }).then((Response) => {
        console.log(Response)
        for (let i = 0; i < Response.data.length; i++) {
              this.OrderInfo.push({
                order_id: Response.data[i].order_id,
                order_name: Response.data[i].order_name,
                order_addrs: Response.data[i].order_addrs,
                order_userid: Response.data[i].order_userid,
                order_userphone: Response.data[i].order_userphone,
                order_totalprice : Response.data[i].order_totalprice,
                order_recipient : Response.data[i].order_recipient
              });
              console.log(this.OrderInfo)
          }
  })
      
}
  },

      components: { Header, Footer }
  }




  </script>

  <style>
  </style>
