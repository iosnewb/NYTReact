//include react
import React, { Component } from 'react';

//include child components here
import Saved from './children/Saved';

//requiring our helper for making API calls
import helpers from '../utils/helpers'

//main component
class MainComponent extends Component {
    constructor() {
        super();

        //get initial state
        this.state = {
            articles: []
        }
        //binding getArticles to our component since we'll be passing this
        //method to child components
        this.getArticles = this.getArticles.bind(this);
    }
    
    //getting all the articles when the component mounts
    componentDidMount() {
        console.log('Component mounted');
        this.getArticles();
        
    }

    getArticles() {
        helpers.getArticles().then((response) => {
            this.setState({ articles: response.data});
        });
    }

    componentDidUpdate() {
        console.log('Component updated');
        // var modifiedArticle = this.state.articles;
    }

    renderArticles() {
        return this.state.articles.map(articles => (
            <Saved
                key={articles._id}>
                {articles.title}
            </Saved>
        ));
    }

    render() {
        return (
            <div className="container"> 
                <div className="row">
                    <div className="page-header">
                        <h1>New York Times <small>article scrubber</small></h1>
                    </div>  
                    <form class="form-inline">
                        <div class="form-group">
                            <label for="exampleInputName2">Name</label>
                            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail2">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
                        </div>
                        <button type="submit" class="btn btn-default">Send invitation</button>
                    </form>
                    
                </div>
                {/* {this.renderArticles()} */}
            </div>
        )
    }
}

export default MainComponent;