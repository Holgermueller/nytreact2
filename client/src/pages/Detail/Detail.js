import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
    state = {
        article: {}
    };

    componentDidMount() {
        API.getArticle(this.props.match.params.id)
            .then(res => this.setState({ article: res.data}))
            .catch(err=> console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.article.headline}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            {this.state.article.pub_date}
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                            <h3>Read it here: </h3>
                        <Link to="/">
                            Back to Articles
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    } 
}

export default Detail;