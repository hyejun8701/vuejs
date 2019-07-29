Vue.component('my-circle', {
    template: `<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>`,
    props: {
        fill: String
    }
})

const app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            { id: 1, name: '사과', price: 100 },
            { id: 2, name: '바나나', price: 200 },
            { id: 3, name: '딸기', price: 300 }
        ],
        toggle: false,
        show: true
    },
    computed: {
        sortedList() {
            return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
        },

        fill() {
            return this.toggle ? 'lightpink' : 'skyblue'
        }
    },
    methods: {
        enter(el, done) {
            console.log('enter')
            setTimeout(done, 1000)
        },
        afterEnter(el) {
            console.log('afterEnter')
        }
    }
})