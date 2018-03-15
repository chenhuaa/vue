<template>
    <div class="find-container">
        <header-nav title="自选医生问诊"></header-nav>
        <header>
            <div class="header-bg">
                <img src="../assets/chunyu.png" alt="">
            </div>
            <search></search>
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
    import Search from '../components/search'
    import headerNav from '../components/headerNav'
    export default{
        name: 'FindDoctor',
        data () {
            return {
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
            Block,Fab,Department,Search,headerNav
        },
        methods: {
            
        }
    }
</script>
<style>
    .find-container{
        width: 100%;
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

