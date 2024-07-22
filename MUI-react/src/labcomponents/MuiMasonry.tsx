import { Box, Paper } from "@mui/material";
import { Masonry } from "@mui/lab";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

function MuiMasonry() {
  return (
    <Box sx={{ width: "500px", minHeight: "400px" }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key="index"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid",
            }}
          >
            Hello {index+1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}

export default MuiMasonry;
