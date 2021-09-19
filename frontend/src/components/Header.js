import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },

    navBar: {
        // marginRight: "50px",
        marginLeft: "50px"
    },

    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "blue",
          borderBottom: "1px solid white",}
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" color="primary">
                    Imhotech
                </Typography>

                <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/exam" className={classes.link}>
              Exam
            </Link>
            <Link to="/view" className={classes.link}>
              View
            </Link>

                {/* <Grid container
                    alignItems="center">
                    <Grid item>
                        <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid> */}
            </Toolbar>
        </AppBar>
    )
}
