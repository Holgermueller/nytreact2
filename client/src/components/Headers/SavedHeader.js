import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const cardStyles = {
  width: "fit-content",
  margin: "2px auto"
};

const sectionName = {
  textAlign: "center",
  padding: "6px",
  marginTop: "8px"
};

export default class SavedHeader extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <Typography variant="h4" style={sectionName}>
            Your Saved Articles:
          </Typography>
        </Card>
      </div>
    );
  }
}
