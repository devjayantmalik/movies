import React from "react";
import Alert from "../../components/Alert";
import MoviesList from "../../components/MoviesList";
import VideoInfo from "../../components/VideoInfo";
import VideoResolutions from "../../components/VideoResolutions";

import { connect } from "react-redux";
import { fetchMovieById } from "../../services/movies/actions";
import { fetchRandomMovies } from "../../services/random/actions";

class Watch extends React.Component {
  state = { loading: true, error: "", playerVideoSource: "" };

  componentDidMount() {
    const id = this.props.id;
    this.props.fetchMovieById(
      id,
      () => {
        this.setState({ loading: false });
      },
      (err) => {
        this.setState({ loading: false, error: err });
      }
    );

    this.props.fetchRandomMovies(
      () => {
        console.log("fetched random movies");
      },
      (err) => {
        console.log(err);
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

  render() {
    const movie = this.props.movie;

    return (
      <main className="container-fluid pt-3">
        <section>
          <h2 className="heading">{movie.title || "Title not available"}</h2>

          {this.renderError()}
          {this.renderLoader()}

          <div className="row">
            <div className="col col-md-12 col-lg-8">
              <video
                controls
                className="video-player"
                src={this.state.playerVideoSource}
              ></video>
            </div>

            <div className="col">
              <VideoInfo
                length={movie.length}
                filesize={movie.filesize}
                cinema={movie.cinema ? movie.cinema.title : ""}
                producer={movie.producer ? movie.producer.title : ""}
              />
              <VideoResolutions
                onSelect={(url) => this.setState({ playerVideoSource: url })}
                resolutions={movie.resolutions || {}}
              />
            </div>
          </div>

          <p className="lead">
            {movie.description || "Description not available"}
          </p>
        </section>

        <section>
          <h2 className="heading">Random Movies</h2>
          <MoviesList movies={this.props.randomMovies} />
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ movies, randomMovies }, ownProps) => {
  const id = ownProps.match.params.id;
  const movie = movies.find((mov) => mov.id === id) || {};
  randomMovies = randomMovies.filter((mov) => mov.id !== movie.id);
  return { movie, id, randomMovies };
};

export default connect(mapStateToProps, { fetchMovieById, fetchRandomMovies })(
  Watch
);
