<template>
    <div class="Home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div 
                    class="swiper-slide"
                    v-for="(ad,index) in this.$store.state.home.ads"
                >
                    <img :src="ad.image" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import { GET_ADS } from './store/types.js'  
    export default {
        name:'Home', 
        mounted(){
            this.$store.dispatch(GET_ADS)
            .then(()=>{
                new Swiper ('.swiper-container', {
                    // 循环模式选项
                    loop: true,
                    autoplay:true,
                    //分页器
                    pagination: {
                      el: '.swiper-pagination',
                      clickable:true
                    },
                })                
            })

        }              
    }
</script>

<style>
  
</style>