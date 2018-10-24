import React, {Component} from "react";
import axios from "axios";
import Results from "../Results/Results.js";

class Search extends Component {
  state = {
    topic: "",
    sYear: "",
    eYear: "",
    results: []
  }

  fetch = () => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=702eb3676cd5414c906e440d5b73c3f7&q=${this.state.topic}&begin_date=${this.state.sYear.replace(/-/g,"")}&end_date=${this.state.eYear.replace(/-/g,"")}`).then((response) => {
      console.log(response.data.response.docs);
      this.setState({
        results: response.data.response.docs.map((item,i) => {
          if (i < 5){
            return <Results key={item.web_url} loc={item.web_url} title={item.headline.main} descrip={item.snippet} />;
          }
        })
      })
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
      console.log("You didn't input all the fields yet!");
    }
  }

  render(){
    return(
      <div>
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

        <div>
          <h1>Results</h1>
          {this.state.results}
        </div>

      </div>
    );
  }
}

export default Search;
