/*
* @Author: TomChen
* @Date:   2019-09-03 19:20:11
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-03 20:33:32
*/
//store 的计算属性
export default {
    total(state){
        return state.todos.length
    },
    totalDone(state){
        return state.todos.reduce((total,item)=>{
            if(item.done){
                total = total + 1
            }
            return total
        },0)        
    },
    allDone(state,getter){
        return (getter.total == getter.totalDone) && (getter.total != 0)
    }
}