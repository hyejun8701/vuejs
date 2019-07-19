const app = new Vue({
    el: '#app',
    data: {
        count: 0,
        wthis: null,
    },
    methods: {
        callback() {
            this.count++
        },
        increment: function() {
            // setTimeout(function() {
            //     this.count++
            //     console.log(this);
            // }, 100)// 잘못된 예 콜백함수의 this 는 window가 된다.

            // var vm = this
            // setTimeout(function() {
            //     vm.count++
            // }, 100)// 미리 다른 변수에 대입하는 방법

            // setTimeout(function() {
            //     this.count++
            // }.bind(this), 100)// bind 로 this 를 변경하는 방법

            // setTimeout(() => {
            //     // 화살표함수를 사용하면 setTimeout 이 호출되는 increment 메서드의 this 가 되므로
            //     // Vue 인스턴스에 접근할 수 있음
            //     this.count++
            // }, 100)

            setTimeout(this.callback, 100)// 익명함수가 아니라 메서드를 지정하는 방법
        }
    }
})