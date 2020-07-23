import { getPost } from '../services/post'


export const oadPosts = (dispatch) => {
  return getPost().then((res={})=>{
    console.log(res)
    const { status, data=[]} = res;
    if(status===200){
      // dispatch({
      //   type:'OAD_POSTS',
      //   playload:data
      // })
      return data
    }
  })
}


