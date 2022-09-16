<template>
  <Header></Header>
  <body>
      <div>
          <div class="cartGoods" style="width: 1200px;  padding: 30px; max-width: 100%;   margin: 0 auto;">
            <div style=" margin:0 auto; ">
              <q-markup-table :separator="separator" flat >
                <thead>
                  <tr>
                    <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> Item </th>
                    <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Detail</th>
                    <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Price</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart" :key="cart.index" :name="cart.PRODUCTID">
                    <th class="text-middle"><img :src="item.PRODUCTIMG"/></th>
                    <th class="text-middle">{{item.PRODUCTNAME}}</th>
                    <th class="text-middle">{{item.PRODUCTPRICE}}</th>

                  </tr>
                </tbody>
              </q-markup-table>
            </div>
          </div>



          <div class="cartTotal">
                <span
                style="font-size: 23px;
                font-family: 'Noto Sans KR', sans-serif;
                margin-left: 5%;">Total</span>
                <hr width="90%">

                <div>
                  <div  style=" margin:0 auto;">
                  <q-markup-table :separator="separator" flat >
                <tbody>
                    <tr v-for="item in cart" :key="cart.PRODUCTID" :name="cart.PRODUCTID">
                      <th class="text-middle">{{item.PRODUCTNAME}}</th>
                      <th class="text-middle">{{item.PRODUCTQTY}}</th>
                      <th class="text-middle">{{item.PRODUCTPRICE}}</th>
                    </tr>
                </tbody>
          </q-markup-table>
          </div>
                </div>
                <hr width="90%">
                <div style="padding: 10px 40px;">
                  <table style="margin-left:auto;">
                    <td style="font-weight: bold;"> 합계 :  </td>
                    <td> {{price}} 원</td>
                  </table>
                </div>

          </div>

          <div class="cart1Button" >
              <a href="#/api/cart2">
              <q-btn style="color: white;
              background-color: #F79a38;
              width: 180px;
              height: 30px;
              display: block;
              margin: 0 auto;
              margin-top: 20px;
            " >
                <div style="font-size: 18px; font-weight: 900;
                font-family: 'Noto Sans KR', sans-serif;"> 주문하기</div>
              </q-btn></a>
              <q-btn v-on:click="removeItemFromCart()" style="color: black;
              background-color: #E7E7E7;
              width: 180px;
              height: 30px;
              display: block;
              margin: 0 auto;
              margin-top: 20px;
              margin-bottom: 70px;" >
                <div style="font-size: 18px; font-weight: 900;
                font-family: 'Noto Sans KR', sans-serif;"> 카트 비우기</div>
              </q-btn>
          </div>
      </div>
  </body>
  <Footer></Footer>
  </template>




  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  import axios from "axios"
  export default{
    data : ()=> {
      const price = ''
      const total_price = ''
      const account = {
      id: '',
      name: ''
    }
      const cart = JSON.parse(localStorage.getItem("cart")) || ""
      return {
        cart,
        price,
        total_price,
        account
      };
    },
    mounted(){
      // 백엔드의 계정정보를 호출
    axios.get("http://localhost:3000/api/login").then((res) => {
      this.account = res.data;
    });
      this.getTotalPrice()
    },
    methods : {
      removeItemFromCart(){
        window.localStorage.removeItem('cart')
        alert("카트가 비워졌습니다.")
        window.location.reload();
      },
      getTotalPrice(){
        console.log('cart.length:',this.cart.length)
        for(let i=0; i<this.cart.length; i++){
          this.price = Number(`${this.price}`) + Number(`${this.cart[i].PRODUCTPRICE}`)* Number(`${this.cart[i].PRODUCTQTY}`)
        }
        console.log(this.price)
        if(window.localStorage.key('totalPrice')){
          window.localStorage.removeItem('totalPrice')
          window.localStorage.setItem('totalPrice', JSON.stringify(this.price));
        }
        return this.price
      },
    },
      components: { Header, Footer }
  }
  </script>

  <style>

  .cartTitle1{
     margin: 10px;
     font-size: 23px;
     font-family: 'Noto Sans KR', sans-serif;
     display: flex;
     gap: 0px 130px;
     padding: 5px;

  }
  .cartTotal{
    margin: 0 auto;
    border: 5px solid #FAEBD7;
    padding: 30px;
    max-width: 100%;
    width: 80%;
  }

  th{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: 23px;
  }

  td{
    font-size: 15px;
  }

  a{text-decoration: none;}

  #wrapper{
  min-height: 100%;

}
footer{
  height: 200px;
  position : fixed;
  transform : translateY(-100%);
  bottom: 0;
  width: 100%;
}


  </style>
