import React, { Component } from "react";
import API from "../../utils/API";

const ArticleFromDatabse = props => (
  <li>
    <p>{props.articleFromDatabase.headline}</p>
  </li>
);

export default class SavedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedArticles: []
    };
  }

  loadSavedArticles = () => {
    return this.state.savedArticles.map(function(oneSavedArticle, i) {
      return (
        <ArticleFromDatabse articleFromDatabase={oneSavedArticle} key={i} />
      );
    });
  };

  componentDidMount() {
    API.getAllSavedArticles()
      .then(res => {
        this.setState({ savedArticles: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ul>{this.loadSavedArticles()}</ul>
      </div>
    );
  }
}
