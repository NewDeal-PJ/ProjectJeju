<template>
  <Header></Header>
  <body>
    <div v-if="account.id == 'manager'">
    <div class="goRegister">
      <a href="http://localhost:9000/#/api/shop/register">
                <q-btn style="color: white;
                background-color: #F79a38;
                height: 30px;
                display: block;
                margin:0 auto;
                margin-top: 10px;
              " >
                  <div style="font-size: 18px; font-weight: 900;
                  font-family: 'Noto Sans KR', sans-serif;"> 상품등록하기</div>
      </q-btn></a>
    </div>
  </div>
    <!-- 제품 -->
    <!-- 물량 추가버튼 수정하기 -->
    <main style="margin: 60px">
      <div class="shopContainer" >
        <div class="row g-5">
          <div>
            <div style="display:flex;">
              <q-card class="my-card" v-for="(product,index) in products" :key="product.PRODUCTID" :name="product.PRODUCTID" >
                <img :src="product.imgurl" style="width:300px; height: 100px;" />
                <q-card-section class="goods" >
                  <div class=" wrap items-center" >
                    <div style="font-weight:bold">
                      {{product.PRODUCTNAME}}
                      <div class="text-caption text-grey">
                        {{product.PRODUCTDESCRIPTION}}
                      </div>
                      <div class="text-subtitle1 text-red">
                        {{product.PRODUCTPRICE}} 원
                      </div>
                      <div class="row" style="display: flex; justify-content: center;">
                        <div class="col-auto">
                          <q-input
                          v-model.number="product.PRODUCTQTY"
                          type="number"
                          placeholder="1"
                          filled style="width: 50px; " min="1" />
                        </div>
                      </div>

                      <q-btn @click="addToCart(product)" flat style="color: blue" label="ADD TO CART" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </main>


  </body>
  <Footer></Footer>
</template>

<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
import axios from 'axios'
import { ref } from "vue";
export default {
  setup() {
    const products=ref([])
    const cart = ref([])
    const PRODUCTQTY = ref(1)
    const account = {
      id: '',
      name: ''
    }
    
    return {
      products,
      cart,
      PRODUCTQTY,
      account
    }
  },
  beforeCreate(){
    // 백엔드의 계정정보를 호출
    axios.get("/api/login").then((res) => {
      this.account = res.data;
    });
    // localStorage.setItem("cart",JSON.stringify(this.cart));
  },
  created(){
  },

  mounted() {
    this.getProduct()
    console.log(`mounted`)
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
            if (Response.data[i].product_uuid) {
              const uuid = Response.data[i].product_uuid
              const path = Response.data[i].product_path
              const url = 'https://jejuprojectimage.s3.ap-northeast-2.amazonaws.com/'
            this.products.push({
              PRODUCTID: Response.data[i].product_id,
              PRODUCTNAME: Response.data[i].product_name,
              PRODUCTPRICE: Response.data[i].product_price,
              PRODUCTDESCRIPTION: Response.data[i].product_description,
              PRODUCTQTY : this.PRODUCTQTY,
              imgurl: url + path + '/' + uuid,
              uuid
            })
          }
          }
          console.log('Products:',this.products)
        }).catch(function (error) {
          console.log(error.toJSON())
        })
    },

    addToCart(product){
      this.cart.push(product);
      alert(`${product.PRODUCTNAME}`+`가 장바구니에 담겼습니다.`)
      console.log(this.cart)
      console.log("add to cart")
      if(!window.localStorage.key('cart')){
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    else{
      window.localStorage.removeItem('cart')
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
      // console.log('localStorage',JSON.parse(localStorage.getItem("cart")) || "")
      // if(window.localStorage.getItem('cart'))
      // {}
    //   if(VueCookies.isKey('cart'))
    //   {
    //     VueCookies.remove('cart')
    //     VueCookies.set('cart' ,JSON.stringify(this.cart) , "1h")
    //     // alert(VueCookies.get('cart')) }
    //   // VueCookies.remove('cart')
    // }
    // else{
    //   VueCookies.set('cart' ,JSON.stringify(this.cart) , "1h")
    // }
    // console.log(VueCookies.get('cart'))
  },

  components: { Header, Footer }
}
</script>


<style>
.my-card {
  text-align: center;
  margin: 10px;
}

a{ text-decoration: none;}

</style>
