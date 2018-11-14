const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/OSCSmongo");

const date = new Date();

const userSeed = [
  {
    user_name: "Hunter4Lyfe",
    user_firstName: "Enea",
    user_lastName: "Destiny",
    user_pass: "Destiny2",
    user_level: 0,
    createdAt: date,
    updatedAt: date
  },
  {
    user_name: "Rawgher",
    user_firstName: "Roger",
    user_lastName: "Penderheisenburgerer",
    user_pass: "CurseUFlapjack",
    user_level: 1,
    createdAt: date,
    updatedAt: date
  },
  {
    user_name: "MyLaifu4Waifu",
    user_firstName: "Collin",
    user_lastName: "Fumanchu",
    user_pass: "SenpaiPlz",
    user_level: 0,
    createdAt: date,
    updatedAt: date
  },
  {
    user_name: "GreyIsLife",
    user_firstName: "Elaine",
    user_lastName: "Queen",
    user_pass: "lessthan3",
    user_level: 1,
    createdAt: date,
    updatedAt: date
  },
  {
    user_name: "JS94",
    user_firstName: "Jordan",
    user_lastName: "Schrodinger",
    user_pass: "1a2b3",
    user_level: 0,
    createdAt: date,
    updatedAt: date
  }
];

const topicsSeed = [
  {
    topic_name: "HTML",
    topic_description: "All things DOM related",
    topic_number: 1,
    topic_author: "Hunter4Lyfe",
    topic_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    topic_name: "CSS",
    topic_description: "Got style?",
    topic_number: 2,
    topic_author: "Rawgher",
    topic_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    topic_name: "Javascript",
    topic_description: "Front end moving parts",
    topic_number: 3,
    topic_author: "Rawgher",
    topic_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    topic_name: "API AJAX",
    topic_description: "Dealing with api and JSON",
    topic_number: 4,
    topic_author: "Hunter4Lyfe",
    topic_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    topic_name: "mySQL",
    topic_description: "SQL tables",
    topic_number: 5,
    topic_author: "MyLaifu4Waifu",
    topic_update: date,
    createdAt: date,
    updatedAt: date
  }
];

const postsSeed = [
  {
    post_author: "Hunter4Lyfe",
    post_subject: "Make look nice",
    post_body: "What CSS framework should I use to make my page look the best?",
    post_rating: 69,
    post_topic: "CSS",
    post_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    post_author: "MyLaifu4Waifu",
    post_subject: "I like a challenge",
    post_body: "How can I make my code more difficult?",
    post_rating: 9,
    post_topic: "Javascript",
    post_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    post_author: "Rawgher",
    post_subject: "<a> links",
    post_body: "How do I use an <a> tag properly?",
    post_rating: 90,
    post_topic: "Javascript",
    post_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    post_author: "GreyIsLife",
    post_subject: "APIs",
    post_body: "How do I get my Spotify API keys?",
    post_rating: 9001,
    post_topic: "API AJAX",
    post_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    post_author: "Hunter4Lyfe",
    post_subject: "SQL HELP ME!",
    post_body: "My seeds are not seeding",
    post_rating: 500,
    post_topic: "mySQL",
    post_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    post_author: "MyLaifu4Waifu",
    post_subject: "DATEONLY!",
    post_body: "Why doesn't datatypes.DATEONLY work???",
    post_rating: 1000000,
    post_topic: "mySQL",
    post_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    post_author: "JS94",
    post_subject: "My code",
    post_body: "My code isn't working, what should I do?",
    post_rating: 15,
    post_topic: "Javascript",
    post_update: date,
    createdAt: date,
    updatedAt: date
  }
];

const repliesSeed = [
  {
    reply_author: "GreyIsLife",
    reply_post: 2,
    reply_content: "delete system32",
    reply_rating: 7500,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "JS94",
    reply_post: 3,
    reply_content:
      "You need an href set to your desired location, and you can add a target if you want.",
    reply_rating: 8000,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "GreyIsLife",
    reply_post: 4,
    reply_content: "cry in a corner, then give it to me",
    reply_rating: 1500,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Hunter4Lyfe",
    reply_post: 1,
    reply_content: "I am a fan of materialize CSS",
    reply_rating: 1500,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Rawgher",
    reply_post: 1,
    reply_content: "I usually stick to tachyons.io",
    reply_rating: 15004,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "GreyIsLife",
    reply_post: 1,
    reply_content: "Why not just use plain old, boring bootstrap?",
    reply_rating: 15030,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "JS94",
    reply_post: 2,
    reply_content: "Have you tried typing rm -r in your command line?",
    reply_rating: 15010,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "GreyIsLife",
    reply_post: 2,
    reply_content: "This is Enea isn't it?",
    reply_rating: 51,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Rawgher",
    reply_post: 2,
    reply_content: "Don't install any of your npms nd watch the rage flow.",
    reply_rating: 500,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "GreyIsLife",
    reply_post: 2,
    reply_content: "I agree with Rawgher",
    reply_rating: 10,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Hunter4Lyfe",
    reply_post: 1,
    reply_content: "I like where you all went with this...",
    reply_rating: 150,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Hunter4Lyfe",
    reply_post: 4,
    reply_content: "You can find a link to sign up if you google search it",
    reply_rating: 15,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Rawgher",
    reply_post: 4,
    reply_content: "Then you haveto wait like a week for your keys",
    reply_rating: 5000,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Rawgher",
    reply_post: 4,
    reply_content: "I hope your homework in't due soon...",
    reply_rating: 15010,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Rawgher",
    reply_post: 5,
    reply_content: "Are all of the needed columns being seeded in the row?",
    reply_rating: 15,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "MyLaifu4Waifu",
    reply_post: 5,
    reply_content:
      "If your database changed, make sure to drop your schema and rerun it",
    reply_rating: 10,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "JS94",
    reply_post: 5,
    reply_content:
      "I kept running into this issue too.  I just had to rerun the schema",
    reply_rating: 13,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "MyLaifu4Waifu",
    reply_post: 6,
    reply_content:
      "Cause mySQL decided not to change their documentation and make us think things are gonnawork fine",
    reply_rating: 12500,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "GreyIsLife",
    reply_post: 7,
    reply_content: "Look for a similar repo!",
    reply_rating: 9001,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Rawgher",
    reply_post: 7,
    reply_content: "No, you shouldn't do that.  Try some google-fu",
    reply_rating: 1500123,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "Hunter4Lyfe",
    reply_post: 7,
    reply_content:
      "Yeah, that wouldn't be ethical.  Ron always says ethical hacking only.",
    reply_rating: 100,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  },
  {
    reply_author: "MyLaifu4Waifu",
    reply_post: 7,
    reply_content:
      "And remember, if any part of your code is optional, don't do it",
    reply_rating: 9000001,
    reply_update: date,
    createdAt: date,
    updatedAt: date
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  // .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  // })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Topic.remove({})
  .then(() => db.Topic.collection.insertMany(topicsSeed))
  // .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  // })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postsSeed))
  // .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  // })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Reply.remove({})
  .then(() => db.Reply.collection.insertMany(repliesSeed))
  //   .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  //   })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
