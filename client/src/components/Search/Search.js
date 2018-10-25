import React, {Component} from "react";
import axios from "axios";
import Results from "../Results/Results.js";
import "./Search.css";

class Search extends Component {
  state = {
    topic: "",
    sYear: "",
    eYear: "",
    results: [],
    message: "",
    message2: ""
  }

  componentDidMount(){
    //for testing only
    //this.fetch();
  }

  fetch = () => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=702eb3676cd5414c906e440d5b73c3f7&q=${this.state.topic}&begin_date=${this.state.sYear.replace(/-/g,"")}&end_date=${this.state.eYear.replace(/-/g,"")}`).then((response) => {
      this.setState({
        results: response.data.response.docs.map((item,i) => {
          if (i < 5){
            return {
              message2: "",
              title: item.headline.main,
              descrip: item.snippet,
              loc: item.web_url,
              date: item.pub_date.substring(0,10).replace(/-/g,"/")
            };
          }
        }).slice(0,5)
      })
    });
  }

  populate = () => {
    if(this.state.results.length !== 0){
      return this.state.results.map((item,i) => {
        return <Results key={i} date={item.date} title={item.title} descrip={item.descrip} loc={item.loc} clickSave={() => {this.handleSave(i)}} />
      });
    }
  }

  handleSave = (id) => {
    axios.post("/api/saveArticle",{article: this.state.results[id]}).then((res)=>{
      this.setState({message: res.data});
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.topic !== "" && this.state.sYear !== "" && this.state.eYear !== ""){
      this.fetch();
    }
    else{
      this.setState({message2:"You didn't input all the fields yet!"});
    }
  }

  render(){
    return(
      <div>
        <div className="searchBox">
          <h2>Search</h2>
          <form onSubmit={this.handleSubmit}>
            <h3>Topic</h3>
            <input onChange={this.handleChange} type="text" name="topic" />
            <h3>Start Year</h3>
            <input min="1851-09-18" onChange={this.handleChange} type="date" name="sYear" />
            <h3>End Year</h3>
            <input min="1851-09-18" onChange={this.handleChange} type="date" name="eYear" />
            <div>
              <small>{this.state.message2}</small>
            </div>
            <button className="btn btn-primary searchBt" type="submit">Submit</button>
          </form>
        </div>

        <div className="resultsBox">
          <h2>Results</h2><span>{this.state.message}</span>
          {this.populate()}
        </div>

      </div>
    );
  }
}

export default Search;
