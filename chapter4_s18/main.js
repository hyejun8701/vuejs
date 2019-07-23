Vue.filter('localeNum', function(val) {
    return val.toLocaleString()
})// Vue 인스턴스 생성 전(new Vue() 전)에 전역으로 필터를 정의할 수 있다.

const app = new Vue({
    el: '#app',
    data: {
        price: 19800,
        message: 'point',
        foo: 'is',
        value: 10
    },
    filters: {
        // localeNum(val) {
        //     return val.toLocaleString()
        // }

        filter(message, foo, num) {
            console.log(message, foo, num)
        },
        filter1(val) {
            return val * val
        },
        filter2(val) {
            return val - 20
        },
        round(val) {
            return Math.round(val * 100) / 100
        },
        radian(val) {
            return val * Math.PI / 180
        }
    }
})