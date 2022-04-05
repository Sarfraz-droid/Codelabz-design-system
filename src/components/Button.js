import React from "react";
import Layout, { theme } from "../Theme/Layout";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

// import './theme.css'
import PropTypes from "prop-types"; // ES6
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(Button)((props) => ({
  borderRadius: 10,
  color:
    props.variant === "contained"
      ? theme.palette.secondary.main
      : theme.palette.primary.light,
  boxShadow:
    props.variant === "contained"
      ? "0px 1px 2px rgba(15, 86, 179, 0.2), 0px 2px 4px rgba(15, 86, 179, 0.2)"
      : "none",
  textTransform: "none",
  "&:hover": {
    boxShadow:
      "0px 1px 2px rgba(15, 86, 179, 0.4), 0px 2px 4px rgba(15, 86, 179, 0.4)",
  },
}));

function Btn(props) {
  return (
    <Layout>
      <StyledButton variant={props.variant}>
        {props.Icon ? <AddIcon /> : null}
        {props.text}
      </StyledButton>
    </Layout>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.bool.isRequired,
  variant: PropTypes.string,
};

export { StyledButton };
export default Btn;
