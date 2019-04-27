import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import DeleteDialogue from "../../components/DeleteDialog";
import SavedHeader from "../../components/Headers/SavedHeader";
import HomeLink from "../../components/Links/HomeLink";

const savedArticleCard = {
  margin: "2px auto 2px auto",
  width: "55%",
  minHeight: "250px",
  textAlign: "center"
};

const ArticleFromDatabse = props => (
  <Card
    style={savedArticleCard}
    key={props.articleFromDatabase.id}
    _id={props.articleFromDatabase.id}
  >
    <p>{props.articleFromDatabase.headline}</p>
    <p>{props.articleFromDatabase.snippet}</p>
    <p>{props.articleFromDatabase.web_url}</p>
    <DeleteDialogue {...this.props} />
  </Card>
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
        <SavedHeader />
        <br />
        <div>
          <Grid>{this.loadSavedArticles()}</Grid>
        </div>
        <HomeLink />
      </div>
    );
  }
}
