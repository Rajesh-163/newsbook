import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    article =[];
    constructor(){
        super();
        this.state = {
            article: this.article,
            loading: false
        }
    }
    async componentDidMount(){
      let url =  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0529700f5f6c400c9f9d70a27e623dd4" ;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({article: parseData.articles});
    }
  render() {
    return (
      <div className="mainCont">
        <h1>Top Heading</h1>
       
        <div className="row">
        { this.state.article.map((ele)=>{
            return <div className="itemCont" key={ele.url}>
            <NewsItem title={ele.title} imgUrl={ele.urlToImage} description={ele.description} newsUrl={ele.url}/>
        </div>;
        })
       } 
            
        </div>
      </div>
    )
  }
}
