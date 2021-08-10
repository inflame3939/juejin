import React,{ Component } from 'react'
import { getArticleById } from '../../fake-api';
import { SlidingWindowScrollHook } from '../InfiniteScrollcom'

export default class Aart extends Component{
  constructor(props){ 
    super(props)
    this.state = {
      art:[],user_name:'',description:'',article_id:this.props.article_id,
      img:"https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/cec85e39214c8ee0604e6f55753c7788~300x300.image",
      success:false
    }
    
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    window.scrollTo(0,0)
    async function helloAsync(){
      const a= await getArticleById(nextProps.article_id);
      const b = a.data.article
      const c = b.article_content
      const d = b.author_user_info.avatar_large
      const f = b.author_user_info.user_name
      const g = b.author_user_info.description
      const h = b.article_id
      const e = [c,d,f,g,h]
      return e
    }
    helloAsync().then((e)=>{
      this.setState({
        art:e[0],img:e[1],user_name:e[2],description:e[3],article_id:e[4],
        success:true},()=>{}
      )
    })
  }
  render(){
    return (
    <div>
      <img src={this.state.img} alt="" id="artimg"/>
      <div className='username'>
        <div className='user_name'><b>{this.state.user_name}</b></div>
        <div className='description'>{this.state.description}</div>
        <button className='subscribe'>关注</button>
      </div>
      
      <div dangerouslySetInnerHTML = {{__html:this.state.art}}></div>
      <div className='comment-title'>评论</div>
      <div className='comment-box'>
        <input type="text" placeholder='输入评论...' className='comment-input' />
      </div>
      <div>
        <SlidingWindowScrollHook height={195} article_id={this.state.article_id}/>
      </div>
    </div>
    )
  }
  
}