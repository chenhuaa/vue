<template>
  <div class="header-container">
      <div class="header-back"></div>
      <div class="header-title">{{title}}</div>
  </div>
</template>
<script>
    export default{
        name: 'HeaderNav',
        props: ['title'],
        data () {
            return {

            }
        }
    }
</script>
<style scope>
    .header-container{
        width: 100%;
        background: #f1f1f1;
        height: 4.5rem;
    }
    .header-back{
        float: left;
        width: 6rem;
        height: 4.4rem;
        background: url('../assets/back.png') no-repeat center;
        background-size: 2.4rem;
    }
    .header-title{
        padding-left: 6.2rem;
        height: 4.4rem;
        font-size: 2.1rem;
        line-height: 4.4rem;
    }
</style>

