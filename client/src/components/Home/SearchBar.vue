<template>

 <body>
<div class="parent">
    <div class="child">
        <div class="title-container">
          <div class="continer">
            <h1>제주,
              <span class="type-text">{{ typeValue }}</span>
              <span class="cursor" :class="{'typing' : typeStatus}"> &nbsp; </span>

            </h1>
          </div>

        <div>
  <div >
      <div
      style="
      bottom: 0px;
      left: 0px;
      right: 0px;
      flex-direction: row;
      justify-content: center;
      display: flex
       ">
    <q-input v-model="text" :dense="dense" placeholder="원하시는 숙소 및 식당명을 입력해주세요" style="background-color: white;"/>
    <q-btn style="background: linear-gradient(to right,#aff1da, #f9ea8f); color: black" icon="search" />
      </div>
  </div>
</div>
</div>

    </div>
    </div>
</body>
</template>

<script>
 export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['어디로 여행 갈까요?'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex:0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;

            this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
            this.charIndex += 1;

            setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;

            this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
            this.charIndex -= 1;
            setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);

        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
  .container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

h1 {
  font-size: 2.5rem;
  font-weight: normal;
  color:white;
  text-align: center;
  margin-bottom: 0;
  font-weight: bold;

  span.typed-text {
    color: #62acde;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width:4px;
    background-color: #f9ea8f;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }
}


@keyframes cursorBlink {
  49% { background-color: #fff;}
  50% { background-color: transparent;}
  50% { background-color: transparent;}
}

body {
  background-color: white;
  margin: 0px;
}

.parent {
  height: 260px;
  width: 90%;
  margin: 0 auto;
  margin-top: 110px;
  background-image: url('https://images.unsplash.com/photo-1579169825453-8d4b4653cc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center center;
}

.child {

  /* opacity: 0.8; */
  height: 100%;
  width: 100%;
}

.title-container {
  padding: 0 3rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

}


.title {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.8rem;
}

.description {
  font-size: 1.2rem;
  color: #ccc;
}


.q-btn:before {
  box-shadow: none;;
}



input :focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        max-width: 500px;
        margin: 0 auto;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .searchContainer {
        float: right;
        background: linear-gradient(to right,#aff1da, #f9ea8f);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
</style>
