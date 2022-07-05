<template>
  <div id="app">
    <div class="py-2 bg-header">
      <div class="my-container text-white d-flex justify-content-between align-items-center" style="font-size: 11px;">
        <div>
          <i class="fa-solid fa-clock me-2"></i>
          <span>Open Hours: Mon - Sat - 09:00 - 18:00</span>
        </div>
        <div>
          <div class="d-flex gapped align-items-center">
            <div v-for="(info,i) in agencyInfo" :key="i" class="d-none d-md-block">
              <i :class="`fa-solid ${info.icon} me-2`"></i>
              <span>{{info.text}}</span>
            </div>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>  
      </div>
    </div>
    <TheHeader/>
    <TheMain/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import TheFooter from './components/TheFooter.vue'
import {state} from './store'

export default {
  name: 'App',
  components: {TheHeader,TheMain,TheFooter},
  computed: {
    agencyInfo() {
      return state.agencyInfo.slice(0,2)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import './assets/scss/general';

#app {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
}
.gapped {
  gap: 30px;
}
</style>
