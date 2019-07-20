const app = new Vue({
    el: '#app',
    data: {
        show: true,
        url: 'https://ko.vuejs.org/',
        message: 'Vue.js!',
        message2: 'Hello <strong>Vue.js!</strong>',
        toggle: true,
        aaa: "",
        bbb: ""
    },
    mounted: function() {
        console.log(this.$el)
        console.log(this.$refs.hello)
    },
    methods: {
        handleClick() {
            const count = this.$refs.count
            if(count) {
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        },
        setToggle() {
            this.toggle = !this.toggle
        }
    }
})