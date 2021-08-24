import React, {useEffect, useRef, useState} from 'react'

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import {Sortby} from "./Sortby";
import MovieCard from "./MovieCard";
import {TheMoviedbApi} from "../../services/api";

export const MainBody = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const order = useRef(true);


    useEffect(() => {
        async function fetchMovie() {
            const {data} = await TheMoviedbApi.get('/movie/top_rated?', {params: {page: page}});

            /*
            * if order is true(Descending) use default sort array, for page 1 - 25,
            * if order is false(Ascending) use reverse sort array, for page 25 - 1
            * */
            if (order.current && page < 26) {
                setMovies(prvMovies => [...prvMovies, ...data.results])
            } else if (!order.current && page > 0) {
                setMovies(prvMovies => [...prvMovies, ...data.results.reverse()]);
            } else {
                document.removeEventListener('scroll', trackScrolling);
            }

        }

        fetchMovie()

    }, [page, setPage,]);


    useEffect(() => {
        /*add event listener for the scroll*/
        document.addEventListener('scroll', trackScrolling);
        return (() => {
            document.removeEventListener('scroll', trackScrolling);
        })
    }, []);


    /*Call back function for the sort by*/
    const sortByChange = (sortby) => {
        /*
        *  top 500 movies in TMDB;
        *  There are 20 movies per page;
        *  the default sort is Descending;
        * for the Descending part, begin from page 1 with default sort.
        * for the Ascending part, 500 / 20 = 25, begin from the last page(page 25) with reverse sort.
        * */

        // check if order is changed
        if (Boolean(sortby) !== order.current) {
            let currentNumber = sortby === 1 ? 1 : 25;
            order.current = !order.current;
            setMovies([]); // reset the current movie array
            setPage(parseInt(currentNumber));
        }

    };

    const trackScrolling = () => {
        const wrappedElement = document.getElementById('container');
        if (wrappedElement.getBoundingClientRect().bottom <= window.innerHeight) {
            //Container bottom reached' ==> end screen reached

            /*
            * for Ascending order, count down, page - 1
            * for Descending order, count up, page + 1
            * */
            if (order.current) {
                setPage(page => parseInt(page) + 1);
            } else {
                setPage(page => parseInt(page) - 1);
            }
        }

    };


    return (
        <Container mt={5} id='container'>

            {/* Sort by begin*/}
            <Box display='flex' justifyContent="flex-end" mb={1}>
                <Sortby component={Paper} sortbyChange={sortByChange}/>
            </Box>
            {/* Sort by end*/}


            {/*content Body begin*/}
            <Grid container spacing={3} elevation={1}>
                {movies.map((movie, index) => {
                    return (
                        /*there are some repeated Ids in the movies array, hence index is used as key for lists*/
                        <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
                            <MovieCard movie={movie}/>
                        </Grid>
                    )
                })}
            </Grid>
            {/*content Body end*/}


        </Container>

    );

};
