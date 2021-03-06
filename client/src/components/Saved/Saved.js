import React, {Component} from "react";
import Results from "../Results/Results.js";
import axios from "axios";


class Saved extends Component {

  state = {
    results: []
  }
  
  componentDidMount(){
    this.fetch();
  }

  fetch() {
    axios.get("/api/getSavedArticle").then((res) => {
      console.log(res.data);
      this.setState({results: res.data});
    });
  }

  populate = () => {
    if(this.state.results.length !== 0){
      return this.state.results.map((item,i) => {
        return <Results key={i} date={item.date} title={item.title} descrip={item.descrip} loc={item.loc} onDelete={() => {this.handleDelete(item._id)}}/>
      });
    }
  }

  handleDelete = (id) => {
    console.log(id);
    axios.delete("/api/delete",{data:{id}}).then((res) => {
      console.log(res.data);
      this.fetch();
    });
  }

  render(){
    return(
      <div className="savedBox">
        <span>{this.state.random}</span>
        <h1>Your Saved Articles</h1>
        {this.populate()}
      </div>
    );
  }
}

export default Saved;
