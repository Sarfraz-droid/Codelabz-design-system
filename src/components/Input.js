import React from "react";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import Layout from "./../Theme/Layout";
import { theme } from "./../Theme/Layout";
const StyledInputBase = styled(InputBase)`
  background-color: ${theme.palette.secondary.light};
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid ${theme.palette.secondary.dark};
  color: ${theme.palette.primary.dark};
`;

export default function Input() {
  return (
    <Layout>
      <StyledInputBase placeholder="Placeholder" />
    </Layout>
  );
}

export { StyledInputBase };
