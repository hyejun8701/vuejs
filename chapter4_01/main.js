const app = new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 600
    },
    computed: {
        halfWidth() {
            return this.width / 2
        },
        halfHeight() {
            return this.height / 2
        },
        halfPoint() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        }
    },
    methods: {
        log() {
            console.log(this.halfWidth)
        }
    }
})