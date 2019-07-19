const app = new Vue({
    el: '#app',
    data: {
        list: [],
    },
    created: function() {
        axios.get('list.json').then(function(res) {
            this.list = res.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        })
    }
})