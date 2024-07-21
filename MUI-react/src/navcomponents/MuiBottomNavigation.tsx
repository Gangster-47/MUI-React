import { BottomNavigation, BottomNavigationAction,Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

function MuiBottomNavigation() {
  const [value, setValue] = useState(null);
  return (
    <>
    <Typography variant="h6" component="div" textAlign="center">
      We are on: {value}
    </Typography>
    <BottomNavigation
      sx={{ width: "99%", position: "absolute", bottom: "0" }}
      value={value}
      onChange={(_event: React.SyntheticEvent, newvalue: any)=>setValue(newvalue)}
      // showLabels
    >
      <BottomNavigationAction value="Home" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction value="Favourites" label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction value="Profile" label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
      </>
  );
}

export default MuiBottomNavigation;
