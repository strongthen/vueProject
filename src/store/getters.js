export function getStateCount(state){
  console.log('getters this='+this);
  return state.count=state.count+1;
}
