const app = new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'apple', price: 100 },
            { id: 2, name: 'banana', price: 200 },
            { id: 3, name: 'strawberry', price: 300 },
            { id: 4, name: 'orange', price: 400 },
            { id: 5, name: 'melon', price: 500 }
        ],
        edited: false,
        value: 0,
        width: 0,
        height: 0,
        num1: 0,
        num2: 0
    },
    created() {
        // this.$watch('list', function(newVal, oldVal) {
        //     console.log('instance method')
        // }, {
        //     deep: true,
        //     immediate: true
        // })

        // const unwatch = this.$watch('list', function() {
        //     this.edited = true
        //     console.log('watch 한번만 실행')
        //     unwatch()
        // }, { deep: true })

        // this.$watch(function() {
        //     return [this.width, this.height]
        // }, function() {
        //     console.log('변경 감지!')
        // })
    },
    computed:{
        watchTarget() {
            return [this.width, this.height]
        },
        mul() {
            return this.num1 * this.num2
        }
    },
    watch: {
        // list: {
        //     handler(newVal, oldVal) {
        //         console.log('변경됨')
        //     },
        //     deep: true,
        //     immediate: true
        // }
        
        // value: _.debounce(function(newVal) {
        //     console.log(`lodash 이용해서 변경된 값 500ms 이후 보여주기 -> ${newVal}`)
        // }, 500)

        watchTarget(result) {
            console.log(`산출 속성 감시! ${result}`)
        },
        mul(result) {
            console.log(result)
            if(result == 3) {
                console.log('계산된 값은 3')
            }
        }
    }
})