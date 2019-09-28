<template>
  <div class="container">
    <div>我是评论区</div>
    <!--通过this.$route.meta.title可以获取route里面的meta参数-->
    <h2>{{this.$route.meta.title}}</h2>
    <el-input v-model="content" placeholder="请输入内容..."></el-input>
    <el-input v-model="mobile" placeholder="请输入手机号码..."></el-input>
  </div>
</template>

<script>
    export default {
        name: 'ratings',
        data(){
          return{
            content:'',
            mobile:''
          }
        },
        beforeRouteLeave(to,from,next){
           console.log('ratings.vue,to='+to);
           console.log('ratings.vue,from='+from);
           console.log('ratings.vue,next='+next);
           /*通过下面代码可以修改meta里面的状态*/
           // from.meta.keepAlive=false;
           next();
        }


    }
</script>

<style scoped>

</style>
