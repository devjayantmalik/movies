import React from "react";
import MoviesList from "../../components/MoviesList";
import Paginator from "../../components/Paginator";
import { connect } from "react-redux";
import { fetchMovieByProduction } from "../../services/movies/actions";

class ProductionVideos extends React.Component {
  state = { loading: true };
  componentDidMount() {
    const { id } = this.props;

    this.props.fetchMovieByProduction(
      id,
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
        <section>
          <h2 className="heading">{this.props.production} Movies</h2>
          <MoviesList movies={this.props.movies} />
          <Paginator />
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ movies }, ownProps) => {
  const id = ownProps.match.params.id;
  const production = movies.length > 0 ? movies[0].producer.title : "";
  return { movies, id, production };
};

export default connect(mapStateToProps, { fetchMovieByProduction })(
  ProductionVideos
);
