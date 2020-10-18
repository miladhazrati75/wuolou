import React from "react";
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
    height: "500px",
    position: "relative",
    // backgroundImage: "url(http://localhost:3000/static/aa.jpg)",
    borderBottom: "solid 10px grey",
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
    width: "1.5em",
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
          <Grid container>
            <Grid item xs={2}></Grid>
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
            <Grid item xs={4} className={classes.centerPane}>
              <Box p={2} classes={{ root: classes.pageTitle }}>
                <Grid container>
                  <Typography>Profile</Typography>
                  {/*<IconButton>
                    <Home />
                  </IconButton>*/}
                </Grid>
              </Box>
              <Box className={classes.profileBox}>
                <div className={classes.profileHeader}></div>
                <Avatar
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  className={classes.profilePhoto}
                />
                <Box m={3}>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Button outlined classes={{ root: classes.tweetButton }}>
                        Edit Profile
                      </Button>
                    </Grid>
                  </Grid>
                  <Box m={1}>
                    <Typography variant="h6">Milad Hazrati</Typography>
                    <Typography
                      variant="body2"
                      classes={{ root: classes.userID }}
                    >
                      @MiladHazrati75
                    </Typography>
                  </Box>
                  <Box m={1}>
                    <Typography variant="caption">
                      23 | Researcher @UBCERT , Technical Writer @Ravro_ir
                      Enthusiastic about CyberSecurity, Technology, Politics and
                      Entrepreneurship.
                    </Typography>
                  </Box>
                  <Box m={1}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <svg
                              viewBox="0 0 24 24"
                              className={classes.profileIcons}
                            >
                              <g>
                                <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
                                <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
                              </g>
                            </svg>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              Islamic Republic of Iran
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <svg
                              viewBox="0 0 24 24"
                              className={classes.profileIcons}
                            >
                              <g>
                                <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                                <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                              </g>
                            </svg>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              profile.ir/MiladHazrati
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <svg
                              viewBox="0 0 24 24"
                              className={classes.profileIcons}
                            >
                              <g>
                                <path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path>
                                <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path>
                              </g>
                            </svg>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              Born October 26, 1996
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <svg
                              viewBox="0 0 24 24"
                              className={classes.profileIcons}
                            >
                              <g>
                                <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                                <circle cx="7.032" cy="8.75" r="1.285"></circle>
                                <circle
                                  cx="7.032"
                                  cy="13.156"
                                  r="1.285"
                                ></circle>
                                <circle
                                  cx="16.968"
                                  cy="8.75"
                                  r="1.285"
                                ></circle>
                                <circle
                                  cx="16.968"
                                  cy="13.156"
                                  r="1.285"
                                ></circle>
                                <circle cx="12" cy="8.75" r="1.285"></circle>
                                <circle cx="12" cy="13.156" r="1.285"></circle>
                                <circle
                                  cx="7.032"
                                  cy="17.486"
                                  r="1.285"
                                ></circle>
                                <circle cx="12" cy="17.486" r="1.285"></circle>
                              </g>
                            </svg>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              Joined January 2013
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box m={1}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Typography variant="caption">11</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">Following</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Typography variant="caption">11</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">Followers</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              <Box p={2} paddingRight={0} className={classes.tweetBox}>
                <Grid container xs={12} spacing={1}>
                  <Grid item xs={2}>
                    <Avatar
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                      className={classes.profilePic}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography variant="body2">Milad Hazrati</Typography>
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
                      Seen some of this flying around, to imply that Biden's
                      post-VP money haul must have been Hunter-related. But
                      these are Biden's own tax records, which report the $$$ he
                      made from his speeches and 2017 book about Beau.
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
