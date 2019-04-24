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

    <v-layout row>
      <v-flex xs11>
        <h2 class="headline font-weight-bold mb-3">Notes Anywhere</h2>
        <p>
          A web app made with Vue.js. Keep track of all of your notes from any device.
        </p>
      </v-flex>
      <v-divider vertical></v-divider>

      <v-flex xs1>
        <v-layout justify-space-between column fill-height>
          <v-flex>
            <v-btn flat icon href="https://github.com/austin-shaw/notes-anywhere" target="_blank">
              <v-icon>fab fa-github</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn flat icon href="https://www.notesanywhere.app" target="_blank">
              <v-icon>fas fa-search</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs11>
        <v-divider></v-divider>
        <h2 class="headline font-weight-bold mb-3">Selectel Wireless App</h2>
        <p>
          A native Android App commissioned by Selectel Wireless. Funcionality included ability to make payments on a plan and check a plan's status. 
          Unfortunately, the App and accompanying API is no longer being maintained by Selectel.
        </p>
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex xs1 >
        <v-divider></v-divider>
        <v-layout justify-center column fill-height>
          <v-flex>
            <v-btn flat icon color="green" href="https://play.google.com/store/apps/details?id=stw.stwx20" target="_blank">
              <v-icon>fas fa-search</v-icon>
            </v-btn>
            
          </v-flex>
          <v-divider></v-divider>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs11>
        <v-divider></v-divider>
        <h2 class="headline font-weight-bold mb-3">Selectel Wireless App</h2>
        <p>
          A native Android App commissioned by Selectel Wireless. Funcionality included ability to make payments on a plan and check a plan's status. 
          Unfortunately, the App and accompanying API is no longer being maintained by Selectel.
        </p>
      </v-flex>
      <v-divider vertical></v-divider>
      <v-divider></v-divider>

      
        <v-flex xs1 align-self-center>

          <v-layout justify-space-around column fill-height>
            <v-flex>
              <v-btn flat icon color="blue" href="https://github.com/austin-shaw/notes-anywhere" target="_blank">
                <v-icon>fab fa-github</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn flat icon color="green" href="https://www.notesanywhere.app" target="_blank">
                <v-icon>fas fa-search</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs11>
        <v-divider></v-divider>
        <h2 class="headline font-weight-bold mb-3">This Site</h2>
        <p>
          A native Android App commissioned by Selectel Wireless. Funcionality included ability to make payments on a plan and check a plan's status. 
          Unfortunately, the App and accompanying API is no longer being maintained by Selectel.
        </p>
      </v-flex>
      <v-divider vertical></v-divider>
      <v-flex xs1>
        <v-divider></v-divider>
        <v-layout justify-space-around column fill-height>
          <v-flex>
            <v-btn flat icon color="green" href="https://github.com/austin-shaw/notes-anywhere" target="_blank">
              <v-icon>fab fa-github</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn flat icon color="green" href="https://www.notesanywhere.app" target="_blank">
              <v-icon>fas fa-search</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs11>
        <v-divider></v-divider>
        <h2 class="headline font-weight-bold mb-3">Selectel Wireless App</h2>
        <p>
          A native Android App commissioned by Selectel Wireless. Funcionality included ability to make payments on a plan and check a plan's status. 
          Unfortunately, the App and accompanying API is no longer being maintained by Selectel.
        </p>
      </v-flex>
      <v-divider vertical></v-divider>
      <v-divider></v-divider>

      <v-flex>
        <v-flex xs1 align-self-center>
          <v-layout justify-space-around column fill-height>
            <v-flex>
              <v-btn flat icon color="blue" href="https://github.com/austin-shaw/notes-anywhere" target="_blank">
                <v-icon>fab fa-github</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn flat icon color="green" href="https://www.notesanywhere.app" target="_blank">
                <v-icon>fas fa-search</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>

    <v-layout text-xs-center wrap>

      <v-flex xs12 mb-2>
      <v-divider></v-divider>
      <h2 class="headline font-weight-bold mb-3">Selectel Wireless App</h2>


        <p>
          A native Android App commissioned by Selectel Wireless. Funcionality included ability to make payments on a plan and check a plan's status. 
          Unfortunately, the App and accompanying API is no longer being maintained by Selectel.

          <br/>

          <v-btn flat icon href="https://play.google.com/store/apps/details?id=stw.stwx20" target="_blank">
            <v-icon>fas fa-search</v-icon>
          </v-btn>

          <v-btn flat icon color="green" href="https://github.com/austin-shaw/notes-anywhere" target="_blank">
            <v-icon>fab fa-github</v-icon>
          </v-btn>
          <p/>
        <v-divider></v-divider>
      </v-flex>



      <v-flex xs12 mb-5>

    <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuetifyjs.com'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }

    ]
  })
}
</script>

<style>

</style>
