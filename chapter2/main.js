const state = { count: 0 }
const app = new Vue({
    el: '#app',
    data: {// 리액티브 데이터: vue 안에 등록되어 관리되고, 반응하는 데이터
        message: 'Vue.js!',
        state: state,
        newTodoText: '',
        visitCount: 0,
        hideComplatedTodos: false,
        todos: [],
        error: null,
        list: ['사과', '바나나', '딸기'],
        num: 1,
    },
})
state.count++