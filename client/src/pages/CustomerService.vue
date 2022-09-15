<template>
<Header></Header>
<body>
  <div class="customerService1">
    <p> Q&A </p>
      <div class="q-pa-md" >

        <q-markup-table :separator="separator" flat bordered style="width: 80%; max-width:100%; margin: 0 auto;">
          <thead>
            <tr>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> 번호 </th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-middle">1</th>
              <th class="text-right">
                <q-expansion-item
                              label="어제 주문했는데 언제 발송될까요?">
                              <q-card>
                                <q-card-section>
                                  안녕하세요 고객님, 배송은 주문일로부터 7일정도 소요됩니다.
                                </q-card-section>
                              </q-card>
                            </q-expansion-item>
              </th>
            </tr>
            <tr>
              <th class="text-middle">2</th>
              <th class="text-right">
                <q-expansion-item
                              label="휴대폰 케이스 재입고 예정있나요? 언제쯤 재입고 되나요?">
                              <q-card>
                                <q-card-section>
                                  안녕하세요 고객님, 재입고 예정 없습니다.
                                </q-card-section>
                              </q-card>
                            </q-expansion-item>
              </th>
            </tr>
            <tr>
              <th class="text-middle">3</th>
              <th class="text-right">
                <q-expansion-item
                              label="케이스 환불 문의합니다.">
                              <q-card>
                                <q-card-section>
                                  안녕하세요 고객님, 고객센터로 연락부탁드립니다.
                                </q-card-section>
                              </q-card>
                            </q-expansion-item>
              </th>

            </tr>
          </tbody>
        </q-markup-table>
      </div>

      <div class="LoginButton" >
              <div class="q-pa-md q-gutter-md">
                <q-btn style="color: white; background-color: #F79a38; width: 150px; margin: 0 auto; display: block; padding: 10px; margin-top: 10px;" >
                  <div style="font-size: 15px; font-weight: 900;">글쓰기</div>
                </q-btn>
            </div>
          </div>

  </div>
</body>
 <Footer></Footer>
    </template>

    <script>
    import Header from 'src/components/Home/Header.vue';
    import Footer from '../components/Home/Footer.vue';
    import { ref } from 'vue'



    export default{
      setup () {
      return {
        separator: ref(),
        separatorOptions: [
          {  value: 'vertical' }
        ]
      }
    },
      components: { Header, Footer }
    }
    </script>


<script>


  </script>



    <style>
    .customerService1{
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      font-family: 'Rubik', sans-serif;
      margin-bottom: 70px;
      margin-top: 70px;
    }

    .customerService2{
    margin: 0 auto;
    /* border-top: 5px solid black;
    border-bottom: 5px solid black; */
    padding-bottom: 20px;
    width: 100%;
    }

    </style>
