var MyPlugin = {
    install(Vue) {
        Vue.directive('my-plugin', function(el) {

        })

        Vue.mixin({
            created() {
                console.log('global mixin')
            }
        })

        Vue.prototype.$myPlugin = 'MyPlugin!'
    }
}

// Vue.use(MyPlugin)

var windowPlugin = {
    install(Vue) {
        var store = new Vue({
            data: { scrollY: 0 }
        })

        var timer = null
        window.addEventListener('scroll', function() {
            if(timer === null) {
                timer = setTimeout(function() {
                    store.scrollY = window.scrollY
                    clearTimeout(timer)
                    timer = null
                }, 200)
            }
        })

        Vue.prototype.$window = store.$data
    }
}

Vue.use(windowPlugin)

Vue.component('my-component', {
    template: `<div>{{ scrollY }}</div>`,
    computed: {
        scrollY() {
            return this.$window.scrollY
        }
    }
})

const app = new Vue({
    el: '#app',
})