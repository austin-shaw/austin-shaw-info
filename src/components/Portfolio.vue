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
          <v-flex xs2 align-self-center mr-2 ml-2>
            <v-layout justify-space-between column fill-height>
              <v-img
                v-bind:src="proj.image"
                contain
                aspect-ratio="1.3"
              ></v-img>
            </v-layout>
          </v-flex>

          <v-divider vertical></v-divider>

          <v-flex xs10 ml-2>
            <h2 class="headline font-weight-bold mb-3">{{ proj.title }}</h2>
            <p> {{ proj.desc }} </p>

              <v-chip 
                v-for="(chip, k) in proj.chips" 
                :key="k" 
                row
                small 
                outline 
                :color="chip.color"
                :text-color="chip.color"
              >
                <!-- <v-avatar><img :src="chip.icon"/></v-avatar> -->
                {{ chip.text }}
              </v-chip>

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
  data () {
    return {
      projects: this.$store.state.projects
    }
  }
}
</script>

<style>

</style>
