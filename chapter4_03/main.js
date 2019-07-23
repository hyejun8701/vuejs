const app = new Vue({
    el: '#app',
    data: {
        budget: 300,
        limit: 2,
        list: [
            { id: 1, name: 'apple', price: 100 },
            { id: 2, name: 'banana', price: 200 },
            { id: 3, name: 'strawberry', price: 300 },
            { id: 4, name: 'orange', price: 400 },
            { id: 5, name: 'melon', price: 500 }
        ],
        order: false
    },
    computed: {
        matched() {
            return this.list.filter((el) => {
                return el.price <= this.budget
            })
        },
        limited() {
            return this.matched.slice(0, this.limit)
        },
        sorted() {
            return _.orderBy(this.limited, 'price', this.order ? 'desc' : 'asc')
        },
        filteredList() {
            return this.sorted
        }
    },
    methods: {
        
    }
})