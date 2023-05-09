import React from 'react';

import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <BottomNavigation showLabels sx={{ marginTop:"7%", alignItems: "center" }} >
      <BottomNavigationAction icon={<CopyrightIcon />} />
      <BottomNavigationAction 
        onClick={()=> window.open('https://twitter.com/aissam_out', '_blank')} 
        sx={{ ":hover":{color:'#00acee'} }} 
        icon={<TwitterIcon />} />
      <BottomNavigationAction 
        onClick={()=> window.open('https://www.linkedin.com/in/aissam-outchakoucht/', '_blank')} 
        sx={{ ":hover":{color:'#0072b1'} }} 
        icon={<LinkedInIcon />} />
    </BottomNavigation>
  )
};

export default Footer;
