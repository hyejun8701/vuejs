const app = new Vue({
    el: '#app',
    data: {
        // isChild: true,
        // isActive: true,
        // textColor: 'red',
        // bgColor: 'lightgray',
        // otherClass: 'other',
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        item: {
            id: 1,
            src: 'item1.jpg',
            alt: '상품1의 섬네일',
            width: 200,
            height: 200
        },
        radius: 50
    }
})