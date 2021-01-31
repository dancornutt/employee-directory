import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class DirectoryContainer extends Component {
  state = {
    sortAsc: true,
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

  toggleSort = () => {
    let newSortArr;
    let newSort = !this.state.sortAsc;
    console.log("sortAsc ", newSort);
    if (newSort) {
      newSortArr = this.state.results.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
    } else {
      newSortArr = this.state.results.sort((b, a) => (a.name.last > b.name.last) ? 1 : -1);

    }
    this.setState({
      results: newSortArr,
      sortAsc: newSort
    })
  }


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
        <Jumbotron fluid>
          <Container>
            <h1>Random People Directory</h1>
            <p>
              This is a random list of people to view.
            </p>
            <Button variant="primary" onClick={ (this.toggleSort)}>Sorted ASC</Button>
            
          </Container>
        </Jumbotron>
      <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default DirectoryContainer;
