import { Box, Stack, Divider,Grid,Paper } from "@mui/material";

function MUILayout() {
  return (
    <Paper sx={{padding:"32px"}} elevation={5}>
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

    <Grid container my={4}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 4</Box>
      </Grid>
    </Grid>

    <Grid container my={4} spacing={2}>
      <Grid item xs>                                                 {/*equal distribution xs in all list*/}
        <Box bgcolor="primary.light" p={2}>Item 1</Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>Item 2</Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>Item 4</Box>
      </Grid>
    </Grid>

    <Grid container my={4} rowSpacing={4} columnSpacing={2}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 4</Box>
      </Grid>
    </Grid>
        </Paper>
  );
}

export default MUILayout;
