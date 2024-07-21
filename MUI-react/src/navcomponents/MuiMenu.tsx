import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiMenu() {

  //These Four Things are mainly important (before return)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose=()=>
  {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" color="success" sx={{ my: 0 }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>

          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : "undefined"}                //can be ignored
            aria-haspopup="true"                                                //can be ignored
            aria-expanded={open ? "true" : undefined}                          //can be ignored
            endIcon={<ExpandMoreIcon/>}
          >
            Resources
          </Button>

          <Button color="inherit">Login</Button>
        </Stack>

        <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{
          "aria-labelledby":"resources-button",
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

//Mainly Important is
// 1.Menu anchorEl prop
// 2.onClose prop
// 3.Button handle click Prop

export default MuiMenu;
