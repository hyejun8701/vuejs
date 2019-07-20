const app = new Vue({
    el: '#app',
    data: {
        show: true,
        message: 'Hello Vue.js'
    },
    methods: {
        handle(e) {
            console.log(e)
        },
        handleInput(event) {
            this.message = event.target.value
        },
        handle2(comment) {
            console.log(comment)
        }
    }
})