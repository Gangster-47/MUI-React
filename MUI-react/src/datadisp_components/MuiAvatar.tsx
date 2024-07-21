import { Stack, Avatar, AvatarGroup } from "@mui/material";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>

      <div>Avatar with sources</div>
      <Stack direction="row" spacing={1}>
        <Avatar
          src="..\public\IMG20240630120713.jpg"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
        <Avatar
          src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
        <Avatar
          src="https://pics.craiyon.com/2023-11-14/o_iuanjoSHyddOr7DQygYg.webp"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
      </Stack>

      <div>Avatar Group</div>
      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          <Avatar
            src="..\public\IMG20240630120713.jpg"
            sx={{ width: "50px", height: "50px" }}
          ></Avatar>
          <Avatar
            src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"
            sx={{ width: "50px", height: "50px" }}
          ></Avatar>
          <Avatar
            src="https://pics.craiyon.com/2023-11-14/o_iuanjoSHyddOr7DQygYg.webp"
            sx={{ width: "50px", height: "50px" }}
          ></Avatar>
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar
          src="..\public\IMG20240630120713.jpg"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
        <Avatar
          variant="square"
          src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
        <Avatar
          variant="rounded"
          src="https://pics.craiyon.com/2023-11-14/o_iuanjoSHyddOr7DQygYg.webp"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar src="..\public\IMG20240630120713.jpg"></Avatar>
          <Avatar src="https://pics.craiyon.com/2023-11-14/o_iuanjoSHyddOr7DQygYg.webp"></Avatar>
          <Avatar src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"></Avatar>
          <Avatar src="https://pics.craiyon.com/2023-11-14/o_iuanjoSHyddOr7DQygYg.webp"></Avatar>
          <Avatar src="https://cdn.musebycl.io/2021-01/Genies-hed-2021_0.jpg"></Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
