$(document).on('click', '[data-update]', function() {// html5 부터는 data-* 로 쓸 수 있는 attribute 가 있다.
    $('#message').val($(this).attr('data-update'))
    $('#message')[0].dispatchEvent(new Event('input'))
})
const app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
        handleInput(event) {
            console.log(event.target.value)
        }
    }
})