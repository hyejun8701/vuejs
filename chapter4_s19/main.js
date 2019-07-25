Vue.directive('focus', {
    inserted(el) {
        el.focus()
    }
})

new Vue({
    el: '#app',
    data: {
        video1: false,
        video2: false
    },
    directives: {
        // focus: {
        //     inserted(el) {
        //         el.focus()
        //     }
        // }

        video(el, binding) {
            if(binding.value !== binding.oldValue) {
                binding.value ? el.play() : el.pause()
            }
        }
    }
})