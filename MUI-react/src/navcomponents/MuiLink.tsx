import { Link, Stack, Typography } from "@mui/material"

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" fontSize="20px">Link 1</Link>
      <Link href="#" fontSize="20px" color="secondary" underline="none">Link 2</Link>
      <Typography variant="h6">
      <Link href="#" fontSize="20px" color="secondary" underline="hover">Link 2</Link>
      </Typography>
    </Stack>
  )
}

export default MuiLink
