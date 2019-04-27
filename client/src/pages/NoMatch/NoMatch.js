import React from "react";
import {Col, Row, Container } from "../../components/Grid";

const NoMatch = () => (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <div>
                    <h1>404 Page Not Found</h1>
                    <h1>
                        <span role="img" aria-label="Sad Face">
                            :(
                        </span>
                    </h1>
                </div>
            </Col>
        </Row>
    </Container>
);

export default NoMatch;