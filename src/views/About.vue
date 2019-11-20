<template>
  <div class="about">
    <v-layout column>
      <v-flex xs1 ml-2 mr-2>
        <div class="home">
                      <!-- <v-layout>
              <v-img
                src="../assets/logo.png"
                contain
                aspect-ratio="1.3"
              ></v-img>
            </v-layout> -->
          <img
            alt="Vue logo"
            src="../assets/logo.png"
            contain
            aspect-ratio="1.3"
          >
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        </div>

      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex sx10>
        <p>
          My name is Austin Shaw, and I am a web and desktop application 
          developer. I also have experience deploying and configuring 
          servers.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>
