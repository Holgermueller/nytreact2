import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import DeleteDialogue from "../../components/DeleteDialog";
import SavedHeader from "../../components/Headers/SavedHeader";
import HomeLink from "../../components/Links/HomeLink";

const savedArticleCard = {
  margin: "1px auto 1px auto"
};

const ArticleFromDatabse = props => (
  <Card style={savedArticleCard}>
    <p>{props.articleFromDatabase.headline}</p>
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
