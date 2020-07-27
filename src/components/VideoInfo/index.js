import React from "react";
import { Link } from "react-router-dom";

const VideoInfo = () => {
  return (
    <React.Fragment>
      <h2 className="h4 heading">Video Details</h2>
      <ul className="list-group">
        <li className="list-group-item bg-light lead font-weight-bold">
          Length: 2:00:00
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Download Size: 2 GB
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Category: Action
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Genre: Comedy
        </li>
        <li className="list-group-item bg-light lead font-weight-bold">
          Production: Team Fearless
        </li>
      </ul>

      <h2 className="h4 heading">Download Links</h2>
      <ul className="list-group font-weight-bold">
        <li className="list-group-item">
          <Link target="_blank" to="/">
            Openload
          </Link>
        </li>
        <li className="list-group-item">
          <Link target="_blank" to="/">
            Mediafire
          </Link>
        </li>
        <li className="list-group-item">
          <Link target="_blank" to="/">
            Direct Download
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default VideoInfo;
