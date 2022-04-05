import React from "react";

import General from "../../components/Profile/General";

export default {
  title: "Profile/General",
  component: General,
};

const Template = (args) => <General {...args} />;

export const Primary = Template.bind({});
