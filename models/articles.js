var mongoose = require('mongoose');  //include mongo dependencies 

var Schema = mongoose.Schema;

//create an article schema to capture the articles
var ArticleSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    }
});

var Articles = mongoose.model("Articles", ArticleSchema); //create the model

module.exports = Articles;

