import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const cardStyles = {
  margin: "2px auto"
};

const headerText = {
  textAlign: "center",
  padding: "6px"
};

export default class ResultsHeader extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <Typography style={headerText}>Here are your articles!</Typography>
        </Card>
      </div>
    );
  }
}
