import { Box } from "@mui/material";

function MuiResponsiveness() {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs:"100px",
          sm:"200px",
          md:"300px",
          lg:"400px",
          xl:"500px"
        },
        bgcolor: {
          xs:"error.main",
          sm:"secondary.light",
          md:"secondary.main",
          lg:"primary.light",
          xl:"primary.main"
        },
        my: "20px",
        mx: "20px",
      }}
    ></Box>
  );
}

export default MuiResponsiveness;
