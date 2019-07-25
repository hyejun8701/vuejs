Vue.component('functional-component', {
    functional: true,
    render(createElement, context) {
        return createElement('div', context.props.message)
    },
    props: { message: String },
})

Vue.component('my-component-a', {
    template: `<div class="my-component-a">component A</div>`
})

Vue.component('my-component-b', {
    template: `<div class="my-component-b">component B</div>`
})

const app = new Vue({
    el: '#app',
    data: {
        componentType: ['my-component-a', 'my-component-b'],
        current: 0
    },
    computed: {
        component() {
            return this.componentType[this.current]
        }
    }
})
