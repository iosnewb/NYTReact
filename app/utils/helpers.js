var axios = require('axios'); //utilize the axios library to perform Get/Post requests

//export the object with methods for retreiving and posting data to our API
module.exports = {
    //returns a promise object we can .then() off inside our parent component
    getArticles: function() {
        return axios.get('/api');
    },
    //returns a promise object we can .then() off inside our parent component
    //this method also takes in an argument for what to post to the database
    saveArticles: function(savedArticle) {
        return axios.post('/api', savedArticle);
    }
};