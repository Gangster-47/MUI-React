import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

function MUITextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
        <TextField label="Large Success" size="medium" color="success" />
        <TextField
          label="Password"
          type="password"
          helperText="do not share your password with anyone"
          required
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={value?"Seems Nice":"This needs to be filled"}
          required
        />
      </Stack>
    </Stack>
  );
}

export default MUITextField;
