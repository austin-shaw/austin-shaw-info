<template>
  <v-app>
    <!-- <v-toolbar color="#3d5a6c" app> -->
      <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
          <span>Austin</span>
          <span class="font-weight-light"> Shaw</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          flat
          href="https://github.com/austin-shaw"
          target="_blank"
        >
          <v-icon>fab fa-github</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <!-- <About/> -->
      <Portfolio/>
    </v-content>
  </v-app>
</template>

<script>
import About from './views/About'
import Portfolio from './views/Portfolio'

export default {
  name: 'App',
  components: {
    About,
    Portfolio
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

@keyframes example {
  from {background-color: rgb(0, 255, 191);}
  to {background-color: rgb(0, 255, 191);}
}

/* The element to apply the animation to */
.v-toolbar{
  /* background-color: rgb(12, 223, 205); */
  /* background-image: linear-gradient(-90deg, rgb(0, 255, 191), rgb(255, 255, 255)); */
  /* animation-name: example;
  animation-duration: 4s; */
}

</style>
