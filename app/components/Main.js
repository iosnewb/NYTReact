//include react
import React, { Component } from 'react';

//include child components here
//import child from './children/componentName';

//requiring our helper for making API calls
import helpers from '../utils/helpers'

//main component
class MainComponent extends Component {
    constructor(props) {
        super(props);

        //get initial state
        this.state = [{
            title: "",
            date: "",
            url: ""
        }];
    }
    
    componentDidMount() {
        console.log('Component mounted');

        //the moment the page renders, we'll retreive all articles from db
        helpers.getArticles()
        .then(function(response) {
            this.setState({
                title: response.title,
                date: response.date,
                url: response.url
            });
            console.log(response);
        });
    }

    render() {
        return (
            <div> 
                <h1>Page has been rendered</h1>
            </div>
        )
    }
}

export default MainComponent;