import React from "react";
import fakeData from "../../api";
import MoviesList from "../../components/MoviesList";
import VideoInfo from "../../components/VideoInfo";

const Watch = () => {
  return (
    <main className="container-fluid pt-3">
      <section>
        <h2 className="heading">Video Title</h2>

        <div className="row">
          <div className="col col-md-12 col-lg-8">
            <video controls className="video-player" />
          </div>

          <div className="col">
            <VideoInfo />
          </div>
        </div>

        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          provident amet eos ab quisquam odio quas cumque numquam, temporibus
          fugit asperiores assumenda laboriosam aperiam dolorum consequatur
          consequuntur in voluptates accusamus!
        </p>
      </section>

      <section>
        <h2 className="heading">Related Movies</h2>
        <MoviesList movies={fakeData} />
      </section>
    </main>
  );
};

export default Watch;
