import React from "react";
import fakeData from "../../api";
import MoviesList from "../../components/MoviesList";
import VideoInfo from "../../components/VideoInfo";

const fakeMovie = fakeData[0];

const Watch = () => {
  return (
    <main className="container-fluid pt-3">
      <section>
        <h2 className="heading">{fakeMovie.title}</h2>

        <div className="row">
          <div className="col col-md-12 col-lg-8">
            <video controls className="video-player" />
          </div>

          <div className="col">
            <VideoInfo movie={fakeMovie} />
          </div>
        </div>

        <p className="lead">{fakeMovie.description}</p>
      </section>

      <section>
        <h2 className="heading">Related Movies</h2>
        <MoviesList movies={fakeData} />
      </section>
    </main>
  );
};

export default Watch;
