Vue.component('comp-child', {
    template: `<div>여기에 슬롯을 넣음 -> <slot>아무것도 없었다</slot></div>`
})

Vue.component('comp-child2', {
    template: `
    <section class="comp-child2">
        <header>
            <slot name="header">디폴트 타이틀</slot>
        </header>
        <div class="content">
            <slot>디폴트 콘텐츠</slot>
        </div>
        <slot name="footer"></slot>
    </section>`
})

Vue.component('comp-child3', {
    template: `
    <section class="comp-child3">
        <slot name="text1">텍스트1 디폴트</slot>
        <slot name="text2">텍스트2 디폴트</slot>
    </section>`
})

Vue.component('comp-child4', {
    template: `<div>
        <slot text="Hello!" text2="zz"></slot>
    </div>`
})

Vue.component('comp-child5', {
    template: `<ul class="comp-child5">
        <slot v-for="item in list" v-bind:item="item"></slot>
    </ul>`,
    data() {
        return {
            list: ['A', 'B', 'C']
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'parent scope!'
    }
})
