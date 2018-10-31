require ("dotenv")

var youtubeApiKey = process.env.youtubeKey

        var queryURL = "https://www.googleapis.com/youtube/v3/search";

        // created search term that uses button clicked and what is typed in search bar
        var q =;

        // options used to determine what will be displayed
        var options = {
            part: "snippet",
            key: youtubeApiKey,
            type: "video",
            q: q,
            maxResults: 5,
            order: "viewCount",
            relevanceLanguage: "en",
            regionCode: "US",
            publishedAfter: "2017-01-01T00:00:00Z"
        };