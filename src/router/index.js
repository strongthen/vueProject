import Vue from 'vue'
import vueRouter from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import App from '@/App'
import goods from '@/components/goods'
import rating from '@/components/ratings'
import seller from '@/components/seller'
import fade  from '@/components/elementUI/fade'
Vue.use(vueRouter)

export let router = new vueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: goods //goods
    },
    {
      path: '/ratings',
      name:'rating',
      meta:{
          title:'评论区域',
          keepAlive:true
      },
      component: rating
    },
    {
      path: '/goods',
      name:'goods',
      component: goods
    },
    {
      path: '/seller',
      name:'seller',
     // redirect:'/ratings',
      alias:'/gogo',
      component: seller
    },
    {
      path:"/fade",
      name:"fade",
      component:fade
    }
  ]
})

// 进入路由前方法勾子
// router.beforeEach((to, from, next) => {
//   console.log(to, '前置第一个参数')
//   console.log(from, '前置第二个参数')
//   console.log(next, '前置第三个参数')
//   /*
//   to 目标路由
//   from 源路由
//   next 跳转到下一个路由
//   */
//   if (to.meta.login) {
//     // 如果需要，则跳转到登录页
//     next('/fade');
//   } else {
//     // 如果不需要，则直接跳转到对应路由
//     next();
//   }
// });
// // 进入路由后方法勾子
// router.afterEach((to, from) => {
//   console.log(to, '后置第一个参数')
//   console.log(from, '后置第二个参数')
//   /*
//     to 目标路由
//     from 源路由
//   */
//   if (to.meta.title) {
//     console.log(to.meta.title);
//   } else {
//     console.log('暂无名称');
//   }
// });
