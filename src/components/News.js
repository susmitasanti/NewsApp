import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

        constructor(props){
            super(props);
            console.log("Hullo, this is a constructor.")
            this.state={
                articles: [],
                loading: false,
                page:1,
            }
            document.title=`NewsApp-${this.capitalizeFirstLetter(this.props.category)}`
        } 


       async componentDidMount(){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            {this.state.loading && <Spinner />}
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles, 
                totalResults:parsedData.totalResults, 
                loading:false})
        }

        async UpdatePage(){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            {this.state.loading && <Spinner />}
            let data=await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                totalResults:parsedData.totalResults, 
                loading:false
            })
        }

        handleNext= async ()=>{
            console.log("Next");
            
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true})
            // {this.state.loading && <Spinner />}
            // let data=await fetch(url);
            // let parsedData = await data.json();
            // this.setState({
            //     page:this.state.page+1,
            //     articles: parsedData.articles,
            //     loading:false
            // })
            this.setState({page:this.state.page+1})
            this.UpdatePage();
        
        }

        handlePrev= async ()=>{
            console.log("prev")
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcb7ffda785540c5881aa5787bafd6dc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true})
            // {this.state.loading && <Spinner />}
            // let data=await fetch(url);
            // let parsedData = await data.json();
            // this.setState({
            //     page:this.state.page-1,
            //     articles: parsedData.articles,
            //     loading:false

            // })
            this.setState({page:this.state.page-1})
            this.UpdatePage();


        }




  render() {
    return (
      <div  className='container my-3' align="center">
        <h2 align="center" style={{margin: "35px", color:this.props.currentMode==="light"?"black": "white"}}>NewsApp-{this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner />} 
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col md-3" key={element.url}>
            <NewsItem  currentMode={this.props.currentMode} title={element.title?element.title.slice(0, 20):""} description={element.description?element.description.slice(0, 90):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt?new Date(element.publishedAt).toGMTString():"Unknown"} source={element.source.name?element.source.name:"Unknown"}/>
            </div>

        })}  
        </div>


        <div>
        <div className="d-flex justify-content-start">
        <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePrev}>&larr;Previous</button>
        </div>
        <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-dark" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext}>Next&rarr;</button>
        </div>
        </div>

        
      </div>
    )
  }
}
