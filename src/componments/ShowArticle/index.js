import React, { Component } from 'react'

export default class ShowArticle extends Component{
  state={
    active:0
  }
  handleChange(e,msg){
    this.setState({ active: e });
    this.props.getdata2(msg,e)
  }
  render(){
    return(
      <div className="timeline-container">
        <nav className="tag-nav tag-navigator">
          <ul style={this.props.showcate.name0 === '' ?{padding: '5px', marginBottom: '15px' }:{display:'flex'}} className="nav-list tag-list">
            <li style={this.props.showcate.name0 === '' ?{display:'none'}:{display:'block'}} className={this.state.active===0?"nav-item tag router-link-exact-active route-active active":"nav-item tag"} onClick={() => {this.handleChange(0,'全部')}}>全部</li>
            <li style={this.props.showcate.name0 === '' ?{display:'none'}:{display:'block'}} className={this.state.active===1?"nav-item tag router-link-exact-active route-active active":"nav-item tag"} onClick={() => {this.handleChange(1,this.props.showcate.name0)}}>{this.props.showcate.name0}</li>
            <li style={this.props.showcate.name0 === '' ?{display:'none'}:{display:'block'}} className={this.state.active===2?"nav-item tag router-link-exact-active route-active active":"nav-item tag"} onClick={() => {this.handleChange(2,this.props.showcate.name1)}}>{this.props.showcate.name1}</li>
            <li style={this.props.showcate.name0 === '' ?{display:'none'}:{display:'block'}} className={this.state.active===3?"nav-item tag router-link-exact-active route-active active":"nav-item tag"} onClick={() => {this.handleChange(3,this.props.showcate.name2)}}>{this.props.showcate.name2}</li>
          </ul>
        </nav>
      </div>
    )
  }
}