<template>
  <div>
    <div class="tab border-1px">
      <div class="tab-item">
        <!-- router-link 定义点击后导航到哪个路径下 -->
        <!--router-link 传值方式1 params-->
        <router-link :to="{name:'goods',params:{foodName:'Banana',count:20}}">商品</router-link>
<!--
        <router-link :to="{path:'goods',query:{foodName:'Banana',count:50}}">商品</router-link>
-->
      </div>
      <div class="tab-item">
        <router-link :to="{name:'rating'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'seller'}">商家</router-link>
        <!--alias别名用法-->
       <!-- <router-link to="/gogo">商家</router-link>-->
      </div>

      <div class="tab-item">
        <router-link :to="{name:'fade'}">ElementUI</router-link>
      </div>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
