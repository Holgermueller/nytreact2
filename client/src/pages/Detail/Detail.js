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

    
}

export default Detail;