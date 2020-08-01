import React from "react";
import MoviesList from "../../components/MoviesList";
import Paginator from "../../components/Paginator";

import { connect } from "react-redux";
import { fetchMovieByProduction } from "../../services/producers/actions";
import Alert from "../../components/Alert";

class ProductionVideos extends React.Component {
  state = { loading: true, error: "" };
  componentDidMount() {
    const { id } = this.props;

    this.props.fetchMovieByProduction(
      id,
      () => {
        this.setState({ loading: false });
      },
      (err) => {
        this.setState({ loading: false, error: err });
      }
    );
  }

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
          <MoviesList movies={this.props.movies} />
          <Paginator />
        </>
      );
    }
  };

  render() {
    return (
      <main className="container-fluid pt-3">
        <section>
          <h2 className="heading">{this.props.production} Movies</h2>
          {this.renderError()}
          {this.renderLoader()}
          {this.renderResults()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ producers }, ownProps) => {
  // Extract movies from producers object
  let { movies } = producers;

  // Extract cinema id from route parameters
  const id = ownProps.match.params.id;

  // Filter movies
  movies = movies.filter((mov) => mov.producer.id === id);

  // Get the producer title
  const production =
    producers.producers.length > 0
      ? producers.producers.find((c) => c.id === id).title
      : "Cinema";

  return { movies, id, production };
};

export default connect(mapStateToProps, { fetchMovieByProduction })(
  ProductionVideos
);
