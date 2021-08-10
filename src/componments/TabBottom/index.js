import React, { Component } from 'react'

export default class ShowArticle extends Component{
  state={
    active:0
  }
  handleClick(e,sortBy){
    this.setState({ active: e })
    this.props.getdata3(sortBy)
  }
  handleHistory(e){
    this.setState({ active: e })
    this.props.getdata5()
  }
  render(){
    return(
      <div className="timeline-container">
        <div className="timeline-content">
          <div className="timeline-entry-list">
            <header className="list-header">
              <nav className="list-nav">
                <div className='nav-list left'>
                  <div className={this.state.active===0?"nav-item router-link-exact-active route-active active":"nav-item"} onClick={() => {this.handleClick(0,'hot')}}><div className="category-popover-box">热门</div></div>
                  <div className={this.state.active===1?"nav-item router-link-exact-active route-active active":"nav-item"} onClick={() => {this.handleClick(1,'new')}}><div>最新</div></div>
                  <div className={this.state.active===2?"nav-item router-link-exact-active route-active active":"nav-item"} onClick={() => {this.handleHistory(2)}}><div>历史</div></div>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
      
    )
  }
}