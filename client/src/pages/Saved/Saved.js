import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DeleteDialogue from "../../components/DeleteDialog";
import SavedHeader from "../../components/Headers/SavedHeader";
import HomeLink from "../../components/Links/HomeLink";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const savedArticleCard = {
  margin: "4px auto 4px auto",
  width: "55%",
  minHeight: "150px",
  textAlign: "center"
};

const linkStyles = {
  textDecortaion: "none"
};

const buttonStyles = {
  backgroundColor: "blue",
  color: "ghostwhite",
  margin: "4px"
};

const ArticleFromDatabse = props => (
  <Card
    style={savedArticleCard}
    key={props.articleFromDatabase.id}
    _id={props.articleFromDatabase.id}
  >
    <Typography variant="h5">{props.articleFromDatabase.headline}</Typography>
    <Divider variant="middle" />
    <Typography>{props.articleFromDatabase.snippet}</Typography>
    <a href={props.articleFromDatabase.web_url} style={linkStyles}>
      <Button style={buttonStyles}>READ IT</Button>
    </a>
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
