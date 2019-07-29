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

var mixin = {
    created() {
        console.log('mixin hook')
        this.hello()
    },
    methods: {
        hello() {
            console.log('hello from mixin!')
        }
    }
}

Vue.component('my-component-a2', {
    mixins: [mixin],
    template: `<div class="my-component-a">component A</div>`,
    methods: {
        hello() {
            console.log('component hello method')
        }
    },
    created() {
            console.log('component hello created')
    }
})

Vue.component('my-component-b2', {
    mixins: [mixin],
    template: `<div class="my-component-b">component B</div>`
})

Vue.component('child-comp1',{
    template: `<div class="child"></div>`,
    data() {
        return {
            show: false
        }
    }
})
Vue.component('child-comp2',{
    template: `<div class="child" v-if="show">
    컴포넌트의 루트 템플릿
    </div>`,
    data() {
        return {
            show: false
        }
    }
})

// const app = new Vue({
//     el: '#app',
//     data: {
//         componentType: ['my-component-a', 'my-component-b'],
//         current: 0,
//         show: false
//     },
//     computed: {
//         component() {
//             return this.componentType[this.current]
//         }
//     }
// })

Vue.component('comp-board', {
    template: `<div>Message Board</div>`
})

Vue.component('comp-form', {
    template: `<div>Form<textarea v-model="message"></textarea></div>`,
    data() {
        return {
            message: ''
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        current: 'comp-board',
    }
})
