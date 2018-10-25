import React, {Component} from "react";
import Results from "../Results/Results.js";
import axios from "axios";


class Saved extends Component {

  state = {
    savedArticles: []
  }

  componentDidMount(){
    axios.get("/api/getSavedArticle").then((res) => {
      console.log(res.data);
    });
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

export default Saved;
