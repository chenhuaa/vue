<template>
<div>
    <h3>{{info}}</h3>
    <div>
        <div>
            <span class="avatar" v-on:click="ddd"></span>
            <h4>{{$router.params}}</h4>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        name: 'Detail',
        props: ['id'],
        data () {
            return {
                info: '联系人详情'
            }
        },
        methods: {
            ddd: function(){
                // this.$router.params  ?????
                console.log(this.$router);
            }
        }
    }
</script>
<style>
    .avatar{
        display: inline-block;
        width: 100px;
        border-radius: 50%;
        height: 100px;
        background: #888;
    }
</style>

