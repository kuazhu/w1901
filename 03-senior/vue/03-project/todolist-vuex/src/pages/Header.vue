<template>
    <div class="Header">
        <h1>Todo List</h1>
        <input 
            type="text"
            placeholder="请输入任务"
            v-model="task"
            @keyup.enter="handleAdd()" 
        >
    </div>
</template>

<script>
    import { ADD_TODO } from '../store/types.js'
    export default {
        name:'Header',
        data(){
            return {
                task:''
            }
        },
        methods:{
            handleAdd(){
                //1.校验数据
                const task = this.task.trim()
                if(!task){
                    alert('请输入任务')
                    return
                }
                //2.封装任务对象
                const todo = {
                    task,
                    done:false
                }
                //3.将任务对象插入到任务数组
                this.$store.dispatch(ADD_TODO,todo)
                //4.清空输入框
                this.task = ''
            }
        }
    }
</script>

<style scoped>
    h1{
        text-align: center;
        font-size: 18px;
    }
    input{
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        padding: 0 10px;
    }
</style>