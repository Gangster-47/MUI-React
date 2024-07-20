import { Box, Stack, Divider } from "@mui/material";

function MUILayout() {
  return (
    <Stack
      sx={{
        border: "1px solid",
      }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem/>}
    >
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          ":hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Hello and Welcome!
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Enjoy Working!
      </Box>
    </Stack>
  );
}

export default MUILayout;
