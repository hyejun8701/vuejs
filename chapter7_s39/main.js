var MyPlugin = {
    install(Vue, options) {
        console.log(options)
    }
}

Vue.use(MyPlugin, { lang: 'ko' })

const app = new Vue({
    el: '#app',
})