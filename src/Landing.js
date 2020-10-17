import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContextConsumer } from "./context/darkMode";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  rootDark: {
    height: "100vh",
  },
}));

export default function Login(props) {
  const classes = useStyles()
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div
          className={
            context.theme === "Light" ? classes.root : classes.rootDark
          }
        >
          salam
        </div>
      )}
    </ThemeContextConsumer>
  );
}
