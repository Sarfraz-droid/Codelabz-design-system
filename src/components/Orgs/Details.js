import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { theme } from "../../Theme/Layout";
function Details() {
  return (
    <Stack direction="column" alignItems={"center"} spacing={2}>
      <Avatar
        src="https://picsum.photos/600"
        style={{
          width: 120,
          height: 120,
        }}
      />
      <Typography fontWeight={200}>Anonymous</Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        style={{
          padding: 2,
          paddingLeft: 10,
        }}
        color={theme.palette.primary.dark}
      >
        <LinkIcon fontSize="5" />
        <Typography fontSize={9}>sarfraz-alam.netlify.app</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        style={{
          padding: 2,
          paddingLeft: 10,
          marginTop: 6,
        }}
        color={theme.palette.primary.dark}
      >
        <LocationOnIcon fontSize="5" />
        <Typography fontSize={9}>Delhi, india</Typography>
      </Stack>
    </Stack>
  );
}

export default Details;
