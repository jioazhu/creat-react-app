import { getPost } from '../services/post'

export const oadPosts = (obj) => {
  return (dispatch) => {
    console.log(obj)
    return getPost().then((res={})=>{
      console.log(res)
      const { status, data=[]} = res;
      if(status===200){
        dispatch({
          type:'OAD_POSTS',
          playload:data
        })
        return data
      }
    })
  }
}

// export const oadPosts = (dispatch,obj) => {
//   console.log(obj)
//   getPost().then((res={})=>{
//     console.log(res)
//     const { status, data=[]} = res;
//     if(status===200){
//       dispatch({
//         type:'OAD_POSTS',
//         playload:data
//       })
//       // return data
//     }
//   })
// }


