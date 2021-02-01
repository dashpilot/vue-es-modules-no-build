const template = `
  <section>
  <h1>{{item.title}}</h1>
  <p>{{item.body}}</p>
  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('Footer component mounted.')
  }
}