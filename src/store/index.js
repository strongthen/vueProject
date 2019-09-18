import Vue from 'vue'
import Vuex from 'vuex'

//使用Vuex
Vue.use(Vuex)

//创建Vuex实例
const store =new Vuex.Store({
   state:{count:10},
   getters:{
       getStateCount:function(state){//上面定义的state
         console.log('getters this='+this);
         return state.count=state.count+1;
       }
   },
   mutations:{
     add(state,m){
       console.log('mutations add m='+m);
       console.log('addFun this='+this);
       return this.state.count=this.state.count+m;
     },
     reduction(state,m) {
       console.log('m='+m);
       console.log('reductionFun this='+this);
       return this.state.count=this.state.count-m;
     }
   },

   actions:{
      addFun(context,m){
        console.log('actions=addFun m='+m)
        context.commit('add',m);
      },
     reduction:function(context,m){
        console.log('actions=reduction m='+m)
        context.commit('reduction',m);
     }

   }

})

export default store  //导出store

