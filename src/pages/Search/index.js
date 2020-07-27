import React from "react";
// import MoviesList from "../../components/MoviesList";
// import fakeData from "../../api";
// import Paginator from "../../components/Paginator";
import Alert from "../../components/Alert";

const Search = () => {
  return (
    <main className="container-fluid pt-3">
      <section>
        <h2 className="heading">Search Results</h2>
        <Alert error message="No results found" />
        {/* <MoviesList movies={fakeData} />
        <Paginator /> */}
      </section>
    </main>
  );
};

export default Search;
