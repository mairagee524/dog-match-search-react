import React, { Component }  from "react";
import SearchForm from "../components/Form";
import Container from "../components/Container";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class DogSearch extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container>
          <h1>Search by Breed!</h1>
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
                <SearchResults results={this.state.results} />
          <div>INSERT PHOTOS HERE TOO</div>
        </Container>
      </div>
    );
  }
}


export default DogSearch;
