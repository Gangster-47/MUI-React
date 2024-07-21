import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function MuiBreadCrumbs() {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        itemsAfterCollapse={1}
        itemsBeforeCollapse={1}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBreadCrumbs;
