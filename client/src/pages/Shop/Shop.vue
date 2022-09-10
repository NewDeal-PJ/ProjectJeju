<template>
  <Header></Header>


  <!-- 제품 -->
  <!-- 물량 추가버튼 수정하기 -->
  <main style="margin: 60px">
    <div class="shopContainer">
      <div class="row g-3">
        <div>
          <div style="display:flex; ">
            <q-card class="my-card" v-for="product in products" :key="product.PRODUCTID" :name="product.PRODUCTID">
              <img :src="product.PRODUCTIMG"/>
              <q-card-section class="goods">
                <div class="row no-wrap items-center">
                  <div style="font-weight:bold">
                    {{product.PRODUCTNAME}}
                    <div class="text-caption text-grey">
                      {{product.PRODUCTDESCRIPTION}}
                    </div>
                    <div class="text-subtitle1 text-red">
                      {{product.PRODUCTPRICE}} 원
                    </div>
                    <div class="row">
                      <div class="col-auto">
                        <!-- <q-input
                      v-model.number="model"
                      type="number"
                      filled/> -->

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
    return {
      products,
      cart
    }
  },
  beforeCreate(){
    // localStorage.setItem("cart",JSON.stringify(this.cart));
  },
  created(){
  },

  mounted() {
    this.getProduct()
    console.log(`mounted`)
    // if(window.localStorage.key('cart'))
    //   {
    //     // this.cart = window.localStorage.getItem('cart')
    //     // console.log(window.localStorage.getItem('cart'))
    //     this.cart = window.localStorage.getItem('cart')
    //     console.log(this.cart)
    //   }
    //   else{
    //     console.log('카트가 비었습니다.')
    //   }
    },
  updated() {
    // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다. 
  //   if(VueCookies.isKey('cart')){
  //     alert('카트정보가 있습니다.')
  //     alert(VueCookies.get('cart'))
  //     this.cart = VueCookies.get('cart')
  //     console.log('cart:',this.cart)
  //     console.log('length:',this.cart.length)
  //     console.log('updated')
  // }

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
            this.products.push({
              PRODUCTID: Response.data[i].id,
              PRODUCTNAME: Response.data[i].product_name,
              PRODUCTIMG : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpo2xqATkvmnvnMEaj3IVVcyjVV3rW6S3iQ&usqp=CAU`,
              PRODUCTPRICE: Response.data[i].price,
              PRODUCTDESCRIPTION: Response.data[i].description
            })
          }
          console.log('Products:',this.products)
        }).catch(function (error) {
          console.log(error.toJSON())
        })
    },

    addToCart(product){
      this.cart.push(product);
      console.log(this.cart)
      console.log("add to cart")
      if(!window.localStorage.key('cart')){
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    else{
      window.localStorage.removeItem('cart')
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
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
  }
},

  components: { Header, Footer }
}
</script>


<style>
.my-card {
  text-align: center;
}
</style>
