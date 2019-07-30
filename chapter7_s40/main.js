// let x = 0
// console.log(x++)

// const x = 0
// console.log(x++)

// {
//     var x = 1
// }
// console.log(x)

// {
//     let y = 2
// }
// console.log(y)

// const array = [1, 2]
// array.push(3)
// console.log(array)
// array.length = 0
// console.log(array)

/* array 배열의 요소를 이용한 여러작성 법 START */
//const array = [1, 2]

// var newArray = array.map(function(el) {
//     return el * 2
// })

//const newArray = array.map(el => { return el * 2 })

//const newArray = array.map(el => el * 2)

//const newArray = array.map((el, idx) => el * 2)

//const newArray = array.map(el => ({ value: el * 2 }))

//console.log(newArray)

/* array 배열의 요소를 이용한 여러작성 법 END */

// const [a, b] = [1, 2]
// console.log(a)

// const { name } = { id:1, name: 'apple' }
// console.log(name)

// function myFunction({ id, name }) {
//     console.log(name)
// }
// myFunction({ id:1, name:'apple' })

// const array = [1, 2, 3]
// console.log(array)
// function myFunction() {
//     console.log(...array)
// }
// myFunction()

// const newArray = [...array, 4]
// console.log(newArray)

// const array = [
//     { id: 1, name: 'apple' },
//     { id: 2, name: 'banana' }
// ]

// //const result = array.find(el => el.id === 2)
// const result = array.findIndex(el => el.id === 2)

// console.log(result)

function myFunction(num) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve('success!')
        // }, 1000)
        if(num < 10) {
            resolve('success!')
        } else {
            reject('error!')
        }
    })
}

myFunction(100).then(value => {
    console.log(value)
}).catch(e => {
    console.log(e)
}).finally(() => {
    console.log('finally!')
})