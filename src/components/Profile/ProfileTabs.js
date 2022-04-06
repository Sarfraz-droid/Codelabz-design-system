import React, { useState } from "react";
import { Stack, Paper, Avatar, Typography } from "@mui/material";
import User from "./assets/user.png";
import Notification from "./assets/notification.png";
import Settings from "./assets/settings.png";

function ProfileTabs() {
  const tabs = [
    {
      icon: User,
      label: "Edit Profile",
    },
    {
      icon: Notification,
      label: "Notifications",
    },
    {
      icon: Settings,
      label: "Customization",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Stack
      spacing={2}
      style={{
        width: 200,
      }}
    >
      {tabs.map((tab, index) => (
        <Paper
          key={index}
          elevation={index === activeTab ? 5 : 0}
          style={{
            borderRadius: 10,
            opacity: index === activeTab ? 1 : 0.5,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            style={{
              padding: "7px 15px",
            }}
            onClick={() => setActiveTab(index)}
          >
            <Avatar
              src={tab.icon}
              variant="square"
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Typography fontWeight={500}>{tab.label}</Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}

export default ProfileTabs;
