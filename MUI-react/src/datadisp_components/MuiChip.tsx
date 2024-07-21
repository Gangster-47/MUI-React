import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

function MuiChip() {
  const [chips,setChips]=useState(["chips1","chips2","chips3"])

  const handleDelete =(deletingchip)=>{
    setChips((chips)=>chips.filter((chip)=>chip!==deletingchip))
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip label="Chip Icon" color="primary" icon={<FaceIcon />} />
      <Chip label="Chip outlined" color="secondary" variant="outlined" />
      <Chip
        label="Chip avatar"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Click Chip"
        color="success"
        onClick={() => alert("clicked!")}
      />
      <Chip
        label="Click Chip"
        color="error"
        onClick={() => alert("clicked!")}
        onDelete={() => alert("delete called")}   //On Delete has default delete icon attached to the chip
      />
      {
        chips.map((chip)=>(
          <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
        ))
      }
    </Stack>
  );
}

export default MuiChip;
