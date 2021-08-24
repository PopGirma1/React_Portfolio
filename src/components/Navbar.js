import React from 'react'
import {AppBar, Button, Grid, Link, List, ListItem, Toolbar, Typography, withStyles} from "@material-ui/core/index";

const useStyles = ((theme) => ({
    root: {
        "& ul": {
            padding: '0px',
            margin: '0px',
        },
        "& li": {
            display: 'inline',
            padding: '0px',
            "& a": {
                color: 'black',
                padding: '20px'

            },

            "& a:hover": {
                textDecoration: 'none',

            },

        },
        backgroundColor: '#eee',
        zIndex: theme.zIndex.drawer + 1,
        maxHeight:'170px'
    },


}));

class NavTabs extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <AppBar className={classes.root} position='fixed'>
                <Toolbar>
                    <Grid container >
                        <Grid item sm={3} style={{color:'red'}} >
                            <Typography variant='h4'>Best Rating Star Films Portfolio</Typography>
                            {/*<ReactStars name="size-large" defaultValue={4} size={24}/>*/}
                        </Grid>

                        <Grid item sm={7} align='right'>
                            <List>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/'}>Home</Button> </ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/About'}>About</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/Contact'}>Contact</Button></ListItem>
                                <ListItem><Button  href={process.env.PUBLIC_URL + '/login'}>+ Projects</Button></ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        );
    }

}

export default withStyles(useStyles)(NavTabs);
