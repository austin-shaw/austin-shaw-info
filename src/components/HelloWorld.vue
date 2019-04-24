<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex>
        <h1 class="display-1 font-weight-bold mb-3">Projects</h1>

        <p class="subheading font-weight-regular">
          A selection of applications and websites I've worked on over the years; some personal, some freelance.
        </p>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    
    <v-layout 
      v-for="(proj, i) in projects"
      :key="i"
      row
    >
      <v-flex>
        <v-layout>
          <v-flex xs11>
            <h2 class="headline font-weight-bold mb-3">{{ proj.title }}</h2>
            <p> {{ proj.desc }} </p>
            
            <!-- <v-chip small outline color="green" text-color="black">
              <v-avatar>
                <img src="../assets/logo.png">
              </v-avatar>
              Vue
            </v-chip> -->

          </v-flex>
          <v-divider vertical></v-divider>

          <v-flex xs1 align-self-center>
            <v-layout justify-space-between column fill-height>
              <v-flex
                v-for="(btn, j) in proj.buttons"
                :key="j"
                row
              >
                <v-btn 
                  flat 
                  icon 
                  :color="btn.color"
                  :href="btn.href" 
                  target="_blank"
                >
                  <v-icon>{{ btn.icon }}</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: 'Notes Anywhere',
        desc: 'A web app made with Vue.js. Keep track of all of your notes from any device. Takes advantage of PWA to "install" the app on a users device.',
        buttons: [
          {
            color: 'black',
            href: 'https://www.notesanywhere.app',
            icon: 'fas fa-search',
          },
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/notes-anywhere',
            icon: 'fab fa-github',
          }
        ]
      },
      {
        title: 'Selectel Wireless App',
        desc: 'A native Android App I was contracted to build for Selectel Wireless. The App gave users the ability to make payments on a plan and check a plan"s status. Disclaimer: It was Selectel"s responsibilty to maintain the API that the App relied on. Unfortunately, the API only funtioned for a short time after the App was released, and Selectel elected not to fix it. It might be foolish of me to include this project in a portfolio as the ratings are not good, but i"m still proud of the App, and Selectel was happy with my work, even though the project was put on hold.',
        buttons: [
          {
            color: 'black',
            href: 'https://play.google.com/store/apps/details?id=stw.stwx20',
            icon: 'fas fa-search',
          },
        ]
      },
      {
        title: 'This Site',
        desc: 'This site itself is a web app made with Vue.js & Vuetify.',
        buttons: [
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/notes-anywhere',
            icon: 'fab fa-github',
          },
        ]
      },
      {
        title: 'Various Wordpress Sites',
        desc: 'This site itself is a web app made with Vue.js & Vuetify.',
        buttons: [
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/notes-anywhere',
            icon: 'fab fa-github',
          },
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/notes-anywhere',
            icon: 'fab fa-github',
          }
        ]
      },
    ],
  })
}
</script>

<style>

</style>
