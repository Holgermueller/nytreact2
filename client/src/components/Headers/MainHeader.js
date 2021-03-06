import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

const headerCard = {
  width: "fit-content",
  margin: "0 auto 4px auto",
  padding: "4px",
};

const header = {
  textAlign: "center",
  fontStyle: "bold",
  color: "#080808"
};

const subHeader = {
  textAlign: "center",
};

export default class MainHeader extends Component {
  render() {
    return (
      <div>
        <Card style={headerCard}>
          <Typography variant="h1" style={header}>
            NY Times MERN
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h5" style={subHeader}>
            Search NY Times articles to your heart's content!
          </Typography>
        </Card>
      </div>
    );
  }
}
