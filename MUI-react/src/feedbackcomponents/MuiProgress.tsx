import { Stack,CircularProgress,LinearProgress } from "@mui/material"

function MuiProgress() {
  return (
    <>
    <Stack spacing={2}>
      <CircularProgress/>
      <CircularProgress color="success"/>
      <CircularProgress color="error" variant="determinate" value={60} />
      <LinearProgress sx={{width:"100px"}}/>
      <LinearProgress sx={{width:"100px"}} color="success"/>
      <LinearProgress sx={{width:"100px"}} color="error" variant="determinate" value={60} />
    </Stack>
    </>
  )
}

export default MuiProgress
