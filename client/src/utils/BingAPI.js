const https = require("https");

export default {
  bingSearch: function(search) {
    const SUBSCRIPTION_KEY = process.env.SUBSCRIPTION_KEY;
    // const SUBSCRIPTION_KEY = "1e61ef8e51744e889d109185995b9489";
    if (!SUBSCRIPTION_KEY) {
      throw new Error("Missing the AZURE_SUBSCRIPTION_KEY environment varable");
    }

    return new Promise((resolve, reject) => {
      https.get(
        {
          hostname: "api.cognitive.microsoft.com",
          path: "/bing/v7.0/search?q=" + encodeURIComponent(search),
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
            resolve(returnBody);
          });
          res.on("error", e => {
            console.log("Error: " + e.message);
            reject(e);
          });
        }
      );
    });
  },

  bingParse: function(response) {
    const res = response.webPages.value;
    console.log(res);

    const bingSearch = [];

    for (let i = 0; i < res.length; i++) {
      bingSearch.push({
        name: res[i].name,
        url: res[i].url,
        snippet: res[i].snippet
      });
    }
    console.log(bingSearch);
    return bingSearch;
  }
};
