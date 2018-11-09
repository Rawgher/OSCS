export default {
  googleSearch: function(search) {
    const https = require("https");
    const SUBSCRIPTION_KEY = "1e61ef8e51744e889d109185995b9489";
    if (!SUBSCRIPTION_KEY) {
      throw new Error("Missing the AZURE_SUBSCRIPTION_KEY environment varable");
    }
    function bingWebSearch(query) {
      https.get(
        {
          hostname: "api.cognitive.microsoft.com",
          path: "/bing/v7.0/search?q=" + encodeURIComponent(query),
          headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY }
        },
        res => {
          let body = "";
          res.on("data", part => (body += part));
          res.on("end", () => {
            for (var header in res.headers) {
              if (
                header.startsWith("bingapis-") ||
                header.startsWith("x-msedge-")
              ) {
                console.log(header + ": " + res.headers[header]);
              }
            }
            console.log("\nJSON Response:\n");
            console.dir(JSON.parse(body), { colors: false, depth: null });
            let returnBody = JSON.parse(body);
            return returnBody;
          });
          res.on("error", e => {
            console.log("Error: " + e.message);
            throw e;
          });
        }
      );
    }
    const query = search;
    bingWebSearch(query);
  },
  bingParse: function(response) {
    const res = response.webPages.value;
    console.log(res);

    const googleSearch = [];

    for (let i = 0; i < res.length; i++) {
      googleSearch.push({
        name: res[i].name,
        url: res[i].url,
        snippet: res[i].snippet
      });
    }
    console.log(googleSearch);
    return googleSearch;
  }
};
