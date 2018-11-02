INSERT INTO users (user_name, user_firstName, user_lastName, user_pass, user_level, createdAt, updatedAt)
VALUES ('Hunter4Lyfe', 'Enea', 'Destiny', 'Destiny2', 0, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
 ('Rawgher', 'Roger', 'Penderheimer', 'CurseUFlapjack', 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
 ('MyLaifu4Waifu', 'Collin', 'Fumanchew', 'SenpaiPlz', 0, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
 ('GreyIsLife','Elaine', 'Queen', 'lessthan3', 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
 ('JS94', 'Jordan', 'Schrodinger', '1a2b3', 0, '2018/09/20 00:00:00', '2018/09/20 00:00:00');

INSERT INTO Topics (topic_name, topic_description, topic_number, UserId, createdAt, updatedAt)
VALUES ('HTML', 'All things DOM related', 1, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('CSS', 'Got style?', 2, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('Javascript', 'Front end moving parts', 2, 3, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('API AJAX', 'Dealing with api and JSON', 1, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('mySQL', 'Sequel tables', 2, 5, '2018/09/20 00:00:00', '2018/09/20 00:00:00');

INSERT INTO Posts (post_subject, post_body, post_number, post_rating, TopicId, UserId, createdAt, updatedAt)
VALUES ('Make look nice', 'What CSS framework should I use to make my page look the best?', 3, 69, 2, 3, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('I like a challenge', 'How can I make my code more difficult?', 6, 9, 3, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('A links', 'How do I use an <a> tag properly?', 1, 90, 1, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('APIs', 'How do I get my Spotify API keys?', 3, 9001, 4, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('sql HELP ME!', 'My seeds are not seeding', 3, 500, 5, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('DATEONLY!', "Why doesn't datatypes.DATEONLY work?????", 1, 1000000, 5, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('My code', "My code isn't working, what should I do?", 4, 15, 3, 5, '2018/09/20 00:00:00', '2018/09/20 00:00:00');

INSERT INTO Replies (reply_content, reply_rating, PostId, UserId, createdAt, updatedAt)
VALUES ('delete system32', 7500, 2, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('You need an href set to your desired location, and you can add a target if you want.', 8000, 3, 5, '2018/09/20 00:00:00', '2018/09/20 00:00:00'), 
('cry in a corner, then give it to me', 1500, 4, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('I am a fan of materializecss', 1500, 1, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('I usually stick to tachyons.io', 15004, 1, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('Why not just use plain old, boring bootstrap?', 15030, 1, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('Have you tried typing rm -r in your command line?', 15010, 2, 5, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
("This is Enea, isn't it?", 1500, 2, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
("Don't install any of your npms and watch the rage flow.", 500, 2, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('I agree with User 2', 10, 2, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('I like where you all went with this...', 150, 2, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('You can find a link to sign up if you google search it', 15, 4, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('Then you have to wait like a week for your keys', 500, 4, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('I hope your homeworks not due soon...', 15010, 4, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('Are all of the needed columns being seeded in the row?', 150, 5, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('If your database changed, make sure to drop your schema and rerun it', 10, 5, 5, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('I kept running into this issue too, I just had to rerun the schmea', 15003, 5, 3, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('Cause mySQL decided not to change their documentation and make us think things are gonna work fine', 12500, 6, 3, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
('Look for a similar repo!', 13500, 7, 4, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
("No, you shouldn't do that. Try some google-fu", 1500123, 7, 2, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
("Yeah, that wouldn't be ethical. Ron always says ethical hacking only", 100, 7, 1, '2018/09/20 00:00:00', '2018/09/20 00:00:00'),
("And remember, if any part of your code is optional, don't do it.", 15000, 7, 3, '2018/09/20 00:00:00', '2018/09/20 00:00:00');


