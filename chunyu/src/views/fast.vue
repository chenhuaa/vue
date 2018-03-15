<template>
  <div class="fast-container">
    <header-nav title="快速问诊"></header-nav>
    <div class="fast-text">
        <textarea name="" id="fast-textarea" cols="44" rows="20" placeholder="请详细描述你的症状、疾病和身体状况，便于医院更准确的分析，春雨将确保您的隐私安全（字数限制为10-500字）"></textarea>
        <div class="add-box">
            <div class="in-box">
                <i></i>
                <i></i>
            </div>
        </div>
    </div>
    <button class="fast-next">提交问题</button>
    <p class="fast-tip">问诊服务由 春雨医生 提供</p>
  </div>
</template>
<script>
    import HeaderNav from '../components/headerNav'
    import Search from '../components/search'
    export default{
        name: 'Fast',
        data () {
            return {

            }
        },
        components: {
            HeaderNav,Search
        }
    }
</script>
<style scope>
    .fast-container{
        background: #F2F5F7;
        height: 100%;
        width: 100%;
        position: fixed;
    }
    .fast-text{
        position: relative;
        padding-top: 2rem;
        padding-bottom: .1rem;
        background: #fff;
        box-shadow: 0 0 .1rem .1rem #ddd;
    }
    #fast-textarea{
        display: block;
        margin: 0 auto;
        border: none;
        resize: none;
    }
    :-ms-input-placeholder{
        color: #CECECE;
        font-size: 1.7rem;
    }
    ::-webkit-input-placeholder{
        color: #CECECE;
        font-size: 1.7rem;
    }
    .add-box{
        width: 5rem;
        height: 5rem;
        border: .1rem solid #C2C2C2;
        margin: 2rem 3rem;
        border-radius: .3rem;
    }
    .in-box{
        width: 3.2rem;
        height: 3.2rem;
        margin: .75rem auto;
        position: relative;
    }
    .in-box>i{
        display: inline-block;
        position: absolute;
    }
    .in-box>i:first-child{
        width: 100%;
        height: 50%;
        top: 0;
        border-bottom: .2rem solid #e1e1e1;
    }
    .in-box>i:last-child{
        width: 50%;
        height: 100%;
        right: 0;
        border-left: .2rem solid #e1e1e1;
    }
    .fast-next{
        display: block;
        width: 90%;
        height: 4rem;
        background: #37CF6B;
        color: #fff;
        margin: 2rem auto;
        outline: none;
        border: none;
        border-radius: .3rem;
        font-size: 1.8rem;
    }
    .fast-tip{
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        color: #666;
    }
</style>
