import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Routes from "./Routes";
//import RTL from "./rtl";
import { ThemeContextProvider, ThemeContextConsumer } from "./context/darkMode";
import { CookiesProvider, useCookies, Cookies } from "react-cookie";
const theme = createMuiTheme({
  //direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
    palette: {
      white: "#fff",
      black: "#000",
      logo: "#FF6C60",
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  },
});
const cookie = new Cookies();
console.log("tttt", cookie.get("theme"));
//const [cookies, setCookie] = useCookies(["theme"]);
const routing = (
  <CookiesProvider>
    <ThemeContextProvider
      value={cookie.get("theme") ? cookie.get("theme") : "Light"}
    >
      {/*<RTL>*/}
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
      {/*</RTL>*/}
    </ThemeContextProvider>
  </CookiesProvider>
);
ReactDOM.render(routing, document.getElementById("root"));
