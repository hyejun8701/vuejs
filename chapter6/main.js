Vue.component('my-label', {
    template: `<div>my-label {{ count }}</div>`,
    // data() {
    //     return {
    //         count: 0
    //     }
    // },
    props: {
        count: Number
    }
})

const app = new Vue({
    el: '#app',
    data: {
        show: true,
        count: 0
    }
})