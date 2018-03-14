<template>
  <a class="block-box" href="" :style="Url">
    <!--<img :src="url" alt="" class="block-img">-->
    <!--<img :src="url" alt="">-->
    <!--<img src="../assets/find_doctor/famous_doctor.png" alt="">-->
    <h6 class="block-text">{{text}}</h6>
    <span class="block-detail">{{detail}}</span>
    <span class="sanjiao"></span>
  </a>
</template>
<script>
    export default{
        name: 'Block',
        data () {
            return {

            }
        },
        props: ['text','detail','url'],
        computed: {
            Url: function(){
                // var imgs = this.url.toString();
                // console.log(imgs);
                // var imgSrc= require(imgs);
                // console.log(imgSrc);
                return {backgroundImage: "url("+this.url+")"};
            }
        },
        mounted: function(){
            
        }
    }
</script>
<style scope>
    .block-box{
        display: block;
        position: relative;
        padding: 2rem 1.5rem 2rem 6.5rem;
        text-decoration: none;
        /*background-image: url("../assets/find_doctor/famous_doctor.png");*/
        background-size: 3.7rem;
        background-origin: border-box;
        background-position: 1.6rem center;
        background-repeat: no-repeat;
        background-color: #fff;
    }
    .block-text{
        font-size: 1.8rem;
        font-weight: 300;
    }
    .block-text:after{
        content: " ";
        display: inline-block;
        width: 4rem;
        height: 2rem;
        background: url("../assets/find_doctor/new.png") no-repeat;
        background-size: 2.3rem 1rem;
    }
    .block-detail{
        font-size: 1.2rem;
        color: #AAAAB2;
    }
    .sanjiao{
        background: url("../assets/sanjiao.png") no-repeat center;
        background-size: .7rem; 
        position: absolute;
        right: 1rem;
        top: 50%;
        margin-top: -1.5rem;
        width: 2rem;
        height: 3rem;
    }
    .block-img{
        position:absolute;
        width: 3.7rem;
        height: 3.7rem;
        /*top: 50%;
        margin-top: -25%;*/
        left: 1rem;
    }
</style>

background-size: 3.7rem;
        background-origin: border-box;
        background-position: 1.6rem center;
        background-repeat: no-repeat;
        background-color: #fff;