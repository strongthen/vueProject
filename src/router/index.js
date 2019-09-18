import Vue from 'vue'
import vueRouter from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import App from '@/App'
import goods from '@/components/goods'
import rating from '@/components/ratings'
import seller from '@/components/seller'
import fade  from '@/components/elementUI/fade'
Vue.use(vueRouter)

export default new vueRouter({
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
