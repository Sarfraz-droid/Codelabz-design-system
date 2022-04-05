import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import styled from "@emotion/styled";
import Layout from "../../Theme/Layout";
import { Typography } from "@mui/material";
import { theme } from "../../Theme/Layout";
import { Divider } from "@mui/material";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { Stack } from "@mui/material";
import { ListItemButton } from "@mui/material";

const StyledCard = styled(Card)((props) => ({
  borderRadius: 10,
  width: 250,
  padding: 5,
  boxShadow: "0px 21px 36px rgba(15, 86, 179, 0.05)",
  backgroundColor: "#FAFCFE",
  border: "1px solid #E5F1FF",
}));

const StyledListButton = styled(ListItemButton)((props) => ({
  padding: 1,
  borderRadius: 10,
  paddingLeft: 12,
  color: theme.palette.primary.dark,
  "&:hover": {
    backgroundColor: "#E5F1FF",
  },
}));

function Trending() {
  const tending = ["#css", "#javascript", "#react", "#nodejs", "#vuejs"];

  return (
    <Layout>
      <StyledCard>
        <CardContent>
          <Typography
            fontSize={20}
            fontWeight={"bold"}
            color={theme.palette.primary.dark}
            style={{
              paddingBottom: 8,
            }}
          >
            Upcoming Events
          </Typography>
          <Divider />
          <List>
            {tending.map((item, index) => (
              <ListItem
                disablePadding
                key={index}
                style={{
                  paddingTop: 2,
                }}
              >
                <StyledListButton disableRipple>
                  <Typography
                    style={{
                      padding: 3,
                    }}
                    fontWeight={300}
                    fontSize={14}
                  >
                    {item}
                  </Typography>
                </StyledListButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Stack
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            style={{
              width: "100%",
            }}
          >
            <Typography
              fontSize={12}
              color={theme.palette.primary.dark}
              style={{
                padding: 2,
                paddingRight: 10,
              }}
            >
              See More
            </Typography>
          </Stack>
        </CardActions>
      </StyledCard>
    </Layout>
  );
}

export { StyledCard };

export default Trending;
