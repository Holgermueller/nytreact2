import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const cardStyles = {
  width: "fit-content",
  margin: "5px auto",
  backgroundColor: "#d3d3d3",
};

const textStyles = {
  textAlign: "center",
  padding: "2px"
};

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyles} z={0}>
          <Typography style={textStyles}>&copy; 2019 Holger Mueller</Typography>
        </Card>
      </div>
    );
  }
}
