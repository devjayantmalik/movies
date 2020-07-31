let fakeData = [];
for (let i = 0; i < 12; i++) {
  fakeData.push({
    id: i,
    poster: "/images/movie.jpg",
    title: "Movie title will appear here.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident amet eos ab quisquam odio quas cumque numquam, temporibus fugit asperiores assumenda laboriosam aperiam dolorum consequatur consequuntur in voluptates accusamus!",
    length: "2:00:00",
    filesize: "2 GB",
    category: "hollywood",
    producer: "brazzers",
    resolutions: {
      1080: "/movies/1080p.mp4",
      720: "/movies/720p.mp4",
      480: "/movies/480p.mp4",
      320: "/movies/320p.mp4",
      240: "/movies/240.mp4",
    },
  });
}

export default fakeData;
