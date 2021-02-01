import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class DirectoryContainer extends Component {
  state = {
    sortAsc: true,
    first: "",
    last: "",
    apiList: [],
    display: []
  };

  // When this component mounts, search 20 rados
  componentDidMount() {
    this.search(20);
  }

  //Search API and update state with results
  search = qry => {
    API.search(qry)
      .then(res => {
        this.setState(
          { display: [...res.data.results], apiList: [...res.data.results] }
        );
      })
      .catch(err => console.log(err));
  };

  //Update UI based input from user
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    this.setState(
      { display: this.state.apiList.filter(
        person => person.name[name].toLowerCase().includes(value.toLowerCase())) }
    );
  };

  //Toggle display list from ASC to DESC
  toggleSort = () => {
    let newSortArr;
    let newSort = !this.state.sortAsc;
    if (newSort) {
      newSortArr = this.state.display.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
    } else {
      newSortArr = this.state.display.sort((b, a) => (a.name.last > b.name.last) ? 1 : -1);

    }
    this.setState({
      display: newSortArr,
      sortAsc: newSort
    })
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Random People Directory</h1>
            <p>
              This is a random list of people to view.
            </p>
            
            <form className="form">
              <input
                value={this.state.first}
                name="first"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Filter First Name"
              />
              <input
                value={this.state.last}
                name="last"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Filter Last Name"
              />
            </form>
            <Button variant="primary" onClick={(this.toggleSort)}>Toggle Sorted Last Name</Button>
          </Container>
        </Jumbotron>
        <ResultList display={this.state.display} />
      </div>
    );
  }
}

export default DirectoryContainer;
