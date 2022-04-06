import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { theme } from "../../Theme/Layout";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { faker } from "@faker-js/faker";

function Details() {
  return (
    <React.Fragment>
      <Grid container direction={"column"}>
        <Grid item>
          <img
            src={faker.image.abstract(1080, 320, true)}
            alt=""
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          alignItems={"center"}
          justifyContent={`center`}
          direction={"row"}
          style={{
            width: "100%",
          }}
        >
          <Paper
            style={{
              margin: "auto",
              width: "70%",
              marginTop: -200,
              padding: "40px 20px",
            }}
            elevation={10}
          >
            <Stack
              direction="column"
              alignItems={"center"}
              spacing={2}
              style={{
                width: "100%",
                marginTop: -100,
              }}
            >
              <Avatar
                src={faker.image.people(120, 120, true)}
                style={{
                  width: 120,
                  height: 120,
                  border: `5px solid ${theme.palette.primary.dark}`,
                }}
              />
              <Typography fontWeight={200}>Anonymous</Typography>
              <Typography
                fontWeight={400}
                style={{
                  opacity: 0.5,
                }}
                fontSize={10}
              >
                Delhi, India
              </Typography>
              <Typography
                fontWeight={300}
                fontSize={12}
                color={theme.palette.primary.blue}
                style={{
                  width: "70%",
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                lectus morbi volutpat, ac proin feugiat. Convallis iaculis morbi
                nec in. Vulputate eu dictumst aenean quam sagittis risus in
                mauris. Odio urna fringilla turpis quam gravida magna fringilla
                eu magnis.
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                color={theme.palette.primary.blue}
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
                color={theme.palette.primary.blue}
              >
                <LocationOnIcon fontSize="5" />
                <Typography fontSize={9}>Delhi, india</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Details;
