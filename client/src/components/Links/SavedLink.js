import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const linkStyles = {
  textDecoration: "none",
}

const linkCard = {
  width: "fit-content",
  margin: "0 auto",
}

const linkName = {
  padding: "4px",
}

export default class SavedLink extends Component {
  render() {
    return (
      <div>
        <Link to="/saved" style={linkStyles}>
          <Card style={linkCard}>
            <Typography style={linkName}>Check Out Your Saved Articles</Typography>
          </Card>
        </Link>
      </div>
    );
  }
}
