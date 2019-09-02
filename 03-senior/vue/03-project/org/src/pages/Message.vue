<template>
    <div class="Message">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name:'Message',
        props:{
            msg:String
        }
    }
</script>

<style scoped>
  p{
    color: red
  }
</style>