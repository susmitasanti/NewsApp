import React, { Component } from 'react'

export default class NewsItem extends Component {
    
   
  render() {
    // let {title, description, imageUrl, newsUrl}=this.props;
   
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={this.props.imageUrl?this.props.imageUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6RWP755TNJBYHKS6JFGWJOBJKE.JPG&w=1440"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">{this.props.description}...</p>
            <p class="card-text"><small class="text-body-secondary">Source: {this.props.source}<br/>Author: {this.props.author}<br/> On {this.props.date}</small></p>
            <a href={this.props.newsUrl} target="_blank" className="btn btn" style={{backgroundColor:this.props.currentMode==="light"?"#adb5bd":"black", color:this.props.currentMode==="light"?"black":"white"}}>Read more</a>
        </div>
        </div>

      </div>
    )
  }
}
