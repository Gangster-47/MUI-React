import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert severity="warning" onClose={() => alert("alert closed")}>
        This is a warning alert
      </Alert>
      <Alert severity="info" action={<Button>UNDO</Button>}>
        This is an info alert
      </Alert>
      <Alert severity="success" icon={<AddReactionIcon />}>
        This is a success alert
      </Alert>

      {/* <Alert variant="outlined" severity="error">This is an error alert</Alert>
      <Alert variant="outlined"  severity="warning">This is a warning alert</Alert>
      <Alert variant="outlined"  severity="info">This is an info alert</Alert>
      <Alert variant="outlined"  severity="success">This is a success alert</Alert>

      <Alert variant="filled" severity="error">This is an error alert</Alert>
      <Alert variant="filled" severity="warning">This is a warning alert</Alert>
      <Alert variant="filled" severity="info">This is an info alert</Alert>
      <Alert variant="filled" severity="success">This is a success alert</Alert> */}
    </Stack>
  );
}

export default MuiAlert;
