import Vue from '../shims-vue';
<template>
  <v-container>
    <v-layout>
      <v-flex xs2 mt-3 ml-2 mr-2>
        <v-img class="test"
          v-bind:src="myImage"
          contain
          aspect-ratio="1.3"
          
        ></v-img>
      </v-flex>
      <v-flex xs9>
        <p>
          My name is Austin Shaw, and I've been a developer for 7 years. 
          I currently do research and development on new technologies which has allowed me to experience many different aspects of programming.
          In my current position I've worked on web, desktop, and server applications.

          I've researched everything from best practices for implementing SQL Indexes, to the behaviours of service workers for PWA apps.
          I've worked with Credit Card Companies to create API's that work for both of our interests.
          I created our own API from the ground up, including a homegrown querying system that suits our needs.
          I worked on the creation of our own Mobile application.
          I've deployed applications to customers sites, and I've setup setup and 
          configured servers for customers.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      myImage: this.$store.state.myImage
    }
  }
}
</script>

<style>
.test {
  border-radius: 50%;
  /* width: 150px; */
  transform: rotate(90deg);
}
</style>
