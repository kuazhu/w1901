<template>
    <div class="Footer">
        <input type="checkbox" v-model="allDone">
        <span>{{totalDone}}/{{total}}</span>
        <button @click="handleDelAllDone()">删除选中</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { SELECT_ALL_TODO,DEL_ALL_DONE } from '../store/types.js'
    export default {
        name:'Footer',       
        computed:{
            ...mapGetters([
              'total',
              'totalDone',
            ]),                    
            allDone:{
                get(){
                    return this.$store.getters.allDone
                },
                set(value){
                    this.$store.dispatch(SELECT_ALL_TODO,value)
                }
            }
        },
        methods:{
            handleDelAllDone(){
               if(window.confirm('您确定要删除所有选中的任务吗?')){
                    this.$store.dispatch(DEL_ALL_DONE)
                }                
            }
        }
    }
</script>

<style scoped>
    .Footer{
        width: 100%;
        line-height: 40px;
        margin-top: 10px;
    }
    input{
        float: left;
        margin-top: 14px;
        vertical-align: top;
    }
    button{
        float: right;
        margin-top: 14px;
        vertical-align: top;
    }  
</style>