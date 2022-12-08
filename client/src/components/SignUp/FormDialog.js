import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function FormDialog({ formProps }) {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({username: "", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmitForm = async () => {
    try {
      if (formProps.type === "Log in") {
        const response = await login({
          variables: {
            email: formState.email,
            password: formState.password,
          },
        });
        const token = response.data.login.token;
        Auth.login(token);
      } else {
        const response = await addUser({
          variables: {
            username: formState.username,
            email: formState.email,
            password: formState.password,
          },
        });
        const token = response.data.addUser.token;
        Auth.login(token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>{formProps.type}</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{formProps.type}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <DialogContentText>{formProps.info}</DialogContentText>

          {formProps.type === "Log in" ? null : (
            <TextField
              sx={{
                width: "70%",
                margin: "1rem 0 0 0",
              }}
              id="outlined-name"
              label="Name"
              name="username"
              onChange={handleFormFieldChange}
            />
          )}

          <TextField
            sx={{
              width: "70%",
              margin: "1rem 0 0 0",
            }}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            onChange={handleFormFieldChange}
          />
          <TextField
            sx={{
              width: "70%",
              margin: "1rem 0 0 0",
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            onChange={handleFormFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmitForm}>{formProps.type}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
