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
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Detail</th>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Price</th>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="cart.index" :name="cart.PRODUCTID">
              <th class="text-middle"><img :src="item.PRODUCTIMG"/></th>
              <th class="text-middle">{{item.PRODUCTNAME}}</th>
              <th class="text-middle">{{item.PRODUCTPRICE}}</th>
              <th class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="removeItemFromCart(prodcut)">
          <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </th>
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
              <th class="text-middle">1개</th>
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
            <td> {{total_price}} 원</td>
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
    </div>
  </div>
  <Footer></Footer>
  </template>




  <script>
  import Header from 'src/components/Home/Header.vue';
  import Footer from '../../components/Home/Footer.vue';
  export default{
    data : ()=> {
      const qty = ''
      const total_price = ''
      const cart = JSON.parse(localStorage.getItem("cart")) || ""
      return {
        cart,
        qty,
        total_price
      };
    },
    mounted(){
      this.getTotalPrice()
    },
    methods : {
      removeItemFromCart(product){
        alert("카트에서 삭제되었습니다.")
      },
      getTotalPrice(){
        console.log('cart.length:',this.cart.length)
        for(let i=0; i<this.cart.length; i++){
          this.total_price = Number(`${this.total_price}`) + Number(`${this.cart[i].PRODUCTPRICE}`)
        }
        console.log(this.total_price)
        return this.total_price
      },
      getQty(){
        
      }
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

