import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { Box, Grid, IconButton, ListItemText, List, ListItem, Divider, Drawer,  ListItemButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    palette: {
      lb: '#8ecae6'
      ,nb: '#219ebc'
      ,db: '#023047'
      ,lo: '#ffb703'
      ,no: '#fb8500'
      ,mode: 'dark'
    },
  },
});

function NavBar(props) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Grid container spaxing={2} align="center" sx={{padding: 2}}>
        <Grid item xs={6} >
        <IconButton component="a" href="./signin">
        <AccountCircleIcon fontSize="large"/>
      </IconButton>
          </Grid>
        <Grid item  xs={6} >
        <IconButton >
        <DarkModeIcon fontSize="large"/>
      </IconButton>
          </Grid>
        </Grid>
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          <ListItem >
            <ListItemButton component="a" href="./signin">
              <ListItemText align="center" primary="마이페이지" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" onClick={()=>navigate('/BoardList')} >
              <ListItemText align="center" primary="자유게시판" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="./signin">
              <ListItemText align="center" primary="홍보게시판" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    </Box>
  );

  return (
    <div >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor} >
          <Grid container justifyContent="flex-end"  position="fixed">
          <IconButton aria-label="menu"  position="fixed" onClick={toggleDrawer(anchor, true)}>
          <MenuIcon fontSize="large"/>
        </IconButton>
      </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavBar;