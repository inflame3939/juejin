import React, { Component } from 'react'
import { getCategories } from '../../fake-api';

export default class ShowArticle extends Component{
  constructor(){ 
    super()
    this.state = {
      hot:{
        categoryId : 0, sortBy : 'hot', offset : 0, limit : 10
      },
      category_name:{name0:'',name1:'',name2:'',name3:'',name4:''},
      active:0,
      success:false
    }
    async function helloAsync(){
      const a= await getCategories();
      const b = a.data.categories[0].category_name
      const c = a.data.categories[1].category_name
      const d = a.data.categories[2].category_name
      const f = a.data.categories[3].category_name
      const g = a.data.categories[4].category_name
      const e = [b,c,d,f,g]
      return e
    }
    helloAsync().then((e)=>{
      this.setState({
        category_name:{name0:e[0],name1:e[1],name2:e[2],name3:e[3],name4:e[4]},
        success:true}
      )
    })
  }
  handleChange(e,msg0,msg1,msg2){
    this.setState({ active: e });
    this.props.getdata(msg0,msg1,msg2,e)
  }
  render(){
    return(
      <nav className='view-nav'>
        <div className='nav-list left'>
          <div className={this.state.active===0?'nav-item router-link-exact-active route-active active':"nav-item"} onClick={() => {this.handleChange(0,'','','')}}>
            <div className="category-popover-box">{this.state.category_name.name0}</div>
          </div>
          <div className={this.state.active===1?'nav-item router-link-exact-active route-active active':"nav-item"} onClick={() => {this.handleChange(1,'Java','Python','Go')}}><div>{this.state.category_name.name1}</div></div>
          <div className={this.state.active===2?'nav-item router-link-exact-active route-active active':"nav-item"} onClick={() => {this.handleChange(2,'JavaScript','Vue.js','React.js')}}><div>{this.state.category_name.name2}</div></div>
          <div className={this.state.active===3?'nav-item router-link-exact-active route-active active':"nav-item"} onClick={() => {this.handleChange(3,'Flutter','Java','Kotlin')}}><div>{this.state.category_name.name3}</div></div>
          <div className={this.state.active===4?'nav-item router-link-exact-active route-active active':"nav-item"} onClick={() => {this.handleChange(4,'Swift','Objective-C','Flutter')}}><div>{this.state.category_name.name4}</div></div>
        </div>
      </nav>
      
    )
  }
}