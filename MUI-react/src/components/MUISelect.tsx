import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

//for single country select

function MUISelect() {
  const [country, setCountry] = useState("");

  const handleCountryChange = (e) => {
    e.target.value;
    setCountry(e.target.value);
  };
  console.log(country);
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={(e) => handleCountryChange(e)}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

//for multiple countries

// function MUISelect() {
//   const [country, setCountry] = useState<string[]>([]);

//   const handleCountryChange = (e) => {
//     const val=e.target.value;
//     setCountry(val.lentgh>1?val.split(","):val);
//   };
//   console.log(country);
//   return (
//     <Box width="250px">
//       <TextField
//         label="Select Country"
//         select
//         value={country}
//         onChange={(e) => handleCountryChange(e)}
//         fullWidth
//         SelectProps={{multiple:true}}
//       >
//         <MenuItem value="IN">India</MenuItem>
//         <MenuItem value="US">USA</MenuItem>
//         <MenuItem value="AUS">Australia</MenuItem>
//       </TextField>
//     </Box>
//   );
// }


export default MUISelect;
