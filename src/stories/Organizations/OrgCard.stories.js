import React from "react";

import Orgs from "../../components/Orgs/Card";

export default {
  title: "Organization/Card",
  component: Orgs,
};

const Template = (args) => <Orgs {...args} />;

export const Primary = Template.bind({});
