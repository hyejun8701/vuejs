Vue.component('my-calendar', {
    template: `<div class="my-calendar">{{ value }}</div>`,
    props: { value: String },
    created() {
        this.$emit('input', '2018-01-01')
    }
})

Vue.component('my-calendar2', {
    template: `<div class="my-calendar">{{ current }}</div>`,
    model: {
        prop: 'current',
        event: 'change'
    },
    props: { current: String },
    created() {
        this.$emit('change', '2018-01-01')
    }
})

Vue.component('my-component', {
    template: `<div class="my-component">\
        <p>이름.{{ name }} HP.{{ hp }}</p>\
        <p>이름 <input v-model="localName"></p>\
        <p>HP <input size="5" v-model.number="localHp"></p>\
    </div>`,
    props: {
        name: String,
        hp: Number
    },
    computed: {
        localName: {
            get() {
                return this.name
            },
            set(val) {
                this.$emit('update:name', val)
            }
        },
        localHp: {
            get() {
                return this.hp
            },
            set(val) {
                this.$emit('update:hp', val)
            }
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        date: null,
        name: '슬라임',
        hp: 100
    },
    methods: {
        handleInput(e) {
            this.name = e.target.value
        }
    }
})
