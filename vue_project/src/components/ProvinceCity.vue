<template>
  <li>
    <div @click='toggle'>
        <span v-if='hasLeaves'>[{{open ? '-' : '+'}}]</span>
        {{model.text}}
    </div>
    <ul>
        <ProvinceCity v-for='model in model.children' :model='model' v-show='open'></ProvinceCity>
    </ul>
  </li>
</template>
<script>
    export default{
        name: 'ProvinceCity',
        props: {
            model: {
                type: Object
            }
        },
        methods: {
            toggle:function(){
                this.open=!this.open;
            }
        },
        ready: function() {},
        computed:{
            hasLeaves: function() {
                return this.model.children && this.model.children.length
            }
        },
        data() {
            return {
                open: false
            }
        }
    }
</script>
<style scoped>
    ul,li{
        list-style-type: none;
    }
</style>
