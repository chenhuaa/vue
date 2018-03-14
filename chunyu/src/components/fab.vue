<template>
    <div class="i-container" @click="">
        <div class="center-container">
            <i class="i-item i1"></i>
            <i class="i-item i2"></i>
            <i class="i-item i3"></i>
            <i class="i-item i4"></i>
        </div>
    </div>
</template>
<script>
  export default{
      name: 'Fab',

  }  
</script>
<style>
    .i-container{
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        background: #1FD148;
        opacity: 0.8;
        border: .1rem solid #fff;
        box-shadow: 0 0 .5rem .5rem #1FD148;
        position: absolute;
        animation: fabAnimate 2s infinite;
    }
    .i-item{
        width: 0.95rem;
        height: 0.95rem;
        display: inline-block;
        background: #fff;
        border-radius: 50%;
        position: absolute;
    }
    .center-container:before{
        content: "";
        display: block;
        clear: both;
    }
    .center-container{
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1rem;
        margin-top: -1rem; 
    }
    .i1{
        border-bottom-right-radius: 0;
        top: 0;
        left: 0;
    }
    .i2{
        border-bottom-left-radius: 0;
        top: 0;
        right: 0;
    }
    .i3{
        border-top-right-radius: 0;
        bottom: 0;
        left: 0;
    }
    .i4{
        border-top-left-radius: 0;
        bottom: 0;
        right: 0;
    }
    @keyframes fabAnimate {
        0%{
            transform: scale(1);
            box-shadow: 0 0 .2rem .2rem #1FD148;
        }
        50%{
            transform: scale(1.1);
            box-shadow: 0 0 .4rem .4rem #1FD148;
        }
        100%{
            transform: scale(1);
            box-shadow: 0 0 .2rem .2rem #1FD148;
        }
    }
</style>
