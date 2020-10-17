import React from "react";
import jMoment from "moment-jalaali";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Helmet from "react-helmet";
import { ThemeContextConsumer } from "./context/darkMode";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  rootDark: {
    display: "flex",
    flexGrow: 1,
  },
}));

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function Dashboard(props) {
  const classes = useStyles()
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div
          className={
            context.theme === "Light" ? classes.root : classes.rootDark
          }
        >
          <CssBaseline />
          <Helmet>
            <title>title</title>
          </Helmet>
          salam
                  </div>
      )}
    </ThemeContextConsumer>
  );
}
