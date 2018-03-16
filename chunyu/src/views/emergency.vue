<template>
  <div class="emer-container">
    <header-nav title="图文急诊"></header-nav>
    <div class="emer-header-bg"></div>
    <p class="select-font">选择科室</p>
    <ul>
        <!--此处通过比较当前点击目标的key与info比较，相同则添加class:selected-->
        <li class="li-item" v-for="(item,key) in departments" @click="sss(key)">
            <department-select :class="{selected: key==info}" :department="item.department" :money="item.money" :imgSrc="item.src"></department-select>
        </li>
    </ul>
  </div>
</template>
<script>
    import HeaderNav from '../components/headerNav'
    import DepartmentSelect from '../components/departmentSelect'
    export default{
        name: 'Emergency',
        data () {
            return {
                name:"",
                info: '',
                departments: [
                    {"department": "小儿科", "money": "6", "src": require("../assets/departments/t-child.png")},
                    {"department": "皮肤科", "money": "5", "src": require("../assets/departments/t-skin.png")},
                    {"department": "妇科", "money": "5", "src": require("../assets/departments/t-woman.png")},
                    {"department": "产科", "money": "5", "src": require("../assets/departments/t-mom-child.png")},
                    {"department": "眼科", "money": "2", "src": require("../assets/departments/t-eyes.png")}
                ]
            }
        },
        components: {
            HeaderNav,DepartmentSelect
        },
        methods: {
            sss: function(key){
                this.info = key;
                console.log(this.info);
                console.log(key);
            }
        }
    }
</script>
<style scope>
    .emer-header-bg{
        width: 100%;
        height: 22rem;
        background: url("../assets/pic_font.png") no-repeat center;
        background-size: 100%; 
    }
    .select-font{
        padding: 2rem 1.5rem;
    }
    .li-item{
        width: 25%;
        height: 9.5rem;
        display: inline-block;
        /*box-sizing: border-box;*/
    }
</style>
