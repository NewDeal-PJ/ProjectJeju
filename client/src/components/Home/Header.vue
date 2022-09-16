<template>
  <header :class="{original_color: scrollPosition < 80, change_color: scrollPosition > 80}">
    <nav>
      <div class="branding">
        <i class="fas fa-shoe-prints"></i>
        <a href="#">J-TRACK</a>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><a href="#/api/map">Home</a></li>
        <li><a href="#/api/shop">Shop</a></li>
        <li><a href="#/api/cart1">Cart({{cart.length}})</a></li>
        <a v-if="account.id">
          <li><a :href="myPageUrl + account.id ">MyPage</a></li>
        </a>
        <a v-if="social.id">
          <li><a :href="myPageUrl + social.id ">MyPage</a></li>
        </a>
        <div v-if="account.id || social.id">
          <li><a href="#/api/logout" @click='logout()'>LogOut</a></li>
        </div>

        <div v-else>
          <li><a href="#/api/login">LogIn</a></li>
        </div>
        <li><a href="#/api/CustomerService">Q&A</a></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{ 'icon-active': mobileNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a href="#/api/map">Home</a></li>
          <li><a href="#/api/shop">Shop</a></li>
          <li><a href="#/api/cart1">Cart({{cart.length}})</a></li>

          <a v-if="account.id">
            <li><a :href="myPageUrl + account.id">MyPage</a></li>
          </a>
          <a v-if="social.id">
          <li><a :href="myPageUrl + social.id ">MyPage</a></li>
        </a>
          <div v-if="account.id || social.id">
            <li><a href="#/api/logout" @click='logout()'>LogOut</a></li>
          </div>

          <div v-else>
            <li><a href="#/api/login">LogIn</a></li>
          </div>
          <li><a href="#/api/CustomerService">Q&A</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { reactive } from 'vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

export default {
  name: "navigation",
  data() {
    const account = {
      id: '',
      name: ''
    }
    const  social = {
        id : '',
        method : '',
        nickname : ''
    }
    // 로그인 정보 담아서 보내주려면 객체를 만들어줘야죠~
    const form = {
      loginId: "",
      loginPw: ""
    }
    const $q = useQuasar()
    const cart = ref([])
    const myPageUrl = "#/api/mypage/";
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      scrollPosition: null,
      $q,
      cart,
      myPageUrl,
      account,
      social,
      form,
      cart: JSON.parse(localStorage.getItem("cart")) || ""
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    // 백엔드의 계정정보를 호출
    axios.get("/api/login").then((res) => {
      this.account = res.data;
      if(this.account.id === ''){
        window.location.href = '#/api/login';
        alert("로그인 해주세요")
      }
    });
    // 백엔드의 소셜 계정정보를 호출
    axios.get("/api/kakao_login").then((res) => {
      this.social = res.data;
      console.log(this.social)
    });
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.screenY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    updateScroll(){
         this.scrollPosition = window.scrollY
      },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    logout() {
      axios.delete("/api/logout").then((res) => {
        this.$q.notify({
          color: 'teal',
          position: 'center',
          message: '로그아웃 되었습니다.'
        })
        this.account.name = "";
        this.account.id = "";
        this.social.id = "";
        this.social.method = "";
        this.social.nickname = "";
        window.location.href = '#/api/login';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {

  z-index: 99;
  width: 100%;
  position: sticky;
  transition: 0.5s ease all;
  top: 0;


  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;


    .branding > a {
      font-family: 'Bungee', cursive;
      font-size: 35px;
      white-space: nowrap;
    }

    @media (min-width: 1293px) {
      max-width: 1293px;
    }

    ul,
    .link {
      font-weight: 500;
      color: white;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    li:hover {
      background-color: bisque;
      border-radius: 5px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: aqua;
        border-color: aqua;
      }
    }

    .branding {
      display: flex;
      align-items: center;
      font-size: 29px;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }


    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      font-family: 'Raleway', sans-serif;
      font-size: 16px;

    }



    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;



      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 190px;
      height: 100%;
      background-color: white;
      top: 0;
      left: 0;
      margin: 0;
      overflow: hidden;
      overflow-y: auto;
      padding-left: 0;

      li > a {
          color: orange;
        }

      li {
        margin-left: 0;
        // .link{
        //   color: black;
        // }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgb(0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgb(0, 0, 0.06);
      }
    }
  }
}

a {
  text-decoration: none;
}



.original_color {
  background-color: antiquewhite;
  color: green;
  width: 100%;

  nav > .icon {
    color: green;
  }

  nav > i {
    color: orange;
  }

  a{
    color: orange;
  }

}

.change_color{
  background-color: white;
  	// #ECF7E1;

  color: black;
  width: 100%;


  nav > .icon{
    color: green;
  }

  nav > .branding > i{
    color: green;
  }

  nav > .branding > a {
    color: orange;
  }

  a{
    color: black;
  }


  }


</style>
