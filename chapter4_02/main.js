const app = new Vue({
    el: '#app',
    data: {
        width: 800
    },
    computed: {
        halfWidth: {
            get() {
                return this.width / 2
            },
            set(val) {
                this.width = val * 2
            }
        },
        computedData() {
            return Math.random()
        }
    },
    methods: {
        methodData() {
            return Math.random()
        }
    }
})