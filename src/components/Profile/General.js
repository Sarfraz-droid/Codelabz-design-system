import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { theme } from "../../Theme/Layout";
import Paper from "@mui/material/Paper";
import { Grid, Divider } from "@mui/material";
import { faker } from "@faker-js/faker";
import CakeIcon from "@mui/icons-material/Cake";

function Details() {
  const info = [
    {
      label: "Country",
      value: "India",
    },
    {
      label: "Website",
      value: "http://sarfraz-alam.netlify.app/",
    },
    {
      label: "Github",
      value: "https://github.com/Sarfraz-droid",
    },
  ];

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
              spacing={0}
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
              <Typography
                fontWeight={200}
                style={{
                  marginTop: 15,
                }}
              >
                Sarfraz Alam
              </Typography>
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
                fontWeight={400}
                style={{
                  opacity: 0.5,
                  padding: "20px 0px ",
                }}
                fontSize={10}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignContent={`flex-end`}
                  alignItems={`flex-end`}
                  justifyContent={`flex-end`}
                >
                  <CakeIcon
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                  <Typography fontSize={10}>Delhi, India</Typography>
                </Stack>
              </Typography>
              <Typography
                fontWeight={300}
                fontSize={12}
                color={theme.palette.primary.blue}
                style={{
                  width: "70%",
                  margin: "auto",
                  padding: "25px 0px ",
                }}
                textAlign={`center`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                lectus morbi volutpat, ac proin feugiat. Convallis iaculis morbi
                nec in. Vulputate eu dictumst aenean quam sagittis risus in
                mauris. Odio urna fringilla turpis quam gravida magna fringilla
                eu magnis.
              </Typography>
              <Divider
                color={theme.palette.primary.blue}
                style={{
                  width: "70%",
                  opacity: 0.2,
                }}
              />
              <Stack
                style={{
                  width: "70%",
                  padding: "20px 50px",
                }}
              >
                {info.map((item) => (
                  <Grid
                    direction="row"
                    container
                    alignItems="center"
                    justify="space-between"
                    style={{
                      width: "100%",
                      padding: "9px 0px",
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography
                        fontWeight={300}
                        color={theme.palette.primary.blue}
                        style={{
                          paddingLeft: 55,
                        }}
                        fontSize={14}
                      >
                        {item.label}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        fontWeight={300}
                        color={theme.palette.primary.blue}
                        fontSize={13}
                        style={{
                          opacity: 0.5,
                          paddingLeft: 25,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Details;
