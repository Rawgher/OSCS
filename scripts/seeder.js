const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/OSCSmongotest"
);

const userSeed = [
    {
        "user_name": "Hunter4Lyfe",
        "user_firstName": "Enea",
        "user_lastName": "Destiny",
        "user_pass": "Destiny2",
        "user_level": 0,
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "user_name": "Rawgher",
        "user_firstName": "Roger",
        "user_lastName": "Penderheisenburgerer",
        "user_pass": "CurseUFlapjack",
        "user_level": 1,
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "user_name": "MyLaifu4Waifu",
        "user_firstName": "Collin",
        "user_lastName": "Fumanchu",
        "user_pass": "SenpaiPlz",
        "user_level": 0,
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "user_name": "GreyIsLife",
        "user_firstName": "Elaine",
        "user_lastName": "Queen",
        "user_pass": "lessthan3",
        "user_level": 1,
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "user_name": "JS94",
        "user_firstName": "Jordan",
        "user_lastName": "Schrodinger",
        "user_pass": "1a2b3",
        "user_level": 0,
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    }
]

const topicsSeed = [
    {
        "topic_name": "HTML",
        "topic_description": "All things DOM related",
        "topic_number": 1,
        "topic_author": "Hunter4Lyfe",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "topic_name": "CSS",
        "topic_description": "Got style?",
        "topic_number": 2,
        "topic_author": "Rawgher",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "topic_name": "Javascript",
        "topic_description": "Front end moving parts",
        "topic_number": 3,
        "topic_author": "Rawgher",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "topic_name": "API AJAX",
        "topic_description": "Dealing with api and JSON",
        "topic_number": 4,
        "topic_author": "Hunter4Lyfe",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "topic_name": "mySQL",
        "topic_description": "SQL tables",
        "topic_number": 5,
        "topic_author": "MyLaifu4Waifu",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    }
]

const postsSeed = [
    {
        "post_author": "Hunter4Lyfe",
        "post_subject": "Make look nice",
        "post_body": "What CSS framework should I use to make my page look the best?",
        "post_rating": 69,
        "post_topic": "CSS",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "post_author": "MyLaifu4Waifu",
        "post_subject": "I like a challenge",
        "post_body": "How can I make my code more difficult?",
        "post_rating": 9,
        "post_topic": "Javascript",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "post_author": "Rawgher",
        "post_subject": "<a> links",
        "post_body": "How do I use an <a> tag properly?",
        "post_rating": 90,
        "post_topic": "Javascript",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "post_author": "GreyIsLife",
        "post_subject": "APIs",
        "post_body": "How do I get my Spotify API keys?",
        "post_rating": 9001,
        "post_topic": "API AJAX",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "post_author": "Hunter4Lyfe",
        "post_subject": "SQL HELP ME!",
        "post_body": "My seeds are not seeding",
        "post_rating": 500,
        "post_topic": "mySQL",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "post_author": "MyLaifu4Waifu",
        "post_subject": "DATEONLY!",
        "post_body": "Why doesn't datatypes.DATEONLY work???",
        "post_rating": 1000000,
        "post_topic": "mySQL",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    },
    {
        "post_author": "JS94",
        "post_subject": "My code",
        "post_body": "My code isn't working, what should I do?",
        "post_rating": 15,
        "post_topic": "Javascript",
        "createdAt": "=new Date(2018, 10, 28)",
        "updatedAt": "=new Date(2018, 10, 28)"
    }
]

// const repliesSeed = [
//     {

//     }
// ]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Topic
  .remove({})
  .then(() => db.Topic.collection.insertMany(topicsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//   db.Reply
//   .remove({})
//   .then(() => db.Reply.collection.insertMany(repliesSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });