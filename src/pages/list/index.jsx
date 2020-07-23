import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { oadPosts } from '@/actions/post';

class List extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch((dpatch)=>{oadPosts(dpatch,{a:1,B:2})})//.then(res=>{console.log(res)})
  }


  render(){
    const { list } = this.props;
    return (
      <div>
        <Link to='/home'>首页</Link>
        <ul>
          {list.map(item=>{
            return (<li key={item.id}>{item.title}</li>)
          })}
        </ul>
      </div>

    )
  }
}



export default connect((state)=>{
  const { post:{list} } = state;
  return {
    list
  }
})(List);
