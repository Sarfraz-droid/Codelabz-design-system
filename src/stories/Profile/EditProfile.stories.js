import React from "react";

import EditProfile from "../../components/Profile/EditProfile";

export default {
  title: "Profile/EditProfile",
  component: EditProfile,
};

const Template = (args) => <EditProfile {...args} />;

export const Card = Template.bind({});
