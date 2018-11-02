
export default {

    googleSearch: function (search) {

        // const youtubeApiKey = process.env.youtubeKey
        const googleApiKey = "AIzaSyA0GuJJfQPthTPA7Epnxn1kYdspCZ9-W4A"
        // console.log(youtubeApiKey)
        "key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures"

        let queryURL = "https://www.googleapis.com/customsearch/v1?";

        // created search term that uses button clicked and what is typed in search bar
        let q = search

        // options used to determine what will be displayed
        let options = "key=" + googleApiKey + "&cx=005267821674354636312:vismjvwxen0&q=" + q;

        console.log(queryURL + options)
        return queryURL + options
    },
    googleParse: function (response) {
        const res = response.data.items;
        console.log(res)

        const videos = [];

        for (let i = 0; i < res.length; i++) {
            videos.push({
                videoId: res[i].id.videoId,
                thumbnail: res[i].snippet.thumbnails.high.url,
                title: res[i].snippet.title
            })
        }
        console.log(videos)
        return videos;
    }
}