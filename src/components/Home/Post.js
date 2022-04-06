import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import styled from "@emotion/styled";
import { Avatar, Button, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { theme } from "../../Theme/Layout";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../../Theme/Layout";
import { StyledButton } from "../Button";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";

const StyledCard = styled(Card)((props) => ({
  borderRadius: 10,
  boxShadow: "none",
  backgroundColor: "#FFFF",
  border: "1px solid #A4A4A4",
}));

const StyledBox = styled(Box)((props) => ({
  padding: 25,
}));

function Post() {
  return (
    <Layout>
      <StyledCard>
        <CardContent>
          <Stack>
            <Stack direction="row" spacing={2}>
              <Avatar
                src="https://picsum.photos/200"
                alt="avatar"
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Stack direction={"column"} justifyContent="center">
                <Typography
                  color={theme.palette.primary.dark}
                  fontWeight={"bold"}
                  fontSize={20}
                >
                  Name
                </Typography>
                <Typography
                  fontSize={8}
                  fontWeight={500}
                  style={{
                    opacity: 0.5,
                  }}
                >
                  25 May,2021
                </Typography>
              </Stack>
            </Stack>
            <StyledBox>
              <Typography color={theme.palette.primary.dark} fontWeight={700}>
                I made 100 more CSS loaders for your next project
              </Typography>
              <Typography
                color={theme.palette.primary.light}
                fontWeight={500}
                style={{
                  marginTop: 10,
                }}
              >
                #css #webdev #beginners #html
              </Typography>
            </StyledBox>
          </Stack>
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={10}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-start"
                style={{
                  paddingLeft: 25,
                }}
              >
                <Stack direction="row" spacing={1}>
                  <FavoriteBorderTwoToneIcon
                    style={{
                      opacity: 0.1,
                    }}
                  />
                  <Typography
                    color={theme.palette.secondary.dark}
                    fontWeight={500}
                  >
                    126
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <CommentTwoToneIcon
                    style={{
                      opacity: 0.1,
                    }}
                  />
                  <Typography
                    color={theme.palette.secondary.dark}
                    fontWeight={500}
                  >
                    0 Comments
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                alignSelf={"flex-end"}
                alignItems={"flex-end"}
                spacing={2}
              >
                <Typography
                  color={theme.palette.secondary.dark}
                  fontWeight={500}
                >
                  10 min read
                </Typography>
                <StyledButton variant="contained" color="primary">
                  <Typography
                    color={theme.palette.secondary.main}
                    textTransform={"none"}
                    fontWeight={700}
                  >
                    Save
                  </Typography>
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </CardActions>
      </StyledCard>
    </Layout>
  );
}

export default Post;
