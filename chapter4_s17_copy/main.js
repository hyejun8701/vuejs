const app = new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'apple', price: 100 },
            { id: 2, name: 'banana', price: 200 },
            { id: 3, name: 'strawberry', price: 300 },
            { id: 4, name: 'orange', price: 400 },
            { id: 5, name: 'melon', price: 500 }
        ]
    },
    created() {
        this.$watch(function() {
            return Object.assign([], this.list)
        }, function(newVal, oldVal) {
            console.log(`깊은 복사 -> ${newVal.length}, ${oldVal.length}`)
        })

        this.$watch(function() {
            return { value: this.list, length: this.list.length }
        }, function(newVal, oldVal) {
            console.log(`속성 추가 -> ${newVal.length}, ${oldVal.length}`)
        })
    },
    watch: {
        list: {
            handler(newVal, oldVal) {
                console.log(`배열 list 속성감시해서 비교 -> ${newVal.length}, ${oldVal.length}`)
            },
            deep: true,
        }
    }
})