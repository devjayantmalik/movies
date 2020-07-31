import React from "react";
import MoviesList from "../../components/MoviesList";
import fakeData from "../../api";
import Paginator from "../../components/Paginator";
import Alert from "../../components/Alert";
import { connect } from "react-redux";

class Search extends React.Component {
  state = { loading: false };
  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  renderLoader = () => {
    return this.state.loading ? (
      <Alert info message="Fetching your data..." />
    ) : null;
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
        <section>
          <h2 className="heading">Search Results</h2>
          {this.renderLoader()}
          {this.renderResults()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { results: fakeData };
};

export default connect(mapStateToProps, {})(Search);
