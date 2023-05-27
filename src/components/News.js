import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    

        constructor(){
            super();
            console.log("Hullo, this is a constructor.")
            this.state={
                articles: [],
                loading: false,
                page:1,
            }
        }

       async componentDidMount(){
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page}&pageSize=20`;
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
        }

        handleNext= async ()=>{
            console.log("Next");
            if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

            }
            else{
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page+1}&pageSize=20`;
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page:this.state.page+1,
                articles: parsedData.articles,
            })
        }
        }

        handlePrev= async ()=>{
            console.log("prev")
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page-1}&pageSize=20`;
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page:this.state.page-1,
                articles: parsedData.articles
            })
        }




  render() {
    return (
      <div  className='container my-3'>
        <h2>NewsApp- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col md-3" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0, 20):""} description={element.description?element.description.slice(0, 90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>

        })}  
        </div>


        <div>
        <div className="d-flex justify-content-start">
        <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePrev}>&larr;Previous</button>
        </div>
        <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
        </div>
        </div>

        
      </div>
    )
  }
}
