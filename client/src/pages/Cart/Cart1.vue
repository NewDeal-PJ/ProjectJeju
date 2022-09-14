<template>
  <Header></Header>
  <div id='wrapper'>
  <div style="width: 100%; display: flex;">

      <div class="cartGoods">
      <div  style=" margin:0 auto;">
        <q-markup-table :separator="separator" flat >
          <thead>
            <tr>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> Item </th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Name</th>
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
        font-family: 'Rubik', sans-serif;
        margin-left: 20px;">Total</span>
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
  </div>
    <div class="cart1Button" >
        <a href="http://localhost:9000/#/api/cart2">
        <q-btn style="color: white;
        background-color: #F79a38;
        width: 180px;
        height: 30px;
        display: block;
        margin-left: 77%;
        margin-bottom: 50px;" >
          <div style="font-size: 18px; font-weight: 900;
          font-family: 'Noto Sans KR', sans-serif;"> 주문하기</div>
        </q-btn></a>
        <q-btn v-on:click="removeItemFromCart()" style="color: beige;
        background-color: darkorchid;
        width: 180px;
        height: 30px;
        display: block;
        margin-left: 77%;
        margin-bottom: 50px;" >
          <div style="font-size: 18px; font-weight: 900;
          font-family: 'Noto Sans KR', sans-serif;"> 카트 비우기</div>
        </q-btn>
    </div>
  </div>
  <Footer></Footer>
  </template>




  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  export default{
    data : ()=> {
      const price = ''
      const total_price = ''
      const cart = JSON.parse(localStorage.getItem("cart")) || ""
      return {
        cart,
        price,
        total_price
      };
    },
    mounted(){
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
  .cartGoods{

    width: 80%;
    height: 350px;
    margin: 60px;
  }
  .cartTitle1{
     margin: 10px;
     font-size: 23px;
     font-family: 'Noto Sans KR', sans-serif;
     display: flex;
     gap: 0px 130px;
     padding: 5px;

  }
  .cartTotal{
    width: 30%;
    margin: 60px;
    border: 5px solid #FAEBD7;
    padding: 10px;
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
  padding-bottom: 2000px;
}
footer{
  height: 2000px;
  position : fixed;
  transform : translateY(-100%);
  bottom: 0;
  width: 100%;
}

  </style>

