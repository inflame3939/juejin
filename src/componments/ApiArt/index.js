import React,{ Component } from 'react'
import { getArticles } from '../../fake-api';
import Datetime from '../Datetime'

export default class ApiArt extends Component{
  constructor(props){ 
    super(props)
    this.state = {
      iitem:0,
      art:[],
      has_more:true,
      ctime:'',
      cateName:{
        first_category_name:'',
        second_category_name:''
      },
      brief_content:'',
      title:'',
      cover_image:'',
      digg_count:5,
      comment_count:8,
      collect_count:3,
      success:false,
      categoryId:0,
      categoryId1:0,
      sortBy:this.props.sortBy,
      article_id:"6984908770149138446"
    }
    let _this = this
    async function helloAsync(){
      const { iitem , limit , showcate , categoryId1 , sortBy } = _this.props
      const categoryId = categoryId1 === 0 ?  showcate.categoryId : parseInt( String(showcate.categoryId)+String(categoryId1))
      const a = await getArticles( categoryId , sortBy , 0 , limit );
      const c = a.has_more
      if(c){
      const d = a.data.articles[iitem].article_id
      const b = a.data.articles[iitem].author_user_info.user_name
      const f = Datetime(a.data.articles[iitem].article_info.ctime*1000)
      const g = a.data.articles[iitem].category_info
      const h = a.data.articles[iitem].article_info
      const e = [b,'',f,g,h,d]
      return e} return [c]
    }
    helloAsync().then((e)=>{if(e[2]){
      this.setState({
        art:e[0],ctime:e[2],article_id:e[5],
        cateName:{
          first_category_name:e[3].first_category_name,
          second_category_name:e[3].second_category_name},
        brief_content:e[4].brief_content,title:e[4].title,cover_image:e[4].cover_image,collect_count:e[4].view_count,digg_count:e[4].digg_count,comment_count:e[4].comment_count,
        success:true}
      )}
    })
  }
  api=(nextProps)=>{
    let _this = this
    if(nextProps!==this.props){this.props=nextProps}

    if(this.props.hasmore){
    async function helloAsync(){
      const { iitem , limit , showcate , categoryId1 , sortBy } = _this.props
      const categoryId = categoryId1 === 0 ?  showcate.categoryId : parseInt( String(showcate.categoryId)+String(categoryId1))
      const a= await getArticles( categoryId , sortBy , 0 , limit );
      const c = a.has_more
      if(c){
      const d = a.data.articles[iitem].article_id
      const b = a.data.articles[iitem].author_user_info.user_name
        const f = Datetime(a.data.articles[iitem].article_info.ctime*1000)
        const g = a.data.articles[iitem].category_info
        const h = a.data.articles[iitem].article_info
        const e = [b,'',f,g,h,d]
        return e} return [c]
    }
    helloAsync().then((e)=>{if(e[2]){
      this.setState({
        art:e[0],ctime:e[2],article_id:e[5],
        cateName:{
          first_category_name:e[3].first_category_name,
          second_category_name:e[3].second_category_name},
        brief_content:e[4].brief_content,title:e[4].title,cover_image:e[4].cover_image,collect_count:e[4].view_count,digg_count:e[4].digg_count,comment_count:e[4].comment_count,
        success:true}
      )}
    })
  }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.has_more()
    if(nextProps.hasmore){
    this.api(nextProps)}
  }
  has_more=()=>{
    if(this.state.has_more){return{}}
    if(!this.state.has_more){
      this.props.has_more()}
  }
  render(){
    const display2 = {
      width:this.state.cover_image ? '200px' : '335px'
    }
    return (
      <div >
        <div className='apiArt2' 
        style={this.state.ctime===''?{display:'none'}:{display:'block'} } 
        onClick={()=>{this.props.articleid(this.state.article_id)}}>
          <div className='apiArt3'>
            <ul className='apiArtul'>
              <li className='apiArtli'>{this.state.art}</li>
              <li className='apiArtli'>{this.state.ctime}</li>
              <li className='apiArtli'>{this.state.cateName.first_category_name}&nbsp;&nbsp;·&nbsp;&nbsp;{this.state.cateName.second_category_name}</li>
            </ul>
            <div className='apiArt4'>
              <span className='apiArtspan1' style={display2}>{this.state.title}</span>
              {this.state.cover_image === "" ?  <div/>: <img src={this.state.cover_image} alt="img" />}
              <span className='apiArtspan2' style={display2}>{this.state.brief_content}</span>
              <ul className='apiArtul'>
                <li className='apiArtli2'>
                  <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png" alt="eye" />
                  &nbsp;{this.state.collect_count}
                </li>
                <li className='apiArtli2'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC" alt="like" />
                  &nbsp;{this.state.digg_count}
                </li>
                <li className='apiArtli2'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=" alt="comments" />
                  &nbsp;{this.state.comment_count}
                </li>
                <li className='apiArtli2'></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div> 
  )}
  
}