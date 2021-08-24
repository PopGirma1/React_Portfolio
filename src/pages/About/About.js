import {
    withStyles,
    Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import FeedBack from "./FeedBack";
import Avatar from "@material-ui/core/Avatar";
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const useStyles = (theme) => ({

    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
    ,
    root: {
        display: "grid",
        margin: "2em",
        gridTemplateColumns: "5fr 2fr",
        gridColumnGap: "80px",
    },

    paragraphStyling: {
        lineHeight: "1.5",
        padding: "20px",
        margin: "20px",
        textTransform: "full-width",
        fontFamily: "Times New Roman",
        boxSizing: "border-box",
    },


    Developers:{
        display: "flex",
        margin: "3em",
        gridTemplateColumns: "13fr 13fr",
        gridColumnGap: "280px",
    },
    large:{
        width: '100px',
        height: "100px",
    }

});
class About extends Component {
    onSubmit = (email, feedback) => {
        console.log(email, feedback);
    };

    render() {
        const { classes } = this.props;
        return (
            <div  id={'container'}>
                <div className={classes.root}>
                    <div style={{ background: "#eee" }}>
                        <div
                            className="aboutContent"
                            style={{ textAlign: "center", margin: "2em " }}>
                            <Typography variant="h4">Best Films </Typography>
                            <Typography
                                variant="h6"
                                style={{ margin: "2em", lineHeight: "1.5" }}
                                className={classes.paragraphStyling}>
                                Before getting into the details of specific movie websites and discussing current trends,
                                it’s important first to consider the primary purpose of movie websites. Obviously,
                                in order for a movie to be financially successful, it needs to do well at the box office,
                                and today many moviegoers use the Internet to find movies to see and to buy tickets.
                                Having things like trailers and other video clips helps to engage visitors and encourages them to find show times and buy tickets online.
                            </Typography>
                        </div>
                    </div>
                    <div className="feedback">
                        <FeedBack onSubmit={this.onSubmit} />
                    </div>
                </div>
                <Typography variant="h4">Developers : </Typography>
                <div className={classes.Developers}>
                    <div>
                        <Typography variant="h6">Girmay</Typography>
                        <Avatar alt="Remy Sharp" src="/asset/Img/wow.jpg" className={classes.large}/>
                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                            Software Engineer
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Kalab </Typography>
                        <Avatar alt="Remy Sharp" src="/asset/Img/kalab.jpg" className={classes.large}/>
                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                            Software Engineer
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" >Desalegn </Typography>
                        <Avatar alt="Remy Sharp" src="/asset/Img/cmd.jpg"  className={classes.large}/>
                        <Typography
                            variant="h6"
                            style={{ margin: "2em", lineHeight: "1.5" }}
                            className={classes.paragraphStyling}>
                            Software Engineer
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(About);
