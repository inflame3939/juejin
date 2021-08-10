import React from 'react'
import NavTop from './componments/NavTop'
import Aart from './componments/Aart'
import Recom from './componments/Recom'
import ShowArticle from './componments/ShowArticle'
import TabBottom from './componments/TabBottom'
import History from './componments/History'
import { SlidingWindowScrollHook } from './componments/InfiniteScroll'
import './App.css'

class App extends React.Component{
  constructor(){ 
    super()
    this.state = {
      sortBy : 'hot',
      art:[],
      com:[],
      showcate:{name0:'',name1:'',name2:'',name3:'全部',categoryId:0,},
      showcate2: '全部',
      categoryId1:0,
      article_id:"6984908770149138446",
      showhistory:false,
      active:false,
      success:false
    }
  }
  getData(msg0,msg1,msg2,categoryId){
    this.setState({
      showcate: {name0:msg0,name1:msg1,name2:msg2,categoryId}
    });
  }
  getData2(showcate2,categoryId1){
    this.setState({
      showcate2,categoryId1
    });
  }
  getData3(sortBy){
    this.setState({sortBy,showhistory:false})
  }
  getData4(article_id){
    localStorage.setItem(article_id,article_id)
    this.setState({article_id,active:!this.state.active})
  }
  getData5=()=>{
    this.setState({showhistory:true})
  }
  articleid = (article_id) =>{
    this.getData4(article_id)
  }
  history=()=>{
    let value=[]
    if(localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        value[i] = localStorage.getItem(key)
    }
    }
    return value
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <NavTop/>
        </header>
        <div>
          <div className='art1'></div>
          <div className='containerr article' style={!this.state.active?{display:'none'}:{display:'block'}}>
            <div className='art2'>
              {/* 点击页面的导航后显示的文章 */}
              <Aart article_id={this.state.article_id}></Aart>
            </div>
          </div>
        </div>
        <div>
          <main className='container main-container with-view-nav'>
            <div className='view timeline-index-view'>
              <div style={this.state.active || this.state.showhistory?{display:'none'}:{display:'block'}}>
                {/* 第一个tab */}
              <Recom getdata={this.getData.bind(this)} ></Recom>
                {/* 第二个tab */}
              <ShowArticle getdata2={this.getData2.bind(this)} showcate={this.state.showcate}></ShowArticle>
              </div>
              <div style={this.state.active?{display:'none'}:{display:'block'}}>
                {/* 主tab */}
              <TabBottom getdata3={this.getData3.bind(this)} getdata5={this.getData5.bind(this)} showhistory={this.state.showhistory} />
              </div>
            </div>
          </main>
          <div style={this.state.active || this.state.showhistory?{display:'none'}:{display:'block'}} className='apiArt' id='i' >
              {/* 主页面的文章无限滚动 */}
            <SlidingWindowScrollHook getdata4={this.getData4.bind(this)} sortBy={this.state.sortBy} height={195} categoryId1={this.state.categoryId1} showcate={this.state.showcate} showhistory={this.state.showhistory} />
          </div>
        </div>
        <div style={this.state.active || !this.state.showhistory?{display:'none'}:{display:'block'}} className='apiArt' id='i'>
            {/* 历史文章 */}
          {this.history().map((item)=><History articleid={this.articleid} article_id={item} key={item}/>)}
        </div>
      </div>
    )
  }
}

export default App;
