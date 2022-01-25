import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{background: '#f79cf6'}}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.titleSite}>
          Advisorella
        </Typography>
        <Box display="flex">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="...מה לחפש" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
          <Typography variant="h6" className={classes.title}>
            ?מה אנחנו מחפשים היום
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
