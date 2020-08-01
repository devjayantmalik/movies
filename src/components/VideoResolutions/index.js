import React from "react";
import PropTypes from "prop-types";

const VideoResolutions = ({ resolutions, onSelect }) => {
  const {
    resolution_1080,
    resolution_720,
    resolution_480,
    resolution_320,
    resolution_240,
  } = resolutions;

  return (
    <React.Fragment>
      <h2 className="h4 heading">Video Resolutions</h2>
      <ul className="list-group">
        {resolution_1080 && (
          <li
            onClick={() => onSelect(resolution_1080)}
            className="list-group-item bg-light lead font-weight-bold"
          >
            1080
          </li>
        )}

        {resolution_720 && (
          <li
            onClick={() => onSelect(resolution_720)}
            className="list-group-item bg-light lead font-weight-bold"
          >
            720
          </li>
        )}

        {resolution_480 && (
          <li
            onClick={() => onSelect(resolution_480)}
            className="list-group-item bg-light lead font-weight-bold"
          >
            480
          </li>
        )}
        {resolution_320 && (
          <li
            onClick={() => onSelect(resolution_320)}
            className="list-group-item bg-light lead font-weight-bold"
          >
            320
          </li>
        )}
        {resolution_240 && (
          <li
            onClick={() => onSelect(resolution_240)}
            className="list-group-item bg-light lead font-weight-bold"
          >
            240
          </li>
        )}
      </ul>
    </React.Fragment>
  );
};

VideoResolutions.propTypes = {
  resolutions: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default VideoResolutions;
