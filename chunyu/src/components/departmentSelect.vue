<template>
    <div class="de-select">
        <div class="select-box" :class="{selected:selectBool}" @click="selectKs()">
            <p>{{department}}</p>
            <img class="img-icon" :src="imgSrc" alt="">
            <p>{{money}}元/次</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DepartmentSelect',
        props: ['department','money','imgSrc'],
        data () {
            return {
                selectBool: false
            }
        },
        methods: {
            selectKs: function(){
                this.selectBool?this.selectBool=false:this.selectBool=true;
            }
        }
    }
</script>
<style>
    .de-select{
        width: 100%;
        height: 100%;
        padding: .9rem;
        box-sizing: border-box;
    }
    .select-box{
        width: 100%;
        height: 100%;
        border-radius: .5rem;
        color: #999;
        text-align: center;
        font-size: 1.4rem;
        box-sizing: border-box;
        padding: .4rem;
    }
    .img-icon{
        background-color: #999;
        height: 2rem;
        margin-top: .4rem;
    }
    .selected{
        color: #FF5218;
        border: .1rem solid #FF5218;
    }
    .selected>.img-icon{
        background-color: #FF5218; 
    }
</style>

