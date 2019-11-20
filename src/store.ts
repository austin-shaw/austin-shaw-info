import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: 'MACC Mobile',
        desc: 'An enterprise web app made with Angular. This website is a ' +
              'companion app to a customer management suite. The app has PWA ' +
              'functionality and offline saving and editing capabilities.',
        image: require('./assets/mm-logo.png'),
        buttons: [
          {
            color: 'black',
            href: 'https://dev.maccnet.com/',
            icon: 'fas fa-search'
          },
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/vue-rest-test',
            icon: 'fab fa-github'
          }
        ],
        chips: [
          {
            color: 'red',
            text: 'Angular',
            icon: require('./assets/logo.png')
          },
          {
            color: 'black',
            text: 'Typescript',
            icon: 'fab fa-github'
          },
          {
            color: 'black',
            text: 'C#',
            icon: 'fab fa-github'
          },
          {
            color: 'black',
            text: 'Swagger',
            icon: 'fab fa-github'
          }
        ]
      },
      {
        title: 'Selectel Wireless App',
        desc: 'A native Android App I was contracted to build for Selectel Wireless. The App gave users the ability to make payments on a plan and check a plan"s status. Disclaimer: It was Selectel"s responsibilty to maintain the API that the App relied on. Unfortunately, the API only funtioned for a short time after the App was released, and Selectel elected not to fix it. It might be foolish of me to include this project in a portfolio as the ratings are not good, but i"m still proud of the App, and Selectel was happy with my work, even though the project was put on hold.',
        image: require('./assets/sl-logo.jpg'),
        buttons: [
          {
            color: 'black',
            href: 'https://play.google.com/store/apps/details?id=stw.stwx20',
            icon: 'fas fa-search'
          }
        ]
      },
      {
        title: "Nebraska's Natural Resource District",
        desc: "Consulted Nebraskas's NRD on a new database design and the conversion of old data into the new database.",
        image: require('./assets/nrd-logo.png'),
        buttons: [
          {
            color: 'black',
            href: 'https://www.nrdnet.org/',
            icon: 'fas fa-info-circle'
          }
        ]
      },
      {
        title: 'Central Community College',
        desc: 'Consulted on a new course covering Vue.js. Provided course materials for initial setup and getting started, and suggested projects for students. ',
        image: require('./assets/ccc-logo.jpg'),
        buttons: [
          {
            color: 'black',
            href: 'https://www.cccneb.edu/',
            icon: 'fas fa-info-circle'
          }
        ]
      },
      {
        title: 'Arlington Youth Foundation',
        desc: 'Perform yearly maintenance on their website and setup the website for ticket sales for their annual Wild Game Feed.',
        image: require('./assets/ayf-logo.jpg'),
        buttons: [
          {
            color: 'black',
            href: 'https://www.arlingtonyouthfoundation.com',
            icon: 'fas fa-search'
          }
        ]
      },
      {
        title: 'Notes Anywhere',
        desc: 'A web app made with Vue.js. Keep track of all of your notes from any device. Takes advantage of PWA to "install" the app on a users device.',
        image: require('./assets/na-logo.png'),
        buttons: [
          {
            color: 'black',
            href: 'https://www.notesanywhere.app',
            icon: 'fas fa-search'
          },
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/notes-anywhere',
            icon: 'fab fa-github'
          }
        ]
      },
      {
        title: 'Smoke Test',
        desc: 'A web app made with Vue.js. Test web apis from a browser application - comes in handy when testing CORS.',
        image: require('./assets/smoke-test-logo-alt-9.png'),
        buttons: [
          {
            color: 'black',
            href: 'https://www.silentmaelstrom.com',
            icon: 'fas fa-search'
          }
        ]
      },
      {
        title: 'Rest API Test',
        desc: 'A web app made with Vue.js. Test web apis from a browser application - comes in handy when testing CORS.',
        image: require('./assets/smoke-test-logo-alt-9.png'),
        buttons: [
          {
            color: 'black',
            href: 'https://www.restapitest.com',
            icon: 'fas fa-search'
          },
          {
            color: 'black',
            href: 'https://github.com/austin-shaw/vue-rest-test',
            icon: 'fab fa-github'
          }
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
