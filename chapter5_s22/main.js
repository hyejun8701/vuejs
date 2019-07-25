Vue.component('my-component', {
    template: `<p>
    {{ message }}
    </p>`,
    data: function() {
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {

    }
})

var localComponent = {
    template: '<p>MyLocalComponent</p>'
}

new Vue({
    el: '#app',
    components: {
        'my-local-component': localComponent
    }
})