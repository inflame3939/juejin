import React, { Component } from 'react'
import imgURL from '../../juejin.svg'
import imgURL2 from '../../arrow.svg'

export default class navTop extends Component{
  state={
    dropdown:true
  }
  render(){
    const { dropdown } = this.state
    return (
      <div className='container'>
        <ul>
          <li>
            <a href="http://localhost:3000/" >
              <img src={imgURL} alt="掘金" />
            </a>  
          </li>
          
          <li>
            <div className='menu' >
              <div className="dropdown"  onClick={()=>this.setState({dropdown:!dropdown})}>
                <span>首页</span>
                <img src={imgURL2} alt="下拉箭头" />
                <div className="dropdown-content" style={dropdown===true?{display:'none'}:{display:'block'}}>
                  <p id='dropdown'>首页</p>
                  <p>沸点</p>
                  <p>资讯</p>
                  <p>小册</p>
                  <p>活动</p>
                </div>
              </div>
            </div>
          </li>
          <li className='nav-item search search-add-li'><input className='search-input' type="search" placeholder="探索掘金" /></li>
          <li className='nav-item auth'><button className='login-button'>登录</button></li>
        </ul>
      </div>
      )
  }
  
}