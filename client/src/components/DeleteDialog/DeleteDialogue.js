import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import API from "../../utils/API";

const deleteButton = {};

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
    console.log(this.props)
    // API.deleteArticle(this.props.match.params.id)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));

    // this.props.history.push("/articles");
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
          <DialogTitle>{"Delete article...?"}</DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to delete this article?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              NO
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              YES
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
