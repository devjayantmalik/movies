import React from "react";
import fakeData from "../../api";
import Alert from "../../components/Alert";
import MoviesList from "../../components/MoviesList";
import VideoInfo from "../../components/VideoInfo";
import { connect } from "react-redux";
import { fetchMovieById } from "../../services/movies/actions";

class Watch extends React.Component {
  state = { loading: true, error: "" };

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
    console.log(movie.resolutions);
    return (
      <main className="container-fluid pt-3">
        <section>
          <h2 className="heading">{movie.title || "Title not available"}</h2>

          {this.renderError()}
          {this.renderLoader()}

          <div className="row">
            <div className="col col-md-12 col-lg-8">
              <video controls className="video-player" />
            </div>

            <div className="col">
              <VideoInfo
                length={movie.length}
                filesize={movie.filesize}
                cinema={movie.cinema ? movie.cinema.title : ""}
                producer={movie.producer ? movie.producer.title : ""}
              />
            </div>
          </div>

          <p className="lead">
            {movie.description || "Description not available"}
          </p>
        </section>

        <section>
          <h2 className="heading">Related Movies</h2>
          <MoviesList movies={fakeData} />
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ movies }, ownProps) => {
  const id = ownProps.match.params.id;
  const movie = movies.find((mov) => mov.id === id) || {};
  return { movie, id };
};

export default connect(mapStateToProps, { fetchMovieById })(Watch);
