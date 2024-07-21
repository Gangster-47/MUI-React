import { Stack,Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

function MuiBadge() {
  return (
    <Stack direction="row" spacing={2} sx={{mx:"10px",my:"20px"}}>
      <Badge badgeContent={5} color="primary">
        <MailIcon/>
      </Badge>
      <Badge badgeContent={2} color="primary">
        <NotificationsIcon/>
      </Badge>
      <Badge badgeContent={100} max={101} color="secondary">
        <MailIcon/>
      </Badge>
      <Badge badgeContent={18} max={10} color="error">
        <NotificationsIcon/>
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon/>
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <MailIcon/>
      </Badge>
    </Stack>
  )
}

export default MuiBadge
