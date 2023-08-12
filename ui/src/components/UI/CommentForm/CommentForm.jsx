import { Button, FormControl, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/styles";
import React from "react";

function CommentForm() {
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

  return (
    <Stack component="form" direction={"row"} spacing={1}>
      <FormControl>
        <CommentField label="Comment" id="comment" />
      </FormControl>
      <Button variant="contained" color="success">
        Send
      </Button>
    </Stack>
  );
}

export default CommentForm;
