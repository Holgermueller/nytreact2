import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Article.css";

class Articles extends Component {
	state = {
		articles: [],
		topic: "",
		startYear: "",
		endYear: ""
	};

	loadArticles = (e) => {
		e.preventDefault();
		API.nytSearch(this.state.topic, this.state.startYear, this.state.endYear)
			.then(res =>
				this.setState({ articles: res.data.response.docs, topic: "", startYear: "", endYear: "" })
			).catch(err => console.log(err));
	};

	deleteArticle = id => {
		API.deleteArticle(id)
			.then(res => this.loadArticles())
			.catch(err => console.log(err));
	};

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

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1>NY Times MERN</h1>
							<h3>Search articles to your heart's content!</h3>
						</Jumbotron>
						<form>
							<Input
								value={this.state.topic}
								onChange={this.handleInputChange}
								name="topic"
								placeholder="Topic (required)"
							>
							</Input>
							<Input
								value={this.state.startYear}
								onChange={this.handleInputChange}
								name="startYear"
								placeholder="Start Year (optional)"
							>
							</Input>
							<Input
								value={this.state.endYear}
								onChange={this.handleInputChange}
								name="endYear"
								placeholder="End Year (optional)"
							>
							</Input>
							<FormBtn
								disabled={!(this.state.topic)}
								onClick={(e) => this.loadArticles(e)}
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
								{this.state.articles.map(articles => (
									<ListItem key={articles._id} id={articles._id}>
										<div className="col-md-12 headline">
											{articles.headline.main}
										</div>
										<DeleteBtn onClick={() => this.deleteArticle(articles._id)} />
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

export default Articles;