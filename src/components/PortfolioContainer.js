import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Search from "../pages/Search";
import About from "../pages/About";
import Discover from "../pages/Discover";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  switchPage = () => {
    const currentPage = this.state.currentPage;
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Discover") {
      return <Discover />;
    } else if (currentPage === "Search") {
      return <Search />
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          {this.switchPage()}
        </div>
      </Router>
    );
  }
}

export default PortfolioContainer;
