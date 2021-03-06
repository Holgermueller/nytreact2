import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const linkStyles = {
  textDecoration: "none",
  cursor: "pointer"
}

const linkCard = {
  margin: "8px auto",
  width: "fit-content",
  backgroundColor: "blue"
}

const linkName = {
  padding: "4px",
  color: "ghostwhite"
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
