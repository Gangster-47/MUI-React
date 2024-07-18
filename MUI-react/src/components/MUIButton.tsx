import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SendIcon from "@mui/icons-material/Send";

function MUIButton() {
  return (
    <>
      <Stack spacing={5}>
        <Button variant="outlined">Let's Learn Button Today</Button>{" "}
        {/* Just Decorating my Button Tutorial */}
      </Stack>

      <br />

      {/* Learning Buttons and Stacks */}
      <Stack spacing={5}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        {/* Learning Palettes in Buttons */}

        <Stack spacing={3} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>

        <Stack spacing={3} direction="row">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </Stack>

        <Stack spacing={3} direction="row">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium" color="secondary">
            Medium
          </Button>
          <Button variant="contained" size="large" color="error">
            Large
          </Button>
        </Stack>

        {/* Learning Icons in MUI */}

        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            color="error"
            startIcon={<ErrorOutlineIcon />}
          >
            Error
          </Button>
        </Stack>

{/* Learning IconButton in MUI -----for only icons in button */}

        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <IconButton color="success">
            <SendIcon />
          </IconButton>
        </Stack>

        {/* Learning Button Group in MUI */}
        <Stack direction="row">
          <ButtonGroup variant="contained" color="secondary">
            <Button onClick={() => alert("Left")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ButtonGroup variant="outlined" color="secondary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ButtonGroup variant="text" color="secondary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            color="secondary"
            size="small"
            orientation="vertical"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            color="warning"
            size="large"
            orientation="vertical"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left")}>Left</Button>
            <Button onClick={() => alert("Center")}>Center</Button>
            <Button onClick={() => alert("Right")}>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
}

export default MUIButton;
