import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import DeleteButton from "../DeleteBtn";

const ArticleFromDatabse = props => (
  <Card>
    <p>{props.articleFromDatabase.headline}</p>
  </Card>
);

const headerContainer = {
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#000000",
}

const headerStyles = {
  textAlign: "center",
  padding: "5px 10px",
  color: "#FFFAFA",
}

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
        <Card style={headerContainer}>
          <Typography variant="h4" style={headerStyles}>
          Your Saved Articles:
          </Typography>
        </Card>
        <br />
        <div>
          <Grid>
{this.loadSavedArticles()}
          </Grid>
        </div>
      </div>
    );
  }
}
