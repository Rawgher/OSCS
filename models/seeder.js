var seeder = require('mongoose-seeder'),
    data = require('./seeds.json');
 
seeder.seed(data).then(function(dbData) {
    // The database objects are stored in dbData
}).catch(function(err) {
    // handle error
}); 