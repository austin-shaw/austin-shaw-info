<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Portfolio from '@/components/Portfolio.vue' // @ is an alias to /src

@Component({
  components: {
    Portfolio
  }
})
export default class Home extends Vue {}
</script>
