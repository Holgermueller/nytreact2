import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const linkStyles = {
  textDecoration: "none",
}

const linkCard = {
  margin: "2px auto 0 auto",
  width: "fit-content",
}

const linkName = {
  padding: "2px"
}

export default class HomeLink extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={linkStyles}>
          <Card style={linkCard}>
            <Typography style={linkName}>BACK</Typography>
          </Card>
        </Link>
      </div>
    );
  }
}
