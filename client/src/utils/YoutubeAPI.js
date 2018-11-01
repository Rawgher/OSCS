require('dotenv').config()

export default {

    youtubeSearch: function (search) {

        // const youtubeApiKey = process.env.youtubeKey
        const youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8"
        // console.log(youtubeApiKey)

        let queryURL = "https://www.googleapis.com/youtube/v3/search?";

        // created search term that uses button clicked and what is typed in search bar
        let q = search

        // options used to determine what will be displayed
        let options = "&part=snippet&key=" + youtubeApiKey + "&type=video&q=" + q + "&maxResults=5&order=viewCount&relevanceLanguage=en&regionCode=US&publishedAfter=2017-01-01T00:00:00Z";

        console.log(queryURL + options)
        return queryURL + options
    },
    youtubeParse: function (response) {
        const res = response.data;
        console.log(res)
        const resArr = [];
        resArr.push(res);
        console.log(resArr)
        const videos = [];
        console.log(res.items[1].id.videoId)
        console.log(res.items[1].snippet.thumbnails.high.url)
        console.log(res.items[1].snippet.title)
        for (let i = 0; i < resArr.length; i++) {
            videos.push({
                videoId: res.items[i].id.videoId,
                thumbnail: res.items[i].snippet.thumbnails.high.url,
                title: res.items[i].snippet.title
            })
        }
        // res.forEach(data => {
        // videos.push({
        //     videoId: data.items.id.videoId,
        //     thumbnail: data.items.snippet.thumbnails.high.url,
        //     title: data.items.snippet.title
        // })
        // })
        console.log(videos)
        return videos;
    }
}