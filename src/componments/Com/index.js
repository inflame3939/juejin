import React,{ Component } from 'react'
import { getCommentsByArticleId } from '../../fake-api';
import Datetime from '../Datetime'

export default class Com extends Component{
  constructor(props){ 
    super(props)
    this.state = {
      com:[],user_name:'',description:'',ctime:1626417583, has_more:true, iitem:1,article_id:this.props.article_id,
      a:{
        comment_info:{digg_count:0,
        level:''},
        reply_infos:[{
          reply_info:{
            ctime:1626417583,reply_content:'',
          },user_info:{avatar_large:'',level:0,user_name:'',job_title:''}
        }]
      },
      img:"https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/cec85e39214c8ee0604e6f55753c7788~300x300.image",
      success:false
    }
    this.has_more()
    const _this = this
    async function helloAsync(){
      const { article_id , iitem , limit } = _this.props
      const a= await getCommentsByArticleId( article_id , 0 , limit );
      
      const b = a.data.comments[iitem]
      // console.log('com',a)
      if (iitem< a.total){
      const c = b.comment_info.comment_content
      const d = b.user_info.avatar_large
      const f = b.user_info.user_name
      const g = b.user_info.description
      const h = Datetime(b.comment_info.ctime*1000)

      const e = [c,d,f,g,h,b]
      return e } return ['']
    }
    helloAsync().then((e)=>{ if(e[0]!== ''){
      this.setState({
        com:e[0],img:e[1],user_name:e[2],description:e[3],ctime:e[4],a:e[5],
        success:true}
      )
    }})
  }

  has_more=()=>{
    if(this.state.has_more){return{}}
    if(!this.state.has_more){
      this.props.has_more()}
  }

  // shouldComponentUpdate (nextProps, nextState){
  //   if(this.state.article_id === nextState.article_id){
  //     return false; 
  //   }else{
  //     return true;
  //   }   
  // }  
  render(){
    return (
      <div className='comments' style={this.state.user_name===''?{display:'none'}:{display:'block'}}>
        <div className='comment-coms' >
          <div className='com-img'><img src={this.state.img} alt="" id="comimg"/></div>
          <div className='comment-container'>
            <div className='username'>
              <div className='user_name'>{this.state.user_name}</div>
              <span className='level'>Lv.1</span>
              <div className='description'>{this.state.description}</div>
            </div>
            <div className='comment-content'>{this.state.com}</div>
            <div className='comment-actions'>
              <div>{this.state.ctime}</div>
              <div className='comment-right'>
                <div className='comment-like'>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC" alt="like" />
                  {this.state.a.comment_info.digg_count}
                </div>
                <div className='comment-like'>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=" alt="comments" />
                  回复
                </div>
              </div>
            </div>
            {this.state.a.reply_infos !== '' ?
            this.state.a.reply_infos.map((item,index)=>{
              return(
            <div className='comment-reply' key={index}>
              <div className='comment-coms'>
                <div className='com-img'><img src={this.state.a.reply_infos[index].user_info.avatar_large} alt="" id="comimg"/></div>
                <div className='comment-container'>
                  <div className='username'>
                    <div className='user_name'>{this.state.a.reply_infos[index].user_info.user_name}</div>
                    <span className='level'>Lv.{this.state.a.reply_infos[index].user_info.level}</span>
                    <div className='description'>{this.state.a.reply_infos[index].user_info.job_title}</div>
                  </div>
                  <div className='comment-content'>{this.state.a.reply_infos[index].reply_info.reply_content}</div>
                  <div className='comment-actions'>
                    <div>{Datetime(this.state.a.reply_infos[index].reply_info.ctime*1000)}</div>
                  </div>
                </div>
              </div>
            </div>
            )})
             : <div/> 
            }
          </div>
        </div>
      </div>
    )
  }
  
}