import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import Form from "../../modules/ToDoList/components/Form/Form";

const CustomModalWindow = (props) => {
  const { headerTitle, children, open, handleClose, handleAction, buttonText } =
    props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{headerTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={handleClose}>
          Отменить
        </Button>
        <Button color="success" variant="contained" onClick={handleAction}>
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModalWindow;
