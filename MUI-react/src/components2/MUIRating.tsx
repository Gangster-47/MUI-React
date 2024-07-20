import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// function MUIRating() {
//   const [ratingvalue,setRatingvalue]=useState<number|null>(null);
//   return (
//     <Stack spacing={2}>
//       <Rating value={ratingvalue} onChange={(e)=>setRatingvalue(e.target.value)}/>
//       <div>Rating: {ratingvalue}</div>
//     </Stack>
//   )
// }

function MUIRating() {
  const [ratingvalue, setRatingvalue] = useState<number | null>(null);

  const handleRatingChange = (
    _event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    setRatingvalue(newValue);
  };

  console.log(ratingvalue);
  return (
    <Stack spacing={2}>
      <Rating
        value={ratingvalue}
        onChange={handleRatingChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
      />
      <div>Rating: {ratingvalue}</div>
    </Stack>
  );
}

export default MUIRating;
