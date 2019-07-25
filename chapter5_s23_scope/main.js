Vue.component('comp-child', {
    template: `<p>comp-child..</p>`,
    created() {
        this.$emit('childs-event', { id: 1, name: '<새로운 이름>' })
    }
})

new Vue({
    el: '#app',
    data: {
        parentsData: '<부모의 데이터>'
    },
    methods: {
        parentsMethod(childsArg, parentsArg) {
            console.log(childsArg, parentsArg)
        }
    }
})
