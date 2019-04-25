import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import DeleteDialogue from "../../components/DeleteDialog";
import SavedHeader from "../../components/PageHeaders/SavedHeader";
import { Link } from "react-router-dom";

const ArticleFromDatabse = props => (
  <Card>
    <p>{props.articleFromDatabase.headline}</p>
    <DeleteDialogue {...this.props} />
  </Card>
);

const linkStyles = {
  textDecoration: "none"
};

const linkCard = {
  width: "fit-content",
  padding: "4px"
};

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
        <Link to="/" style={linkStyles}>
          <Card style={linkCard}>BACK</Card>
        </Link>
        <SavedHeader />
        <br />
        <div>
          <Grid>{this.loadSavedArticles()}</Grid>
        </div>
      </div>
    );
  }
}
