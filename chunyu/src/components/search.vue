<template>
    <div class="search-box">
        <input type="text" :value="content" @focus="inputFocus()" class="input-box" placeholder="按症状、疾病、医院、科室、医生名">
        <button class="search-close" :style="{opacity: isOpacity}" @click="searchClear()"></button>
        <button class="search-btn" @click="search()"></button>
    </div>
</template>
<script>
    export default{
        name: 'Search',
        data () {
            return {
                content: '',
                isOpacity: 0,
            }
        },
        methods: {
            inputFocus: function(){
                this.isOpacity = 1;
            },
            searchClear: function(){
                this.content = '';
                this.isOpacity = 0;
            },
            search: function(){
                // this.content......query
            }
        }
    }
</script>
<style scope>
    .search-box{
        margin: 0 1rem;
        position: relative;
    }
    .input-box{
        width: 100%;
        text-indent: 1.5rem;
        outline: 0;
        border: 0;
        box-sizing: border-box;
        padding: .9rem 7rem 0.9rem 0;
        line-height: 2rem;
        font-size: 14px;
        color: #666;
    }
    :-ms-input-placeholder{
        color: #CECECE;
    }
    ::-webkit-input-placeholder{
        color: #CECECE;
    }
    .search-close{
        background: url("../assets/find_doctor/close.png") no-repeat center;
        background-size: 2rem;
        width: 4rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 3rem;
        border: 0;
    }
    .search-btn{
        background: url("../assets/find_doctor/search.png") no-repeat center;
        background-size: 1.5rem;
        width: 4.3rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        border: 0;
        outline: 0;
    }
</style>

