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
            <Saved articles={articles.title} />
        ));
    }

    searchArticles() {
        helpers.queryNYT(name, start, end).then(function(data) {
            this.setState({})
        })
    }

    render() {
        return (
            <div className="container"> 
                <div className="row">
                    <div className="page-header">
                        <h1>New York Times <small>article scrubber</small></h1>
                    </div> 
                </div>
                
                <div className="row" style={styles.gap}>
                    <form className="form-inline">
                        <div className="form-group">
                            <label style={styles.label}>Article Name </label>
                            <input type="text" className="form-control" id="articleinput" placeholder="article name..."/>
                        </div>
                        <div className="form-group">
                            <label style={styles.label}>Start Year </label>
                            <input type="email" className="form-control" id="startyearinput" placeholder="start year..."/>
                        </div>
                        <div className="form-group">
                            <label style={styles.label}>End Year </label>
                            <input type="email" className="form-control" id="endyearinput" placeholder="end year..."/>
                        </div>
                        <button style={styles.searchButton} type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
                <div className="row" style={styles.gap}>
                    {/* {this.searchArticles()} */}
                </div>

                <div className="row" style={styles.gap}>
                    <ul className="list-group">
                        {this.renderArticles()}
                    </ul>
                </div>     
            </div>
        )
    }
}

const styles = {
    label: {
        marginRight: 10,
        marginLeft: 10
    },
    searchButton: {
        marginLeft: 10,
        marginRight: 10
    },
    gap: {
        marginTop: 15,
        marginBottom: 15
    }
}

export default MainComponent;