import * as React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from "react-router-dom";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Grid from '@mui/material/Grid';
import NavigationIcon from '@mui/icons-material/Navigation';
import { IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const drawerWidth = 280;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function BackToTop(props) {
  let history = useHistory();
  function handleClickLogo(){
    history.push("/")}
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <React.Fragment>
      <AppBar sx={{ paddingTop:1, paddingBottom:1, paddingLeft:5, paddingRight:5, bgcolor: "#FFFFFF" }} >
      
        <Grid container 
          direction="row" 
          justifyContent={isSmallScreen ? "center" : "flex-center"} 
          alignItems="center"
          sx={{ cursor: 'pointer' }}
        >

            <img src='/assets/images/logo.png'
              width={"60px"} 
              alt="logo" 
              onClick={handleClickLogo} />
            <img src='/assets/images/logo2.png'
              width={"160px"} 
              alt="logo" 
              style={{paddingLeft:5}}
              onClick={handleClickLogo} />
        </Grid>

      </AppBar>
      {
        !props.isDashBoardPage &&
        <React.Fragment>
          <Toolbar id="back-to-top-anchor" />
          <ScrollTop {...props}>
          <IconButton sx={{ borderRadius: '50%', backgroundColor:'#f2eeed' }}>
            <NavigationIcon />
          </IconButton>
          </ScrollTop>
        </React.Fragment>
      }
    </React.Fragment>
  );
}

BackToTop.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  isDashBoardPage: PropTypes.bool,
}