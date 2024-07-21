import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function MuiDrawer() {
  const [isDraweropen, setIsDraweropen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDraweropen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDraweropen}
        onClose={() => setIsDraweropen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div" my={2} fontWeight="bold">
            SidePanel
          </Typography>
          <Typography variant="subtitle1" component="div">
            Hello and Welcome!
          </Typography>
          <Typography variant="subtitle1" component="div">
            Hope you all are doing well!
          </Typography>
          <Typography variant="subtitle1" component="div">
            Subscribe to GangstersAssassin!
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
