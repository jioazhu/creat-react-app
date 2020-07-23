
export const postReducer = (state={list:[{title:'你好',id:1}]},action) =>{
  switch(action.type){
    case 'OAD_POSTS':
      return {...state,list:action.playload}
    default:
      return state
  }
}