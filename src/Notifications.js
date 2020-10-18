import React from "react";
import jMoment from "moment-jalaali";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SwipeableViews from "react-swipeable-views";
import Helmet from "react-helmet";
import { ThemeContextConsumer } from "./context/darkMode";
import {
  Grid,
  GridList,
  GridListTile,
  Paper,
  Button,
  Icon,
  IconButton,
  Typography,
  Box,
  Avatar,
  InputBase,
  TextField,
  Tab,
  Tabs,
  AppBar,
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
    borderBottom: 0,
  },
  tweetBox: {
    borderBottom: "solid 1px grey",
  },
  profileBox: {
    height: "500px",
    position: "relative",
  },
  profileHeader: {
    height: "35%",
    width: "100%",
    backgroundImage: "url(http://localhost:3000/static/aa.jpg)",
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
    width: "1.25em",
  },
  leftPaneIcons: {
    width: "1.5em",
  },
  profilePhoto: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    //margi: theme.spacing(1),
    position: "absolute",
    top: "18%",
    left: "25px",
    border: "3px solid #fafafa",
  },
  profileIcons: {
    height: "1.25em",
  },
  tabs: {
    backgroundColor: "transparent",
    boxShadow: 0,
  },
  noBoxShadow: {
    boxShadow: 0,
  },
  appBar: {
    backgroundColor: "#fafafa",
    boxShadow: 0,
  },
}));

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <IconButton classes={{ root: classes.twitterLogo }}>
                <Twitter fontSize="large" />
              </IconButton>
              <br />
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
                      <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Home
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Explore
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Notifications
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Messages
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Bookmarks
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                      <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Lists
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                Profile
              </Button>
              <Button
                outlined
                startIcon={
                  <svg viewBox="0 0 24 24" className={classes.leftPaneIcons}>
                    <g>
                      <path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"></path>
                      <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                    </g>
                  </svg>
                }
                classes={{ root: classes.homeButton }}
              >
                More
              </Button>
            </Grid>
            <Grid item xs className={classes.centerPane}>
              <Box p={2} classes={{ root: classes.pageTitle }}>
                <Grid container>
                  <Typography>Notifications</Typography>
                  {/*<IconButton>
                    <Home />
                  </IconButton>*/}
                </Grid>
              </Box>
              <div className={classes.tabs}>
                <AppBar
                  position="static"
                  color="default"
                  classes={{ positionStatic: classes.appBar }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Mentions" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <Box p={1} paddingRight={0} className={classes.tweetBox}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Avatar
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            className={classes.profilePic}
                          />
                        </Grid>
                        <Grid item xs>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Typography variant="body2">
                                Milad Hazrati
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                classes={{ root: classes.userID }}
                              >
                                @MiladHazrati75
                              </Typography>
                            </Grid>
                          </Grid>
                          <Typography
                            classes={{ root: classes.tweet }}
                            variant="body2"
                          >
                            Seen some of this flying around, to imply that
                            Biden's post-VP money haul must have been
                            Hunter-related. But these are Biden's own tax
                            records, which report the $$$ he made from his
                            speeches and 2017 book about Beau.
                          </Typography>
                          <Box paddingTop={1}>
                            <Grid container xs={12}>
                              <Grid item xs={10}>
                                <Grid container justify="space-between">
                                  <Grid item>
                                    <Grid container spacing={1}>
                                      <Grid item>
                                        <svg
                                          viewBox="0 0 24 24"
                                          className={classes.tweetAction}
                                        >
                                          <g>
                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                          </g>
                                        </svg>
                                      </Grid>
                                      <Grid item>s</Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <Grid container spacing={1}>
                                      <Grid item>
                                        <svg
                                          viewBox="0 0 24 24"
                                          className={classes.tweetAction}
                                        >
                                          <g>
                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                          </g>
                                        </svg>
                                      </Grid>
                                      <Grid item>s</Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <Grid container spacing={1}>
                                      <svg
                                        viewBox="0 0 24 24"
                                        className={classes.tweetAction}
                                      >
                                        <g>
                                          <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                        </g>
                                      </svg>
                                      <Grid item>s</Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <Grid container spacing={1}>
                                      <Grid item>
                                        <svg
                                          viewBox="0 0 24 24"
                                          className={classes.tweetAction}
                                        >
                                          <g>
                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                          </g>
                                        </svg>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={2}></Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                  </TabPanel>
                </SwipeableViews>
              </div>
            </Grid>
            <Grid item xs={3}>
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
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
