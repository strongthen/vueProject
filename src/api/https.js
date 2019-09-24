import Axios from  'axios'
export const test='207>834';
export function requestGet(url,params={}){
  return new Promise((resolve, reject)=>{
    Axios.get(url,params).then(res=>{
      resolve(res.data);
    }).catch(error=>{
      reject(error);
    })
  })
}
