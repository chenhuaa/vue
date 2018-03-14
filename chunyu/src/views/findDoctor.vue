<template>
    <div id="container">
        <header>
            <div class="header-bg">
                <img src="../assets/chunyu.png" alt="">
            </div>
            <div class="search-box">
                <input type="text" :value="content" @focus="inputFocus()" class="input-box" placeholder="按症状、疾病、医院、科室、医生名">
                <button class="search-close" :style="{opacity: isOpacity}" @click="searchClear()"></button>
                <button class="search-btn" @click="search()"></button>
            </div>
        </header> 
        <div>
            <block :text="blockText" :detail="blockDetail" :url="blockUrl"></block>
            <!--<fab></fab>-->
        </div>
        <div>
            <!--<img src="../assets/find_doctor/woman.png" alt="">-->
            <ul>
                <li class="li-item" v-for="(item,value) in departments">
                    <department :src="item.img" :department="item.ks"></department>
                </li>
            </ul>
        </div>   
    </div>   
</template>
<script>
    import Block from '../components/block'
    import Department from '../components/department'
    import Fab from '../components/fab'
    export default{
        name: 'FindDoctor',
        data () {
            return {
                content: '',
                isOpacity: 0,
                blockText: '名医咨询',
                blockDetail: '更准确 更放心',
                blockUrl: require('../assets/find_doctor/famous_doctor.png'),
                departments: [
                    {"img": require('../assets/find_doctor/woman.png'), "ks": "妇科"},
                    {"img": require('../assets/find_doctor/child.png'), "ks": "儿科"},
                    {"img": require('../assets/find_doctor/skin.png'), "ks": "皮肤性病科"},
                    {"img": require('../assets/find_doctor/neike.png'), "ks": "内科"},
                    {"img": require('../assets/find_doctor/man.png'), "ks": "男科"},
                    {"img": require('../assets/find_doctor/mom_child.png'), "ks": "产科"},
                    {"img": require('../assets/find_doctor/waike.png'), "ks": "外科"},
                    {"img": require('../assets/find_doctor/chinese_doctor.png'), "ks": "中医科"},
                    {"img": require('../assets/find_doctor/bone.png'), "ks": "骨伤科"},
                    {"img": require('../assets/find_doctor/heart.png'), "ks": "神经心理科"},
                    {"img": require('../assets/find_doctor/mouse.png'), "ks": "口腔颌面科"},
                    {"img": require('../assets/find_doctor/eyes.png'), "ks": "眼科"},
                    {"img": require('../assets/find_doctor/ears.png'), "ks": "耳鼻咽喉科"},
                    {"img": require('../assets/find_doctor/zhongliu.png'), "ks": "肿瘤及防治科"},
                    {"img": require('../assets/find_doctor/plastic.png'), "ks": "整形美容科"},
                    {"img": require('../assets/find_doctor/report.png'), "ks": "报告解读科"},
                    {"img": require('../assets/find_doctor/nutrition.png'), "ks": "营养科"}
                ]
            }
        },
        components: {
            Block,Fab,Department
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
<style>
    #container{
        background: #F1F1F1;
    }
    header{
        text-align: center;
        padding: 0 0 2rem;
    }
    .header-bg{
        padding: 1.5rem 0;
    }
    .header-bg>img{
        height: 2.9rem;
    }
    .search-box{
        margin: 0 1rem;
        position: relative;
    }
    .input-box{
        width: 100%;
        text-indent: 1.5rem;
        outline: 0;
        border: 0;
        padding: .9rem 0;
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
    .li-item{
        width: 25%;
        height: 9.5rem;
        box-sizing: border-box;
        background-color: #fff;
        display: inline-block;
        text-align: center;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
    }
</style>

