<template>
    <div class="List">
        <Item 
            v-for="(todo,index) in todos"
            :todo="todo"

        />
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name:'List',
        components:{
            Item
        },
        props:{
            todos:Array
        }
    }
</script>

<style>
  
</style>