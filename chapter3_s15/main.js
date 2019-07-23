const scroll = new SmoothScroll()
const app = new Vue({
    el: '#app',
    data: {
        scrollY: 0,
        timer: null
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll: function() {
            if(this.timer === null) {
                this.timer = setTimeout(function() {
                    this.scrollY = window.scrollY
                    this.timer = null
                    window.scrollTo(0, window.scrollY + 5)
                    clearTimeout(this.timer)
                }.bind(this), 200)
            }
        },
        scrollTop: function() {
            scroll.animateScroll(0)
        }
    }
})