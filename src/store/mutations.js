export function add(state,m){
  console.log('mutations add m='+m);
  console.log('addFun this='+this);
  return this.state.count=this.state.count+m;
}

export function reduction(state,m) {
  console.log('m='+m);
  console.log('reductionFun this='+this);
  return this.state.count=this.state.count-m;
}
