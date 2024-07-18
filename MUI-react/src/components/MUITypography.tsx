import { Typography } from "@mui/material"

function MUITypography() {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis placeat reiciendis cum veritatis adipisci hic minima dolorem dolorum nam porro. Enim impedit molestiae reiciendis eligendi cupiditate assumenda nemo iusto labore.</Typography>

      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis placeat reiciendis cum veritatis adipisci hic minima dolorem dolorum nam porro. Enim impedit molestiae reiciendis eligendi cupiditate assumenda nemo iusto labore.</Typography>
    </div>
  )
}

export default MUITypography
