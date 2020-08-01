import React from "react";
import MoviesList from "../../components/MoviesList";
import Paginator from "../../components/Paginator";
import Alert from "../../components/Alert";

import { connect } from "react-redux";
import { fetchMovieByCinema } from "../../services/cinemas/actions";

class CinemaVideos extends React.Component {
  state = { loading: true, error: "" };
  componentDidMount() {
    const { id } = this.props;

    this.props.fetchMovieByCinema(
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
          <h2 className="heading">{this.props.cinema} Movies</h2>
          {this.renderError()}
          {this.renderLoader()}
          {this.renderResults()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ cinemas }, ownProps) => {
  // Extract movies from cinemas object
  let { movies } = cinemas;

  // Extract cinema id from route parameters
  const id = ownProps.match.params.id;

  // Filter movies
  movies = movies.filter((mov) => mov.cinema.id === id);

  // Get the cinema title
  const cinema =
    cinemas.cinemas.length > 0
      ? cinemas.cinemas.find((c) => c.id === id).title
      : "Cinema";

  return { movies, id, cinema };
};

export default connect(mapStateToProps, { fetchMovieByCinema })(CinemaVideos);
