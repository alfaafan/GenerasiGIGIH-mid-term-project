import { Alert, Button, FormControl, Snackbar, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/styles";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function CommentForm() {
  const [open, setOpen] = useState(false);
  const CommentField = styled(TextField)({
    "& label.MuiInputLabel-root": {
      color: green[600],
    },
    "& label.Mui-focused": {
      color: green[600],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: green[600],
      },
      "&:hover fieldset": {
        borderColor: green[600],
      },
      "&.Mui-focused fieldset": {
        borderColor: green[600],
      },
      color: green[50],
    },
  });

  const notify = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(!open);
  };

  return (
    <Stack component="form" direction={"row"} spacing={1}>
      <FormControl>
        <CommentField label="Comment" id="comment" />
      </FormControl>
      <Button variant="contained" color="success" onClick={notify}>
        Send
      </Button>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Comment sent
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default CommentForm;
