<template>
  <div>
    <div>我是物品详情</div>
     <!--router-link传值时接受值方式一params-->
     <p>商品名称：{{this.$route.params.foodName}}</p>
     <p>数量：{{this.$route.params.count}}</p>
     <!--vuex中的数据源-->
     <h2>{{this.$store.state.count}}</h2>
     <button @click="addFun">+</button>
     <button @click="reductionFun">-</button>
    <!--router-link传值时接受值方式二query-->
     <!--<p>商品名称：{{this.$route.query.foodName}}</p>
     <p>数量：{{this.$route.query.count}}</p>-->
  </div>
</template>

<script>
    export default {
        name: "goods",
        methods:{
            addFun:function(){
              let n=10;
              /*commit提交到mutations*/
             /* this.$store.commit('addFun')*/
              /*dispatch转发到action*/
              this.$store.dispatch('addFun',n)
            },
            reductionFun:function(){
              let n=10;
              /*this.$store.commit('reductionFun')*/
              this.$store.dispatch('reduction',n)
            }
        }
    }
</script>

<style scoped>

</style>
