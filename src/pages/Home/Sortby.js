import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import SearchBar from "material-ui-search-bar";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },

    searchBar: {
        height : '40px',
        marginTop : '0px',
        marginLeft:'-20px',
        width:'100%',
        backgroundColor:'red',

    },

}));

export function Sortby({sortbyChange}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const onAscendingClick = (event) => {
        /*return 0 for call back as Ascending*/
        sortbyChange(0);
        handleClose(event)
    };
    const onDescendingClick = (event) => {
        /*return 1 for call back as Descending*/
        sortbyChange(1);
        handleClose(event)
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>

            <div>
                <SearchBar className={classes.searchBar}/>
            </div>

            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <SortIcon/> Sort By
                </Button>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}

                        >
                            <Paper style={{zIndex: '28'}}>

                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={onAscendingClick}>Ascending</MenuItem>
                                        <MenuItem onClick={onDescendingClick}>Descending</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>

                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
