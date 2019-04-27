import React from "react";
import Card from "@material-ui/core/Card";
import HomeLink from "../../components/Links/HomeLink";

const noMatchCard = {
  backgroundColor: "blue",
  width: "fit-content",
  margin: "8px auto"
};

const noMatchText = {
  textAlign: "center",
  padding: "3px"
};

const NoMatch = () => (
  <div>
    <Card style={noMatchCard}>
      <h1 style={noMatchText}>404 Page Not Found</h1>
      <h1 style={noMatchText}>
        <span role="img" aria-label="Sad Face">
          :(
        </span>
      </h1>
    </Card>

    <HomeLink />
  </div>
);

export default NoMatch;
