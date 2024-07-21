import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="Nvigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<SentimentSatisfiedAltIcon/>}/>}
    >
      <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle="Copy"/>
      <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print"/>
      <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share"/>
    </SpeedDial>
  );
}

export default MuiSpeedDial;

//LOVELY COMPONENT !!!
