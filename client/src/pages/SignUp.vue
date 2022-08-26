<template>
<Header></Header>
    <div class="name">
    이름
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 300px">
            <q-input outlined v-model="text" :dense="dense" />
        </div>
      </div>
    </div>
    <div class="birth">
      <label for='name'>Name:</label>
      <input type='text' id='name' style="width: 900;" />
    </div>

    <div class="phone">
      <tr>
        <td> 이름</td>
        <td>
          <div class="q-gutter-y-md column" >
            <q-input outlined v-model="text" :dense="dense" />
        </div>
        </td>
      </tr>
    </div>

</template>

<script>
import Header from 'src/components/Home/Header.vue';
export default{
    components: { Header }
}
</script>

<style>
.birth{
   height: 50px;
  background: grey;
  display: flex;
  align-items: center
}
.phone{
  max-width: 900px
}

</style>
