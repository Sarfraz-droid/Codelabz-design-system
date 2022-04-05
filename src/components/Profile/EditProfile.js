import React from "react";
import { Stack, Grid, Typography, Avatar, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { theme } from "../../Theme/Layout";
import { StyledInputBase } from "../Input";

const EditGrid = (props) => {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item xs={4} alignContent={"center"} alignSelf={"center"}>
        <Typography color={theme.palette.primary.dark}>
          {props.label}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <StyledInputBase
          placeholder={props.placeholder}
          style={{
            border: "none",
            ...props.style,
          }}
          multiline={props.multiline}
          rows={props.rows}
        />
      </Grid>
    </Grid>
  );
};

function EditProfile() {
  const orgs = [
    {
      label: "Country",
      placeholder: "India",
    },
    {
      label: "Description",
      placeholder:
        "Consequat voluptate eu non ullamco dolore proident magna sit consectetur dolor. Aute cillum sunt voluptate excepteur tempor.  ",
      props: {
        multiline: true,
        rows: 5,
        style: {
          padding: "10px 15px",
          width: "100%",
        },
      },
    },
    {
      label: "Website",
      placeholder: "sarfraz-alam.netlify.app",
    },
    {
      label: "Github",
      placeholder: "https://github.com/Sarfraz-droid",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent={"center"}
      style={{
        width: "70%",
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
            spacing={3}
          >
            <EditGrid label="Name" placeholder="Sarfraz Alam" />
            <EditGrid label="Email" placeholder="Delhi, India" />
          </Stack>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          width: "90%",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* <StyledInputBase
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
          lectus morbi volutpat, ac proin feugiat. Convallis iaculis morbi nec
          in. Vulputate eu dictumst aenean quam sagittis risus in mauris. Odio
          urna fringilla turpis quam gravida magna fringilla eu magnis."
          style={{
            border: "none",
            padding: "10px 15px",
            width: "100%",
            marginTop: "20px",
          }}
          multiline
          rows={5}
        /> */}
        <Stack spacing={2}>
          <Divider />

          {orgs.map((org, index) => (
            <EditGrid
              key={index}
              label={org.label}
              placeholder={org.placeholder}
              style={{
                width: "100%",
              }}
              {...org.props}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default EditProfile;
