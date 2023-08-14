import { Alert, Button, FormControl, Snackbar, Stack } from "@mui/material";
import React, { useState } from "react";
import { TextFieldGreen } from "../../Common/TextFieldGreen/TextFieldGreen";

function CommentForm({ username, setUsername, comment, setComment, handleSubmit }) {
  const [open, setOpen] = useState(false);

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
    <Stack component="form" spacing={1} onSubmit={handleSubmit}>
      <FormControl>
        <TextFieldGreen label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
        <FormControl>
          <TextFieldGreen label="Comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        </FormControl>
        <Button variant="contained" color="success" type="submit" onClick={notify}>
          Send
        </Button>
      </Stack>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Comment sent
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default CommentForm;
