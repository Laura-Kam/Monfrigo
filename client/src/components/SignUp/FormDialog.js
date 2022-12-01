import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ formProps }) {

    console.log(formProps);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                {formProps.type}
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>{formProps.type}</DialogTitle>
                <DialogContent sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <DialogContentText>
                        {formProps.info}
                    </DialogContentText>
                    <TextField
                        sx={{
                            width: "70%",
                            margin: "1rem 0 0 0",
                        }}
                        id="outlined-name"
                        label="Name"
                    />
                    <TextField
                        sx={{
                            width: "70%",
                            margin: "1rem 0 0 0",
                        }}
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined" />
                    <TextField
                        sx={{
                            width: "70%",
                            margin: "1rem 0 0 0",
                        }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>{formProps.type}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}