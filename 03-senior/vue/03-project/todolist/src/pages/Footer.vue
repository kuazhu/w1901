<template>
    <div class="Footer">
        <input type="checkbox">
        <span>{{totalDone}}/{{total}}</span>
        <button>删除选中</button>
    </div>
</template>

<script>
    export default {
        name:'Footer',
        props:{
            todos:Array,
        },         
        computed:{
            total(){
                return this.todos.length
            },
            totalDone(){
                return this.todos.reduce((total,item)=>{
                    if(item.done){
                        total = total + 1
                    }
                    return total
                },0)
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