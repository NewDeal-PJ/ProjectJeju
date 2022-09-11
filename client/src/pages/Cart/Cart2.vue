<template>
  <Header></Header>
  <body>
    <div id="join-wrap">

          <div class="cartInfo2" style="text-align: center;">
            <table class="jointable" style="width: 1200px;  height: 180px; padding: 30px; margin-left: 140px;">

              <div  style=" margin:0 auto;">

      <q-markup-table :separator="separator" flat >
        <thead>
          <tr>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7">  </th>
            <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 상품정보 </th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 배송비</th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 수량</th>
            <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> 상품금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-middle">사진</th>
            <th class="text-middle">아이폰</th>
            <th class="text-middle">3,000</th>
            <th class="text-middle">1</th>
            <th class="text-middle">18,300</th>
          </tr>

        </tbody>
      </q-markup-table>
      </div>

            </table>
          </div>

      <table class="jointable" style="width: 1200px; height: 200px; padding: 30px; margin-left: 140px;">
        <q-markup-table :separator="separator" flat >
            <thead>
              <tr>
                <td colspan='2'  style=" text-align: center; font-size: 15px; background-color: #FAEBD7"> 배송정보 </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-right"> 수령인</th>
                <th class="text-middle"><q-input filled v-model="text" :dense="dense"  style="max-width: 450px;" /></th>

              </tr>

              <tr>
                <th class="text-right"> 연락처</th>
                <th class="text-middle"><q-input filled v-model="text" :dense="dense"  style="max-width: 450px;" /></th>

              </tr>

              <tr>
                <th class="text-right">배송주소</th>

                <th class="text-middle">
                  <div class="shippingInformation">
                      <div style="display: flex;">
                      <q-input type="text"
                      filled v-model="postCode" placeholder="우편번호" :dense="dense"/>
                      <input type="button" @click="execDaumPostcode()" value="우편번호 찾기">
                      </div>
                  <br>
                  <q-input type="text"
                  filled :dense="dense" id="address" placeholder="주소"/>

                  <br>
                  <q-input type="text"
                  filled :dense="dense" id="detailAddress"
                  placeholder="상세주소"/>
                  <br>
                  <q-input type="text"
                  filled :dense="dense" id="extraAddress" placeholder="참고항목"/>
                </div>

                </th>
              </tr>


            </tbody>
          </q-markup-table>



        </table>

    </div>

    <div class="cart2Button" >
            <div class="q-pa-md q-gutter-md">
              <q-btn style="color: white; background-color: #F79a38; width: 150px;
              height: 30px; margin: 0 auto; display: block; " >
              <div style="font-size: 15px; font-weight: 900;
              font-family: 'Noto Sans KR', sans-serif;">결제하기</div>
              </q-btn>
            </div>
          </div>

  </body>
 <Footer></Footer>
  </template>

  <script>
import Header from 'src/components/Home/Header.vue';
import Footer from '../../components/Home/Footer.vue';


  export default {
    data() {
        return {
            postcode: "",
            address: "",
            extraAddress: "",
        };
    },
    methods: {
        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    if (this.extraAddress !== "") {
                        this.extraAddress = "";
                    }
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        this.address = data.roadAddress;
                    }
                    else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        this.address = data.jibunAddress;
                    }
                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === "R") {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            this.extraAddress += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            this.extraAddress +=
                                this.extraAddress !== ""
                                    ? `, ${data.buildingName}`
                                    : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (this.extraAddress !== "") {
                            this.extraAddress = `(${this.extraAddress})`;
                        }
                    }
                    else {
                        this.extraAddress = "";
                    }
                    // 우편번호를 입력한다.
                    this.postcode = data.zonecode;
                },
            }).open();
        },
    },
    components: { Header, Footer }
};
  </script>

  <style>

    .shippingInformation{
      max-width: 450px;
    }

  </style>
