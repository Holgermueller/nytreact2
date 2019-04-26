import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Article.css";
import SearchHeader from "../../components/Headers/SearchHeader";
import SavedLink from "../../components/Links/SavedLink";
import ResultsHeader from "../../components/Headers/ResultsHeader";

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
        this.props.history.push("/articles");
      }
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <SearchHeader />
          <Col size="md-6">
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
          </Col>
          <Col size="md-6 sm-12">
            <ResultsHeader />
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id} id={article._id}>
                    <div className="col-md-12 headline">
                      {article.headline.main}
                    </div>
                    <div>{article.snippet}</div>
                    <div>{article.pub_date}</div>
                    <button>
                      <a href={article.web_url} target="_blank">
                        Read it here =>
                      </a>
                    </button>
                    <button
                      id={article._id}
                      className="save-button"
                      onClick={this.saveArticle}
                    >
                      SAVE
                    </button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="place-holder">No Results to Display</h3>
            )}
          </Col>
        </Row>
        <SavedLink />
      </Container>
    );
  }
}
