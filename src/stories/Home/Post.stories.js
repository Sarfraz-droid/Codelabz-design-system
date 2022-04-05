import React from "react";
import Post from "../../components/Home/Post";

export default {
    title: 'Home/Post',
    component: Post,
}

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});