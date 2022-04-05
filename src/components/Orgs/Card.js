import React from "react";
import { StyledCard } from "../Home/Trending";
import Layout from "../../Theme/Layout";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography, Divider } from "@mui/material";
import { theme } from "../../Theme/Layout";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CardContent, CardActions } from "@mui/material";
import { StyledButton } from "../Button";

function Orgs() {
  return (
    <Layout>
      <StyledCard>
        <CardContent>
          <Stack
            spacing={2}
            style={{
              padding: 5,
            }}
          >
            <Avatar
              src="https://picsum.photos/600"
              style={{
                width: "100%",
                height: 140,
              }}
              variant="rounded"
            />
            <Typography
              style={{
                padding: 2,
              }}
              color={theme.palette.primary.dark}
              fontWeight={500}
              fontSize={20}
            >
              Title Name
            </Typography>
            <Divider
              style={{
                width: 50,
                marginTop: 1,
              }}
            />
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
        </CardContent>
        <CardActions
          style={{
            marginTop: 0,
          }}
        >
          <Stack
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            style={{
              width: "100%",
            }}
          >
            <StyledButton
              variant="contained"
              size="small"
              style={{
                padding: 5,
              }}
            >
              <Typography fontSize={14} fontWeight={700}>
                Follow
              </Typography>
            </StyledButton>
          </Stack>
        </CardActions>
      </StyledCard>
    </Layout>
  );
}

export default Orgs;
