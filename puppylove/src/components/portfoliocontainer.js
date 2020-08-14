import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

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
    } else if (currentPage === "Blog") {
      return <Blog />;
    } else if (currentPage === "Contact") {
      return <Contact />
    } else if (currentPage === "Home") {
      return <Home />;
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
