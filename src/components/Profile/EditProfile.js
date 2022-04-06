import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Avatar,
  Divider,
  Paper,
  TextField,
} from "@mui/material";

import { theme } from "../../Theme/Layout";
import { StyledInputBase } from "../Input";
import faker from "@faker-js/faker";
import { StyledButton } from "../Button";

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
  // const orgs = [
  //   {
  //     label: "Country",
  //     placeholder: "India",
  //   },
  //   {
  //     label: "Description",
  //     placeholder:
  //       "Consequat voluptate eu non ullamco dolore proident magna sit consectetur dolor. Aute cillum sunt voluptate excepteur tempor.  ",
  //     props: {
  //       multiline: true,
  //       rows: 5,
  //       style: {
  //         padding: "10px 15px",
  //         width: "100%",
  //       },
  //     },
  //   },
  //   {
  //     label: "Website",
  //     placeholder: "sarfraz-alam.netlify.app",
  //   },
  //   {
  //     label: "Github",
  //     placeholder: "https://github.com/Sarfraz-droid",
  //   },
  // ];

  const users = [
    {
      label: "Name",
      value: "Sarfraz Alam",
    },
    {
      label: "From",
      value: "Delhi, India",
    },
    {
      label: "Country",
      value: "India",
    },
  ];

  return (
    <Stack direction="column">
      <Paper
        elevation={10}
        style={{
          borderRadius: 10,
        }}
      >
        <Typography
          style={{
            padding: "20px",
            opacity: 0.2,
          }}
          fontSize={26}
          fontWeight={300}
        >
          Users
        </Typography>

        <Stack
          style={{
            padding: "20px 50px",
          }}
        >
          {users.map((user) => (
            <Grid container>
              <Grid item xs={4} alignContent={"center"} alignSelf={"center"}>
                <Typography color={theme.palette.primary.blue} fontWeight={300}>
                  {user.label}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type={"text"}
                  placeholder={user.value}
                  variant="standard"
                  style={{
                    padding: "10px 15px",
                  }}
                />
              </Grid>
            </Grid>
          ))}
          <Grid
            container
            style={{
              padding: "25px 50px",
            }}
          >
            <Grid item xs={4} alignContent={"center"} alignSelf={"center"}>
              <Avatar
                src={faker.image.people(120, 120, true)}
                style={{
                  width: 100,
                  height: 100,
                  border: `3px solid ${theme.palette.primary.blue}`,
                }}
              />
            </Grid>
            <Grid item xs={8} alignContent={"center"} alignSelf={"center"}>
              <Stack direction="column" justifyContent={"center"}>
                <StyledButton
                  variant="contained"
                  style={{
                    width: 130,
                  }}
                >
                  Choose Photo
                </StyledButton>
                <Typography
                  fontSize={10}
                  style={{
                    padding: "3px 5px",
                    opacity: 0.2,
                  }}
                >
                  No Photo Chosen
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default EditProfile;
