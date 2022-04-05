import React from "react";
import { Stack, Grid, Typography, Avatar, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { theme } from "../../Theme/Layout";
export default function General() {
  const orgs = [
    {
      label: "Country",
      value: "India",
    },
    {
      label: "Website",
      value: "sarfraz-alam.netlify.app",
    },
    {
      label: "Github",
      value: "https://github.com/Sarfraz-droid",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent={"center"}
      style={{
        width: "50%",
      }}
    >
      <Grid
        item
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Avatar
            src="https://picsum.photos/600"
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Grid>
        <Grid item justifyContent={"flex-start"}>
          <Stack
            style={{
              width: "100%",
              padding: "20px",
              paddingLeft: "30px",
            }}
          >
            <Typography fontWeight={200} fontSize={32}>
              Sarfraz Alam
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              style={{
                marginTop: "9px",
                width: 100,
                padding: "5px",
                color: "white",
                borderRadius: "25px",
                backgroundColor: "#77D74A",
              }}
            >
              <CheckCircleIcon fontSize="12px" />
              <Typography
                style={{
                  marginLeft: "5px",
                }}
                fontSize={12}
                fontWeight={300}
              >
                Email Verified
              </Typography>
            </Stack>
            <Typography
              fontWeight={100}
              style={{
                marginTop: "15px",
                paddingLeft: "10px",
              }}
            >
              Delhi, India
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          style={{
            padding: "20px",
          }}
          color={theme.palette.primary.dark}
          fontWeight={300}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
          lectus morbi volutpat, ac proin feugiat. Convallis iaculis morbi nec
          in. Vulputate eu dictumst aenean quam sagittis risus in mauris. Odio
          urna fringilla turpis quam gravida magna fringilla eu magnis.
        </Typography>
        <Divider />
        {orgs.map((org, index) => (
          <Grid
            container
            spacing={3}
            direction="row"
            style={{
              width: "100%",
              padding: "10px",
            }}
          >
            <Grid item sm={6}>
              <Typography
                style={{
                  padding: "10px",
                  paddingLeft: "20px",
                }}
                color={theme.palette.primary.dark}
              >
                {org.label}
              </Typography>
            </Grid>
            <Grid item sm={6} alignContent={"center"} alignSelf={"center"}>
              <Typography fontWeight={100} color={theme.palette.primary.light}>
                {org.value}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
