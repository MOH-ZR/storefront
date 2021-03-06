import React from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';
import { useSelector } from 'react-redux';

function Header() {

  const cartItemsCount = useSelector(state => state.cartReducer.length)
  return (
    <div className="headerContainer" position="static">
      <header className="header">
        <Typography
          variant="h6"
          // className={classes.title}
        >
          TheWeirdStore
        </Typography>
        <Button ml="auto" color="inherit">Cart ({cartItemsCount})</Button>
      </header>
    </div>
  );
}

export default Header;
