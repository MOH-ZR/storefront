import React from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';

function Header() {
  return (
    <div className="headerContainer" position="static">
      <header className="header">
        <Typography
          variant="h6"
          // className={classes.title}
        >
          TheWeirdStore
        </Typography>
        <Button ml="auto" color="inherit">Cart (0)</Button>
      </header>
    </div>
  );
}

export default Header;
