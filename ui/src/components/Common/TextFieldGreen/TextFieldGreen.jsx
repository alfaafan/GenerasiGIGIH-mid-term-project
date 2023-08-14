import { TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/styles";

export const TextFieldGreen = styled(TextField)({
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
