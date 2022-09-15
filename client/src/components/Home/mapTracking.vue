<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 90%; margin: 0 auto;">
      <q-card>
        <q-tabs
          v-model="tab"
          class="bg-grey-1"
          dense
          align="justify"
        >
          <q-tab class="text-orange" name="Day1" icon="flag" label="Day1" />
          <q-tab class="text-cyan" name="Day2" icon="flag" label="Day2" />
          <q-tab class="text-red" name="Day3" icon="flag" label="Day3" />
        </q-tabs>

      <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Day1">
            <q-markup-table :separator="separator" flat >
          <thead>
            <tr>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> Hotel </th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Restaurant </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-middle"> <q-checkbox v-model="right" /> 제주호텔</th>
              <th class="text-middle"> <q-checkbox left-label v-model="left" />제주맛집</th>

            </tr>
          </tbody>
          </q-markup-table>
          </q-tab-panel>

        <q-tab-panel name="Day2">
          <q-markup-table :separator="separator" flat >
          <thead>
            <tr>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> Hotel </th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Restaurant </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-middle"> <q-checkbox v-model="right" /> 제주호텔</th>
              <th class="text-middle"> <q-checkbox left-label v-model="left" />제주맛집</th>

            </tr>
          </tbody>
          </q-markup-table>
        </q-tab-panel>

        <q-tab-panel name="Day3">
          <q-markup-table :separator="separator" flat >
          <thead>
            <tr>
              <th class="text-middle" style="font-weight: bold; font-size: 15px; background-color: #FAEBD7"> Hotel </th>
              <th class="text-middle " style="font-weight: bold; font-size: 15px; background-color:#FAEBD7"> Restaurant </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-middle"> <q-checkbox v-model="right" /> 제주호텔</th>
              <th class="text-middle"> <q-checkbox left-label v-model="left" />제주맛집</th>

            </tr>
          </tbody>
          </q-markup-table>
          </q-tab-panel>
        </q-tab-panels>


    </q-card>




    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  

  export default {
    setup () {
      return {
        tab: ref('mails'),
        left: ref(true),
        right: ref(false),
      }
    }
  }
  </script>


<style>

</style>
