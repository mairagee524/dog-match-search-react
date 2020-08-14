import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Search from "./pages/Search";
import About from "./pages/About";
import Discover from "./pages/Discover";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
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
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.switchPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
