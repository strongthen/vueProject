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
        beforeRouteEnter(to, from, next) {
        console.log(this, 'beforeRouteEnter'); // undefined
        console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
        console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
        console.log(next, '组件独享守卫beforeRouteEnter第三个参数');
        next(vm => {
          //因为当钩子执行前，组件实例还没被创建
          // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
          console.log(vm);//当前组件的实例
        });
      },
      beforeRouteUpdate(to, from, next) {
        //在当前路由改变，但是该组件被复用时调用
        //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
        // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log(this, 'beforeRouteUpdate'); //当前组件实例
        console.log(to, '组件独享守卫beforeRouteUpdate第一个参数');
        console.log(from, '组件独享守beforeRouteUpdate卫第二个参数');
        console.log(next, '组件独享守beforeRouteUpdate卫第三个参数');
        next();
      },
      beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log(this, 'beforeRouteLeave'); //当前组件实例
        console.log(to, '组件独享守卫beforeRouteLeave第一个参数');
        console.log(from, '组件独享守卫beforeRouteLeave第二个参数');
        console.log(next, '组件独享守卫beforeRouteLeave第三个参数');
        next();
      },

        methods:{
            addFun:function(){
              let n=10;
              /*commit提交到mutations*/
             /* this.$store.commit('addFun')*/
              /*dispatch转发到action*/
              debugger
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
