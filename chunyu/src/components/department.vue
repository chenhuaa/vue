<template>
    <a class="ks-box" href="javascript:;">
        <span :style="img" class="ks-img"></span>
        <p>{{department}}</p>
    </a>
</template>
<script>
    export default{
        name: 'Department',
        data () {
            return {

            }
        },
        props: ['src','department'],
        computed: {
            img: function(){
                return {backgroundImage: "url("+this.src+")"};
            }
        }
    }
</script>
<style scope>
    .ks-box{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        font-size: 1.2rem;
        color: #666;
        text-decoration: none;
    }
    .ks-img{
        width: 2.1rem;
        height: 2.2rem;
        margin: 2.4rem auto 1.2rem auto;
        display: block;
        background-repeat: no-repeat;
        background-size: 2.1rem;
        background-position: center;
    }
    
</style>
