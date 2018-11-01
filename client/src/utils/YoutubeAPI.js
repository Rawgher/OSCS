require('dotenv').config()

export default {

    youtubeSearch: function (search) {

        const youtubeApiKey = process.env.youtubeKey
        console.log(youtubeApiKey)

        let queryURL = "https://www.googleapis.com/youtube/v3/search";

        // created search term that uses button clicked and what is typed in search bar
        let q = search.replace(/%20/g, "+");

        // options used to determine what will be displayed
        let options = "&part=snippet&key=" + youtubeApiKey + "&type=video&q=" + q + "&maxResults=5&order=viewCount&relevanceLanguage=en&regionCode=US&publishedAfter=2017-01-01T00:00:00Z";

        console.log(queryURL + options)
        return queryURL + options
    },
    youtubeParse: function (response) {
        const docs = response.data.response.docs;
        console.log(docs)
        const videos = [];
        docs.forEach(data => {
            videos.push({
                videoId: data.items.id.videoId,
                thumbnail: data.items.snippet.thumbnails.high.url,
                title: data.items.snippet.title
            })
        })
        return videos;
    }
}