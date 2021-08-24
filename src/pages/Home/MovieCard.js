import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import moment from "moment";

import {getLocalValue, setLocalValue} from "../../services/auth";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        position: 'relative'
    },
    cardContent: props => ({
        padding: '0 10px',
        "&:last-child": {
            paddingBottom: 0
        },
        height: '100px',
        backgroundColor: props.currentColor,
    }),
    cardActions: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        },
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cardMedia: {
        minHeight: '300px',
        '@media (max-width:600px)': {
            height: '500px'
        }
    },
    movieRating: {
        position: 'absolute',
        bottom: 50,
        right: 15,
    },
    movieTitle: {
        lineHeight: '17px',
        paddingBottom: '5px',
        paddingTop: '5px',
    },
});

export default function MovieCard({movie}) {

    const [isClicked, setIsClicked] = useState(false);

    /*
    * change background of the row when a star is clicked
    * pass currentColor as props to useStyles
    * */
    let currentColor = isClicked ? 'rgba(213,255,209,0.99)' : 'rgba(238,238,238,0.11)';
    const classes = useStyles({currentColor});

    useEffect(() => {
        setIsClicked(getLocalValue(movie.id))
    }, [movie.id]);

    const onStarClick = (id) => {
        setLocalValue(id);
        setIsClicked(!isClicked);
    };

    return (
        <Card className={classes.root} key={movie.id}>

            <CardActionArea href={`https://www.themoviedb.org/movie/${movie.id}`}>
                <CardMedia
                    component="img"
                    alt={movie.title}
                    height='300px'
                    image={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    className={classes.cardMedia}

                />
                <CardContent className={classes.cardContent}>
                    <Box>
                        <Typography gutterBottom variant="body1" component="h6" className={classes.movieTitle}>
                            {movie.title}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.movieRating}>
                        {movie.vote_average}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {moment(movie.release_date).format('DD MMM YYYY')}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Box className={classes.cardActions} display='flex' justifyContent="flex-end">
                <Button variant='text' size="small" color="primary" p={0} display='flex' justifyContent="flex-end"
                        onClick={() => onStarClick(movie.id)}>

                    {/* yellow(#fff333) if icon is checked, default if no checked. */}
                    {isClicked ? <StarIcon style={{color: '#fff333'}}/> : <StarIcon color='action'/>}

                </Button>
            </Box>
        </Card>
    );
}

