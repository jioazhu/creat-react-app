import React,{Component} from 'react';
import { connect } from 'react-redux';
import { oadPosts } from '@/actions/post';

class List extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(oadPosts).then(res=>{console.log(res)})
  }


  render(){
    const { list } = this.props;
    return (
      <ul>
        {list.map(item=>{
          return (<li key={item.id}>{item.title}</li>)
        })}
      </ul>
    )
  }
}



export default connect((state)=>{
  const { post:{list} } = state;
  return {
    list
  }
})(List);
