require("dotenv").config();

export default {
  stackSearch: function(search) {
    const stackApiKey = process.env.stackKey;

    // const stackAPIKey = "bDGLxdw38J9H0puc2BctAQ((";

    let queryURL = "https://api.stackexchange.com/2.2/similar?";

    let q = search;

    let options =
      "pagesize=5&order=desc&sort=relevance&title=" +
      q +
      "&site=stackoverflow&key=" +
      stackAPIKey;

    console.log(queryURL + options);
    return queryURL + options;
  },
  stackParse: function(response) {
    const res = response.data.items;
    // console.log(res);

    const stackResults = [];

    for (let i = 0; i < res.length; i++) {
      // stackResults.push(res[i]);
      stackResults.push({
        title: res[i].title,
        viewCount: res[i].view_count,
        score: res[i].score,
        link: res[i].link,
        date: res[i].creation_date
      });
    }
    console.log(stackResults);
    return stackResults;
  }
};
