<template>
    <header :class="{ 'scrolled-nav': scrolledNav}">
      <nav>
        <div class="branding" style="height: 10vh; margin: 0 auto;">
          <div class="branding">
        <i class="fas fa-shoe-prints"></i>
        <a href="#/api/map">J-TRACK</a>
      </div>
        </div>
      </nav>
    </header>
  </template>

  <script>

  </script>

  <style lang="scss" scoped>
  header {
    background-color: antiquewhite;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: white;
    top: 0;



    nav {
      position: relative;
      display: flex;
      flex-direction: row;
      transition: 0.5s ease all;
      white-space: nowrap;




         .branding > a {
      font-family: 'Bungee', cursive;
      font-size: 35px;
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

        i {
          color: green;
        }
      }

      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
      }

      .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
        color: green;

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
    color: orange;
    display: contents;
  }


  </style>
