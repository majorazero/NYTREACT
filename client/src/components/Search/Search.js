import React, {Component} from "react";
import axios from "axios";
import Results from "../Results/Results.js";
import "./Search.css";

class Search extends Component {
  state = {
    topic: "something",
    sYear: "19991212",
    eYear: "20000101",
    results: []
  }

  componentDidMount(){
    //for testing only
    this.fetch();
  }

  fetch = () => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=702eb3676cd5414c906e440d5b73c3f7&q=${this.state.topic}&begin_date=${this.state.sYear.replace(/-/g,"")}&end_date=${this.state.eYear.replace(/-/g,"")}`).then((response) => {
      this.setState({
        results: response.data.response.docs.map((item,i) => {
          if (i < 5){
            return {
              title: item.headline.main,
              descrip: item.snippet,
              loc: item.web_url
            };
            // return <Results key={i} loc={item.web_url} title={item.headline.main} descrip={item.snippet} clickSave={() => {this.handleSave(i)}} />;
          }
        }).slice(0,5)
      })
    });
  }

  populate = () => {
    if(this.state.results.length !== 0){
      return this.state.results.map((item,i) => {
        return <Results key={i} title={item.title} descrip={item.descrip} loc={item.loc} clickSave={() => {this.handleSave(i)}} />

      });
    }
  }

  handleSave = (id) => {
    axios.post("/saveArticle",{article: this.state.results[id]}).then((res)=>{
      console.log(res.data);
    });
    console.log(id,this.state.results);
  }

  handleChange = (event) => {
    console.log(this.state);
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
      console.log("You didn't input all the fields yet!");
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
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="resultsBox">
          <h1>Results</h1>
          {this.populate()}
        </div>

      </div>
    );
  }
}

export default Search;
