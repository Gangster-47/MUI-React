import { Snackbar, Button, Alert } from "@mui/material";
import { useState } from "react";

function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form Submitted Successfully!"
        autoHideDuration={5000}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
      <Button onClick={() => setOpen2(true)} variant="contained">
        Click Me
      </Button>
      <Snackbar
        message="Form Submitted Successfully!"
        autoHideDuration={5000}
        open={open2}
        onClose={() => setOpen2(false)}
      >
        <Alert
          onClose={() => setOpen2(false)}
          severity="success"
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </>
  );
}

export default MuiSnackbar;
