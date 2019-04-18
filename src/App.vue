<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Austin</span>
        <span class="font-weight-light"> Shaw</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        href="https://github.com/austin-shaw"
        target="_blank"
      >
        <!-- <span class="mr-2">Latest Release</span> -->
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
