import React from "react";
import PropTypes from "prop-types";

const VideoInfo = ({ movie }) => {
  return (
    <React.Fragment>
      <h2 className="h4 heading">Video Details</h2>
      <ul className="list-group">
        <li className="list-group-item bg-light lead font-weight-bold">
          Length: {movie.length}
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Download Size: {movie.filesize}
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Category: {movie.category}
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Production: {movie.producer}
        </li>
      </ul>
    </React.Fragment>
  );
};

VideoInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default VideoInfo;
