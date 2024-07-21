import { Box,List,ListItem,ListItemText,ListItemIcon, ListItemAvatar, Avatar,ListItemButton,Divider } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';

function MuiList() {
  return (
    <>
    <Box sx={{width:"400px",bgcolor:"#efefef"}}>
      <List>
        {/* <ListItem>
          <ListItemText>List 1</ListItemText>               //not preferred!
          </ListItem> */}
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
          <MailIcon/>
        </ListItemIcon>
        <ListItemText primary="List Item 1" secondary="Secondary Text 1"/>
        </ListItemButton>
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemIcon>
          <MailIcon/>
        </ListItemIcon>
        <ListItemText primary="List Item 2" secondary="Secondary Text 2"/>
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <MailIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="List Item 3" secondary="Secondary Text 3"/>
      </ListItem>
      </List>
    </Box>

      <Box sx={{my:"20px",width:"250px",bgcolor:"#efefef"}}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"/>
          </ListItemAvatar>
          <ListItemText primary="List Item Avatar"/>
        </ListItem>
      </List>
      </Box>
    </>
  )
}

export default MuiList
