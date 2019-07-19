const app = new Vue({
    el: '#app',
    data: {
        name: '키메라',
        list: [
            { id: 1, name: '슬라임', hp: 100 },
            { id: 2, name: '고블린', hp: 200 },
            { id: 3, name: '드래곤', hp: 500 }
        ]
    },
    created: function() {
        this.list.forEach(function(item) {
            this.$set(item, 'active', false)
        }, this)
    },
    methods: {
        doAdd: function() {
            const max = this.list.reduce(function(a, b) {
                return a > b.id ? a : b.id
            }, 0)

            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index) {
            this.list.splice(index, 1)
        },
        change: function() {
            this.$set(this.list, 0, { id: 1, name: '대왕 슬라임', hp: 500 })
        },
        doAttack: function(index) {
            this.list[index].hp -= 10

            this.list = this.list.filter(function(el) {
                return el.hp > 0
            })
        }
    }
})