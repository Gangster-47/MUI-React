import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function MUIRadio() {
  return (
    <Box>
      <FormControl color="secondary">
        <FormLabel id="job-exp-group-label">Years of Experience</FormLabel>
        <RadioGroup name="job-exp-group" aria-labelledby="job-exp-group-label" row>
          {/*default prop column but can put row prop in there*/}
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-2 years"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="3-5 years"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="6-10 years"
            value="6-10"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MUIRadio;
