import React from "react";
import MovieList from "../../components/MoviesList";
import { connect } from "react-redux";
import { fetchRecentMovies } from "../../services/movies/actions";
import Spinner from "../../components/Spinner";

class Home extends React.Component {
  state = { loading: true, err: null };

  componentDidMount() {
    this.props.fetchRecentMovies(
      () => {
        this.setState({ loading: false });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <main className="container-fluid pt-3">
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <section>
            <h2 className="heading">Most Recent</h2>
            <MovieList movies={this.props.movies} />
          </section>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

export default connect(mapStateToProps, { fetchRecentMovies })(Home);
