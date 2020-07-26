import React from "react";
import MoviesList from "../../components/MoviesList";
import fakeData from "../../api";
import Paginator from "../../components/Paginator";

const Category = () => {
  return (
    <main className="container-fluid pt-3">
      <section>
        <h2 className="heading">Action Movies</h2>
        <MoviesList movies={fakeData} />
        <Paginator />
      </section>
    </main>
  );
};

export default Category;
