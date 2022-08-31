<template>
<Header></Header>
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
          <tr>
            <th class="text-middle">사진</th>
            <th class="text-middle">아이폰</th>
            <th class="text-middle">15,300</th>
            <th class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </th>
          </tr>

          <tr>
            <th class="text-middle">사진2</th>
            <th class="text-middle">아이폰2</th>
            <th class="text-middle">15,300</th>
            <th class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
        <i class="fa-solid fa-trash-can" aria-hidden="true"></i> </span> </th>
          </tr>

          <tr>
            <th class="text-middle">사진3</th>
            <th class="text-middle">아이폰3</th>
            <th class="text-middle">15,300</th>
            <th class="text-middle"> <span class="removeContainer" style="color: red;" v-on:click="RemoveComment">
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
          <tr>
            <th class="text-middle">아이폰</th>
            <th class="text-middle">1개</th>
            <th class="text-middle">15,300</th>
          </tr>

          <tr>
            <th class="text-middle">아이폰2</th>
            <th class="text-middle">1개</th>
            <th class="text-middle">15,300</th>
          </tr>

          <tr>
            <th class="text-middle">아이폰3</th>
            <th class="text-middle">1개</th>
            <th class="text-middle">15,300</th>
          </tr>
       </tbody>
</q-markup-table>
</div>
      </div>
      <hr width="90%">
      <div style="padding: 10px 40px;">
        <table style="margin-left:auto;">
          <td style="font-weight: bold;"> 합계 </td>
          <td> 18,300</td>
        </table>
      </div>

    </div>
</div>

  <div class="button" >
      <q-btn style="color: white;
      background-color: #F79a38;
      width: 180px;
      height: 30px;
      display: block;
      margin-left: 75%;
      margin-bottom: 50px;" >
        <div style="font-size: 18px; font-weight: 900;
        font-family: 'Noto Sans KR', sans-serif;">결제하기</div>
      </q-btn>
  </div>
<Footer></Footer>
</template>


<script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';
export default{
    components: { Header, Footer }
}
</script>

<style>
.cartGoods{

  width: 60%;
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

</style>

