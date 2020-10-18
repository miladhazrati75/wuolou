import React from "react";
import { Link } from "react-router-dom";
import jMoment from "moment-jalaali";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Helmet from "react-helmet";
import { ThemeContextConsumer } from "./context/darkMode";
import {
  Grid,
  Paper,
  Button,
  Icon,
  IconButton,
  Typography,
  Box,
  Avatar,
  InputBase,
  TextField,
} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Twitter from "@material-ui/icons/Twitter";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  rootDark: {
    display: "flex",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerPane: {
    borderRight: "solid 1px grey",
    borderLeft: "solid 1px grey",
    height: "100vh",
  },
  homeButton: {
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: "50px",
  },
  twitterLogo: {
    marginBottom: theme.spacing(5),
  },
  profilePic: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1),
  },
  newTweetTF: {
    border: 0,
  },
  pageTitle: {
    borderBottom: "solid 1px grey",
  },
  tweetBox: {
    borderBottom: "solid 1px grey",
  },
  profileBox: {
    borderBottom: "solid 10px grey",
    position: "absolute",
  },
  tweetButton: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: "50px",
  },
  userID: {
    color: "grey",
  },
  tweet: {
    marginTop: theme.spacing(1),
  },
  searchBox: {
    backgroundColor: "grey",
    borderRadius: "50px",
  },
  trendsBox: {
    borderRadius: "15px",
    backgroundColor: "grey",
  },
  trendsBoxSection: {
    borderBottom: "solid 1px black",
  },
  tweetAction: {
    width: "1.5em",
  },
  leftPaneIcons: {
    width: "1.5em",
  },
}));

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function Dashboard(props) {
  const classes = useStyles();
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
            <title>Wuolou / Home</title>
          </Helmet>

          <Box
            m={1}
            marginLeft={2}
            marginRight={0}
            p={1}
            paddingRight={0}
            className={classes.searchBox}
          >
            <Grid container xs={12}>
              <Grid item xs={2}>
                <Search />
              </Grid>
              <Grid item xs={10}>
                <InputBase placeholder="search" />
              </Grid>
            </Grid>
          </Box>

          <Box
            m={1}
            marginLeft={2}
            marginRight={0}
            p={1}
            paddingRight={0}
            className={classes.trendsBox}
          >
            <Box p={1} className={classes.trendsBoxSection}>
              <Typography>Trends for you</Typography>
            </Box>
            <Box p={1} className={classes.trendsBoxSection}>
              <Typography variant="caption">#ILoveYou</Typography>
            </Box>
            <Box p={1}>
              <Typography variant="caption">Show more</Typography>
            </Box>
          </Box>
          <Box
            m={1}
            marginLeft={2}
            marginRight={0}
            p={1}
            paddingRight={0}
            className={classes.trendsBox}
          >
            <Box p={1} className={classes.trendsBoxSection}>
              <Typography>Who to follow</Typography>
            </Box>
            <Box p={1} className={classes.trendsBoxSection}>
              <Grid container justify="space-between">
                <Grid item>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Avatar
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                        className={classes.profilePic}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">Milad Hazrati</Typography>
                      <Typography
                        variant="caption"
                        //classes={{ root: classes.userID }}
                      >
                        @MiladHazrati75
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button outlined classes={{ root: classes.tweetButton }}>
                    Follow
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box p={1}>
              <Typography variant="caption">Show more</Typography>
            </Box>
          </Box>
          <Box m={2} marginRight={4} marginLeft={4}>
            <Grid container spacing={1}>
              <Grid item>Terms of Service</Grid>
              <Grid item>Privacy Policy</Grid>
              <Grid item>Cookie Policy</Grid>
              <Grid item>Imprint</Grid>
              <Grid item>Ads info</Grid>
              <Grid item>More</Grid>
              <Grid item>© 2020 Twitter, Inc.</Grid>
            </Grid>
          </Box>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
