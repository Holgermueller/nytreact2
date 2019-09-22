import React, { Component } from "react";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import SavedHeader from "../../components/Headers/SavedHeader";
import HomeLink from "../../components/Links/HomeLink";
import Typography from "@material-ui/core/Typography";
import DeleteDialog from "../../components/DeleteDialog";
import Moment from "react-moment";

const savedArticleCard = {
  margin: "4px auto 4px auto",
  width: "55%",
  minHeight: "150px",
  textAlign: "center"
};

const snippetStyles = {
  padding: "5px"
};

const linkStyles = {
  textDecortaion: "none"
};

const linkButtonStyles = {
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
      savedArticles: [],
      // shadow: 1
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

  // onMouseOver = () => this.setState({ shadow: 12 });
  // onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    return (
      <div>
        <HomeLink />
        <SavedHeader />
        <br />
        {this.state.savedArticles.length ? (
          <Grid>
            {this.state.savedArticles.map((oneSavedArticle, i) => (
              <Card
                style={savedArticleCard}
                key={i}
                // onMouseOver={this.onMouseOver}
                // onMouseOut={this.onMouseOut}
                // z-index={this.state.shadow}
              >
                <Typography variant="h5">{oneSavedArticle.headline}</Typography>
                <br />
                <Typography varient="h6">
                  Originally published:
                  <Moment
                    format="dddd, MMMM Do, YYYY"
                    date={oneSavedArticle.pub_date}
                  />
                </Typography>
                <Divider variant="middle" />
                <Typography style={snippetStyles}>
                  {oneSavedArticle.snippet}
                </Typography>
                <a href={oneSavedArticle.web_url} style={linkStyles}>
                  <button style={linkButtonStyles}>READ IT</button>
                </a>

                <DeleteDialog
                  id={oneSavedArticle._id}
                  headline={oneSavedArticle.headline}
                />
              </Card>
            ))}
          </Grid>
        ) : (
          <Card style={defaultCard}>
            <Typography variant="h5" style={defaultCardText}>
              No Articles To Display!
            </Typography>
          </Card>
        )}
      </div>
    );
  }
}
