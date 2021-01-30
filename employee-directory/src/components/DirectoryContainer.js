import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class DirectoryContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search 10 rados
  componentDidMount() {
      this.search(10);
  }

  // order = orderType => {
  //     //sort list of users either asc or desc
  // }

  search = qry => {
    API.search(qry)
      .then(res => {
        console.log("Prior to API Call", this.state.results);
        this.setState({results: [...res.data.results]});
        console.log("Post to API Call", this.state.results);
      })
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     results: this.search()
  //   })
  // };

  render() {
    return (
      <div>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default DirectoryContainer;
