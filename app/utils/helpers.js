var axios = require('axios'); //utilize the axios library to perform Get/Post requests

var APIKey = ''; //NYT api key


//export the object with methods for retreiving and posting data to our API
module.exports = {
    //returns a promise object we can .then() off inside our parent component
    getArticles: function() {
        return axios.get('/api');
    },
    //returns a promise object we can .then() off inside our parent component
    //this method also takes in an argument for what to post to the database
    saveArticles: function(addArticle) {
        return axios.post('/api', addArticle);
    },
    //returns a promise object we can .then() off inside our parent component
    //this method also takes in an argument for what to delete in the database
    deleteArticles: function(removeArticle) {
        return axios.delete('/api', removeArticle);
    },
    queryNYT: function(query) {
        var name = query.name;
        var start = query.start;
        var end = query.end;

        console.log(`Term : ${name}, Start: ${start}, End: ${end}`);

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': APIKey,
                'q': name,
                'begin_date': start,
                'end_date': end
            }
        }).then(function(results) {
            var queryResults = results.data.response;
            console.log('Results: ', queryResults);
            return queryResults;
        });
    }
};