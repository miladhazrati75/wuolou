import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
const reactCookie = require("react-cookie");

class ThemeContextProvider extends Component {
  state = {
    theme:
      new reactCookie.Cookies().get("theme") === "Light" ? "Light" : "Dark",
  };
  toggleTheme = () => {
    this.setState((prevState) => {
      new reactCookie.Cookies().set(
        "theme",
        prevState.theme === "Light" ? "Dark" : "Light"
      );
      return {
        theme: prevState.theme === "Light" ? "Dark" : "Light",
      };
    });
  };
  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { ThemeContextProvider, Consumer as ThemeContextConsumer };
