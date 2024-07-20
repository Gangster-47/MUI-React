import { Box,FormControlLabel,Switch } from '@mui/material'
import { useState } from 'react'

function MUISwitch() {
  const [check,setCheck]=useState(false);
  console.log(check);
  return (
    <Box>
      <FormControlLabel label="Dark Mode" control={<Switch checked={check} onChange={()=>setCheck(!check)}/>}/>
    </Box>
  )
}

export default MUISwitch
