/*
* @Author: TomChen
* @Date:   2019-07-24 11:37:18
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-24 11:45:17
*/
/*
const t1 = setTimeout(()=>{
    console.log('execute t1...')
},100)

// console.log(t1)
clearTimeout(t1)

console.log('after t1..')
*/
/*
const t2 = setInterval(()=>{
    console.log('execute t2...')
},100)
clearInterval(t2)
console.log('after t2..')
*/
/*
const t3 = setTimeout(()=>{
    console.log('execute t3...')
},0)
*/

process.nextTick(()=>{
    console.log('execute nextTick...')  
})
const t4 = setImmediate(()=>{
    console.log('execute t4...') 
})

console.log('after t4..')




