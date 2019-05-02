import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import API from "../../utils/API";

const deleteButton = {
  backgroundColor: "red",
  color: "ghostwhite",
  margin: "4px",
  textAlign: "center"
};

const dialogTitleDisplay = {
  backgroundColor: "red"
};

const dialogText = {
  padding: "5px"
}

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

export default class DeleteAlertDialogue extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = id => {
    API.deleteArticle(id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.props.history.push("/saved");
  };

  render() {
    return (
      <div>
        <Button
          style={deleteButton}
          variant="contained"
          onClick={this.handleClickOpen}
        >
          DELETE?
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle style={dialogTitleDisplay}>
            {"Delete article...?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"
            style={dialogText}>
              Are you sure you want to delete this article?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              NO
            </Button>
            <Button
              onClick={() => this.handleDelete(this.oneSavedArticle._id)}
              color="primary"
            >
              YES
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
