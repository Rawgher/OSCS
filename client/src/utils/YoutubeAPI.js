export default {
  youtubeSearch: function(search) {
    // const youtubeApiKey = process.env.youtubeKey;
    const youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";
    // console.log(youtubeApiKey);

    let queryURL = "https://www.googleapis.com/youtube/v3/search?";

    // created search term that uses button clicked and what is typed in search bar
    let q = search;

    // options used to determine what will be displayed
    let options =
      "&part=snippet&key=" +
      youtubeApiKey +
      "&type=video&q=" +
      q +
      "&maxResults=5&order=viewCount&relevanceLanguage=en&regionCode=US&publishedAfter=2017-01-01T00:00:00Z";

    console.log(queryURL + options);
    return queryURL + options;
  },
  youtubeParse: function(response) {
    const res = response.data.items;
    console.log(res);

    const videos = [];

    for (let i = 0; i < res.length; i++) {
      videos.push({
        videoId: res[i].id.videoId,
        thumbnail: res[i].snippet.thumbnails.high.url,
        title: res[i].snippet.title
      });
    }
    console.log(videos);
    return videos;
  }
};
