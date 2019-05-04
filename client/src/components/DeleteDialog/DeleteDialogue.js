import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import API from "../../utils/API";

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
    console.log(id);
    API.deleteArticle(this)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    // this.props.history.push("/saved");
  };

  render() {
    return (
      <div>
        <Button
          color="secondary"
          variant="outlined"
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
          <DialogTitle>
            {"Delete this article?"}
          </DialogTitle>
          <Divider variant="middle" />
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              NO
            </Button>
            <Button
              onClick={() => this.handleDelete(this.props)}
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
