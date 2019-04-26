import React, { Compontent } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const cardStyles = {
  margin: "2px auto"
};

const headerText = {
  textAlign: "center",
  padding: "6px"
};

export default class ResultsHeader extends Compontent {
  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <Typography class={headerText}>Here are your articles!</Typography>
        </Card>
      </div>
    );
  }
}
