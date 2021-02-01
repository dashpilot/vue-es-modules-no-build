import Header from './components/header.js'
import Post from './components/wdgt-post.js'

const App = {
  el: 'main',

  data() {
    return {
      entries: [{
          title: "Hello",
          body: "Lorem ipsum dolor site amet"
        },
        {
          title: "Hi",
          body: "This is my second message"
        }
      ],
    }
  },

  components: {
    'app-header': Header,
    'wdgt-post': Post
  },

  mounted() {
    console.log('Application mounted.')
  }
}


window.addEventListener('load', () => {
  new Vue(App)
})
