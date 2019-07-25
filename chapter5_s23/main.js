Vue.component('comp-child', {
    template: `
    <p>
        {{ val }}
    </p>
    `,
    props: ['val']
})

Vue.component('comp-child2', {
    template: `<p id="child" class="child">ChildComponent</p>`
})

Vue.component('comp-child3', {
    template: `<li>{{ name }} HP.{{ hp }}</li>`,
    props: ['name', 'hp']
})

Vue.component('example', {
    template: `<p>example {{this.$props}}</p>`,
    props: {
        propA: Number,
        propB: [String, Number],
        propC: {
            type: String,
            required: true
        },
        propD: {
            type: Number,
            default: 100
        },
        propE: {
            type: Object,
            default: function() {
                return { message: 'hello' }
            }
        },
        propF: {
            validator: function(value) {
                console.log(value)
                return value > 10
            }
        }
    }
})

Vue.component('comp-child4', {
    template: `<button v-on:click="handleClick">이벤트 호출하기</button>`,
    methods: {
        handleClick() {
            this.$emit('childs-event')
        }
    }
})

Vue.component('comp-child5', {
    template: `<li>{{ name }} HP.{{ hp }}\
        <button v-on:click="doAttack">공격하기</button>
    </li>`,
    props: { id:Number, name:String, hp:Number },
    methods: {
        doAttack() {
            this.$emit('attack', this.id)
        }
    }
})

Vue.component('my-icon', {
    template: `<button>클릭</button>`,
    methods: {
        
    }
})

const bus = new Vue({
    data: {
        count: 0
    }
})

Vue.component('comp-a', {
    template: '<button @click="fnBus">이벤트 버스 실행</button>',
    methods: {
        fnBus() {
            console.log('emit')
            bus.$emit('bus-event')
        }
    }
})

Vue.component('comp-b', {
    template: '<p>{{ bus.count }}</p>',
    computed:{
        bus: function() {
            return bus.$data
        }
    },
    created() {
        bus.$on('bus-event', function() {
            console.log('comp-b bus on!')
            this.count++
        })
    }
})

Vue.component('comp-child6', {
    template: `<div v-if="open">Child Component Open!</div>`,
    data() {
        return {
            open: false
        }
    },
    created() {
        this.$on('open', function() {
            this.open = !this.open
        })
    }
})

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: [
            { id: 1, name: '슬라임', hp: 100 },
            { id: 2, name: '고블린', hp: 200 },
            { id: 3, name: '드래곤', hp: 500 }
        ],
        object: {
            propC: 'test',
            propF: 11
        }
    },
    methods: {
        parentsMethod() {
            alert('이벤트를 받았습니다!')
        },
        handleAttack(id) {
            var item = this.list.find((el) => {
                return el.id === id
            })

            if(item !== undefined && item.hp > 0) {
                item.hp -=10
            }
        },
        handleClick() {
            console.log('컴포넌트 루트요소의 DOM 이벤트')
        },
        childRef() {
            this.$refs.child.$emit('open')
        }
    }
})
