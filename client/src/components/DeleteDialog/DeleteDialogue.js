import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import API from "../../utils/API";

const openDeleteModal = {
  padding: "4px"
};

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
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Button
          style={openDeleteModal}
          color="secondary"
          variant="text"
          onClick={this.handleClickOpen}
        >
          DELETE
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Delete this article?"}</DialogTitle>
          <Divider variant="middle" />
          <DialogContent>
            <DialogContentText>{this.props.headline}</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              NO
            </Button>
            <Button
              onClick={() => this.handleDelete(this.props.id)}
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
