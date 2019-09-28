export function addFun(context,m){
  console.log('actions=addFun m='+m)
  context.commit('add',m);
}

export function reduction(context,m){
  console.log('actions=reduction m='+m)
  context.commit('reduction',m);
}
