import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
  }
  render() {
    return (
      <div>
        <AppBar color="white" position="fixed">
          <Toolbar>
            <IconButton
              onClick={() => this.setState({ drawer: true })}
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ marginRight: "20px" }}>
              سامانه یکپارچه بانک اطلاعات باج‌افزار |
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "#FF6C60", marginRight: "10px" }}
            >
              مرکز تخصصی آپا بجنورد
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistent"
          anchor="right"
          open={this.state.drawer}
          onClose={() => this.setState({ drawer: false })}
        >
          <Typography variant="h6">sssss</Typography>
        </Drawer>
      </div>
    );
  }
}
export default App;
