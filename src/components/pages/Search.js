import React, { Component }  from "react";
import SearchForm from "../Form";
import Container from "../Container";
import API from "../../utils/API";

class DogSearch extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchDogs("Pug");
  }

  searchDogs = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDogs(this.state.search);
  };

  render() {
    return (
      <Container>
        <h1>Search by Breed!</h1>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
        <div>INSERT PHOTOS HERE TOO</div>
      </Container>
    );
  }
}


export default DogSearch;
