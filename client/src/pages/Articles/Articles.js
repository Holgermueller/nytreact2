import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Article.css";

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

  loadArticles = e => {
    e.preventDefault();
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

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.saveArticle({
        topic: this.state.topic
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  saveArticle = e => {
    e.preventDefault();
    this.state.articles.forEach(article => {
      if (article._id === e.target.id) {
        console.log(article._id);
        console.log(e.target.id);
        API.saveArticle({
          headline: article.headline.main,
          web_url: article.web_url,
          snippet: article.snippet,
          pub_date: article.pub_date
        })
          .then(res => {
            console.log(res);
            this.state.savedArticles.push(res.articleData);
            this.loadSavedArticles();
          })
          .catch(err => console.log(err));
      }
    });
  };

  loadSavedArticles = () => {
    API.getArticleSaved()
      .then(res => {
        this.setState({ savedArticles: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>NY Times MERN</h1>
              <h3>Search NY Times articles to your heart's content!</h3>
            </Jumbotron>
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
                onClick={e => this.loadArticles(e)}
                className="btn search"
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Here are your articles!</h1>
            </Jumbotron>
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
                    {/* <DeleteBtn onClick={this.deleteArticle}>
                      DELETE //Move to list of saved articles!!
                    </DeleteBtn> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="place-holder">No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
