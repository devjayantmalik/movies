import React from "react";
import MovieList from "../../components/MoviesList";
import fakeData from "../../api";

class Home extends React.Component {
  state = { loading: false, err: null };

  render() {
    return (
      <main className="container-fluid pt-3">
        <section>
          <h2 className="heading">Most Recent</h2>
          <MovieList movies={fakeData} />
        </section>

        <section>
          <h2 className="heading">Most Viewed</h2>
          <MovieList movies={fakeData} />
        </section>
      </main>
    );
  }
}

export default Home;
