<template>
  <div id="container">
    <ul v-for="(type,key) in contact" v-if="type.length" :style="ul">
      <li :style="letter">{{key}}</li>
      <li v-for="item in type" :style="li" v-on:click="toDetail(item)">
        <span :style="left">{{item.name}}</span>
        <span :style="right">{{item.tel}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable indent */
// eslint-disable-next-line no-trailing-spaces
  
  export default{
    name: 'List',
    data () {
      return {
        contact: {
          a: [
            {"name":"John","tel":"13751539713","id":"100201"}
          ],
          b: [
            {"name":"zhangsan","tel":"12342554626","id":"100202"},
            {"name":"lisi","tel":"12342554626","id":"100203"},
            {"name":"wangwu","tel":"12342554626","id":"100204"},
            {"name":"jerry","tel":"12342554626","id":"100205"},
            {"name":"tom","tel":"12342554626","id":"100206"}
          ],
          c: [
            {"name":"kim","tel":"15520583895","id":"100207"},
            {"name":"maria","tel":"13120375895","id":"100208"},
            {"name":"kim","tel":"15583993352","id":"100209"}
          ],
          d:[],
          e: [
            {"name":"mary","tel":"18201815175","id":"100210"},
            {"name":"lilly","tel":"18201884611","id":"100211"},
            {"name":"mary","tel":"18201815191","id":"100212"},
            {"name":"jeo","tel":"18201899684","id":"100213"}
          ]
        },
        ul:{
          listStyle: 'none',
          margin: '0 auto',
          paddingLeft: 0,
          marginButton: '2px'
        },
        letter: {
          height: '16px',
          lineHeight: '16px',
          background: '#DEDFE3'
        },
        li: {
          height: '36px',
          lineHeight: '36px',
          marginBottom: '1px',
          background: '#fff'
        },
        left: {
          float: 'left',
          marginLeft: '10px'
        },
        right: {
          float: 'right',
          marginRight: '10px'
        }
      }
    },
    methods: {
      toDetail: function(item){
        var id = item.id;
        this.$router.push('/detail/:'+id);
      }
    }
  }
</script>
<style scoped>
  body{
    list-style-type: none;
    background: #555;
  }
  #container{
    margin: 10px auto;
    width: 300px;
    background: #B7B9BC;
  }
</style>
