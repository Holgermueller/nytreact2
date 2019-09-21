import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const cardStyles = {
  margin: "4px auto",
  width: "fit-content"
};

const headerText = {
  textAlign: "center",
  padding: "6px",
  color: "#080808"
};

export default class ResultsHeader extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <Typography style={headerText} variant="h3">
            Here are your articles!
          </Typography>
        </Card>
      </div>
    );
  }
}
