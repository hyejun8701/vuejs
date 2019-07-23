const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!',
        val: true,
        val2: [],
        val3: '',
        val4: [],
        preview: '',
        val5: 50,
        price: 100
    },
    methods: {
        handleInput(event) {
            this.message = event.target.value
        },
        handleChange(event) {
            const file = event.target.files[0]
            if(file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            } else {
                this.preview = ''
            }
        }
    }
})