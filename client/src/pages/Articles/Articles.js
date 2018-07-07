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

	componentDidMount() {
		this.loadArticles();
	}

	loadArticles = () => {
		API.getArticles()
			.then(res =>
				this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" }))
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
		if (this.state.topic && this.state.startYear && this.state.endYear) {
			API.saveArticle({
				topic: this.state.topic,
				startYear: this.state.startYear,
				endYear: this.state.endYear
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
								disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
								onClick={this.handleFormSubmit}
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
									<ListItem key={article._id}>
										<Link to={"/articles/" + article._id}>
											<strong>
												{article.title} by {article.date}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteArticle(article._id)} />
									</ListItem>
								))}
							</List>
						) : (
								<h3>No Results to Display</h3>
							)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Articles;