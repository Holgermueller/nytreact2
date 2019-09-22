import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import "./Article.css";
import SearchHeader from "../../components/Headers/SearchHeader";
import SavedLink from "../../components/Links/SavedLink";
import ResultsHeader from "../../components/Headers/ResultsHeader";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";

const resultsCard = {
  margin: "4px auto 4px auto",
  width: "55%",
  minHeight: "150px",
  textAlign: "center",
  padding: "8px"
};

const snippetStyles = {
  padding: "5px"
};

const dateStyles = {
  padding: "5px"
};

const buttonDiv = {
  padding: "4px"
};

const linkStyles = {
  textDecoration: "none",
  color: "ghostwhite"
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

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      topic: "",
      startYear: "",
      endYear: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  loadArticleSearch = () => {
    API.nytSearch(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res =>
        this.setState({
          articles: res.data.response.docs,
          topic: "",
          startYear: "",
          endYear: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ articles: [] });
    this.loadArticleSearch();
  };

  saveArticle = e => {
    e.preventDefault();
    this.state.articles.forEach(article => {
      if (article._id === e.target.id) {
        API.saveArticle({
          headline: article.headline.main,
          web_url: article.web_url,
          snippet: article.snippet,
          pub_date: article.pub_date
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));
        this.props.history.push("/saved");
      }
    });
  };

  render() {
    return (
      <div>
        <SavedLink />
        <SearchHeader />
        <form>
          <Input
            value={this.state.topic}
            onChange={this.handleInputChange}
            name="topic"
            placeholder="Topic (required)"
          />
          <Input
            value={this.state.startYear}
            onChange={this.handleInputChange}
            name="startYear"
            placeholder="Start Year (optional)"
          />
          <Input
            value={this.state.endYear}
            onChange={this.handleInputChange}
            name="endYear"
            placeholder="End Year (optional)"
          />
          <FormBtn
            disabled={!this.state.topic}
            onClick={this.handleFormSubmit}
            className="btn search"
          >
            Search
          </FormBtn>
        </form>

        <ResultsHeader />

        {this.state.articles.length ? (
          <Grid>
            {this.state.articles.map(article => (
              <Card key={article._id} id={article._id} style={resultsCard}>
                <Typography variant="h5">{article.headline.main}</Typography>
                <Divider variant="middle" />
                <div style={snippetStyles}>{article.snippet}</div>
                <div style={dateStyles}>
                  <p>Published:</p>
                  <Moment format="dddd, MMMM Do, YYYY" date={article.pub_date} />
                </div>
                <div style={buttonDiv}>
                  <button>
                    <a
                      href={article.web_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkStyles}
                    >
                      READ IT HERE
                    </a>
                  </button>
                  <button
                    id={article._id}
                    className="save-button"
                    onClick={this.saveArticle}
                  >
                    SAVE
                  </button>
                </div>
              </Card>
            ))}
          </Grid>
        ) : (
          <Card style={defaultCard}>
            <Typography variant="h5" style={defaultCardText}>
              No Results to Display
            </Typography>
          </Card>
        )}
      </div>
    );
  }
}
