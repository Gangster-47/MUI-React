import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function MUICard() {
  return (
    <Box width="300px">
      <Card elevation={5}>
        <CardMedia
          component="img"
          height="150px"
          image="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            aperiam minus dolore dignissimos accusamus quaerat, et facilis neque
            odit quo porro perferendis provident tenetur rem blanditiis saepe
            sunt magni eos?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MUICard;
