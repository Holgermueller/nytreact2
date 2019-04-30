import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
//import DeleteDialogue from "../../components/DeleteDialog";
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

const defaultCard = {
  backgroundColor: "blue",
  width: "fit-content",
  margin: "5px auto",
  padding: "5px auto"
};

const defaultCardText = {
  color: "ghostwhite",
  padding: "5px",
  textAlign: "center"
};

export default class SavedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedArticles: []
    };
  }

  componentDidMount = () => {
    this.loadArticlesFromDatabase();
  };

  loadArticlesFromDatabase = () => {
    API.getAllSavedArticles()
      .then(res => {
        this.setState({ savedArticles: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = id => {
    console.log(id);
    console.log(this.props.match.params);

    // API.deleteArticle(this.props.match.params.id)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));

    // this.props.history.push("/saved");
  };

  render() {
    return (
      <div>
        <SavedHeader />
        <br />
        {this.state.savedArticles.length ? (
          <Grid>
            {this.state.savedArticles.map((oneSavedArticle, i) => (
              <Card
                style={savedArticleCard}
                key={i}
              >
                <Typography variant="h5">{oneSavedArticle.headline}</Typography>
                <Divider variant="middle" />
                <Typography>{oneSavedArticle.snippet}</Typography>
                <a href={oneSavedArticle.web_url} style={linkStyles}>
                  <Button style={buttonStyles}>READ IT</Button>
                </a>

                <button onClick={this.handleDelete}>Delete</button>
                {/* <DeleteDialogue id={props.articleFromDatabase.id} {...this.props} /> */}
              </Card>
            ))}
          </Grid>
        ) : (
          <Card style={defaultCard}>
            <Typography variant="h5" style={defaultCardText}>
              No Articles To Display!
            </Typography>{" "}
          </Card>
        )}
        <HomeLink />
      </div>
    );
  }
}
