import React from "react";
import PropTypes from "prop-types";

const VideoInfo = ({ length, filesize, cinema, producer }) => {
  return (
    <React.Fragment>
      <h2 className="h4 heading">Video Details</h2>
      <ul className="list-group">
        {length && (
          <li className="list-group-item bg-light lead font-weight-bold">
            Length: {length}
          </li>
        )}
        {filesize && (
          <li className="list-group-item bg-light lead font-weight-bold">
            Download Size: {filesize}
          </li>
        )}
        {cinema && (
          <li className="list-group-item bg-light lead font-weight-bold">
            Cinema: {cinema}
          </li>
        )}
        {producer && (
          <li className="list-group-item bg-light lead font-weight-bold">
            Production: {producer}
          </li>
        )}
      </ul>
    </React.Fragment>
  );
};

VideoInfo.propTypes = {
  length: PropTypes.string,
  filesize: PropTypes.string,
  cinema: PropTypes.string,
  producer: PropTypes.string,
};

export default VideoInfo;
