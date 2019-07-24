/*
* @Author: TomChen
* @Date:   2019-07-24 15:05:34
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-24 15:24:00
*/
//buffer 是一个存放二进制数据的容器(类似于数组)

const buf1 = Buffer.from('z')
//10001111
console.log(buf1)//<Buffer 7a>
//一个英文字母 = 2 个 16 进制数
/*
    1 个 0 或者 1 = 1bit(位)
    8bit = 1B(字节) =  2 个 16 进制数

    1024B = 1kb
    1024k = 1M
    1024M = 1G
    1024G = 1T
*/


const buf2 = Buffer.from('好')
console.log(buf2)//<Buffer e5 a5 bd>
//一个汉字 = 3B

const buf3 = Buffer.alloc(10)
console.log(buf3)//<Buffer 00 00 00 00 00 00 00 00 00 00>

buf3[0] = 11//十进制数

console.log(buf3)//<Buffer 0b 00 00 00 00 00 00 00 00 00>

buf3[1] = 0xab//十六进制
console.log(buf3)//<Buffer 0b ab 00 00 00 00 00 00 00 00>

buf3[9] = 0xfa
console.log(buf3)//<Buffer 0b ab 00 00 00 00 00 00 00 fa>

buf3[10] = 12
console.log(buf3)

//e5 a5 bd
const buf4 = Buffer.alloc(3)
buf4[0] = 0xe5
buf4[1] = 0xa5
buf4[2] = 0xbd
console.log(buf4.toString())
















