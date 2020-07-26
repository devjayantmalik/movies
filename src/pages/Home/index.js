import React from "react";
import MovieList from "../../components/MoviesList";

let fakeData = [];
for (let i = 0; i < 12; i++) {
  fakeData.push({
    id: i,
    poster: "/images/movie.jpg",
    title: "Movie title will appear here.",
  });
}

const Home = () => {
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
};

export default Home;
