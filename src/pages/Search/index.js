import React from "react";

import MoviesList from "../../components/MoviesList";
import Paginator from "../../components/Paginator";
import Alert from "../../components/Alert";
import Searchbar from "../../components/Searchbar";

import { connect } from "react-redux";
import { searchByTitle } from "../../services/search/actions";

class Search extends React.Component {
  state = { loading: false, error: "" };

  componentDidMount() {
    this.handleFormSubmit(this.props.title);
  }

  handleFormSubmit = (title) => {
    // Clean existing state
    this.setState({ loading: true, error: "" });

    // Search for movie and update the required info
    this.props.searchByTitle(
      title,
      () => {
        this.setState({ loading: false });
      },
      (err) => {
        this.setState({ loading: false, error: err });
      }
    );
  };

  renderLoader = () => {
    return this.state.loading ? (
      <Alert info message="Fetching your data..." />
    ) : null;
  };

  renderError = () => {
    const { loading, error } = this.state;
    return !loading && error ? <Alert danger message={error} /> : null;
  };

  renderResults = () => {
    if (!this.state.loading) {
      return (
        <>
          <MoviesList movies={this.props.results} />
          <Paginator />
        </>
      );
    }

    return null;
  };

  render() {
    return (
      <main className="container-fluid pt-3">
        <Searchbar
          onSubmit={this.handleFormSubmit}
          placeholder="Enter text to search"
        />
        <section>
          <h2 className="heading">Search Results</h2>
          {this.renderLoader()}
          {this.renderError()}
          {this.renderResults()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ searches }, ownProps) => {
  const title = ownProps.match.params.text;

  return { results: searches, title };
};

export default connect(mapStateToProps, { searchByTitle })(Search);
