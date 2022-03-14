import React from 'react';
import { Box, Card, CardContent, CardMedia, createTheme, Divider, Grid, Link, List, ListItem, ListItemButton, ListItemText, ThemeProvider, Typography } from '@mui/material';
import Footer from '../components/main/Footer';
import ImgCarousel from '../components/main/ImgCarousel';


const theme = createTheme({
  palette: {
    palette: {
      lb: '#8ecae6'
      ,nb: '#219ebc'
      ,db: '#023047'
      ,lo: '#ffb703'
      ,no: '#fb8500',
    },
  },
});

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Box>
        <Typography align="left" variant="h2" gutterBottom sx={{ mb:4, ml:4}}>
          <br/>Hi, Camping
        </Typography>
      </Box>
      {/* <ImgCarousel /> */}
       <Card variant="none" sx={{ pb:10 }}>
          <Typography variant="h1" align="left" sx={{position: 'absolute', color: 'palette.lb', mt: 10, ml:5}}>
          캠핑,<br/>
          나만의 자연을 찾다
            </Typography>
          <CardMedia
            component="img"
            height="500"
            image="/src/images/home.jpg"
            alt="The picture of two people camping"
            sx={{bgcolor:'palette.no'}}
          />
          </Card> 
          <Grid container spacing={2} sx={{ pt:10, pr:7, pb:20,pl:7}}>
          <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3" align="left" sx={{color: 'palette.nb', ml: 8}}>
          Best<br/>
          Camping place
          </Typography>
        </Grid>
        <Grid item xs={2}>
        <Card >
          <CardMedia
            component="img"
            height="200"
            image="/src/images/home.jpg"
            alt="Camping2"
            sx={{bgcolor:'palette.lb','&:hover': { transform: "scale3d(1.05, 1.05, 1)" }}}
          />
          </Card> 
        </Grid>

        <Grid item xs={2}>
        <Card >
          <CardMedia
            component="img"
            height="200"
            image="/src/img/home.jpg"
            alt="Camping2"
            sx={{bgcolor:'palette.lb', }}
          />
          </Card> 
        </Grid>
        <Grid item xs={2} >
        <Card >
          <CardMedia
            component="img"
            height="200"
            image="/src/images/home.jpg"
            alt="Camping3"
            sx={{bgcolor:'palette.lb'}}
          />
          </Card> 
        </Grid>
    </Grid>
    
<Grid container spacing={4} sx={{ pt:10, pr:7, pb:15,pl:7, bgcolor:'palette.lo'}} >     
  <Grid item xs={6} >
    <Card variant="outlined" sx={{padding: 2}}>
      <CardContent >
      <Typography variant="h4" align="center" sx={{pb: 2}}>
          Best Place
        </Typography>
        <Divider />
        <List sx={{pt: 2}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="./">
              <ListItemText primary="[단양] 소선암 오토 캠핑장 ★★★★☆" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="./">
              <ListItemText primary="[홍천] 보리울 캠핑장 ★★★★☆" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="./">
              <ListItemText primary="[충주] 수주팔봉 캠핑장 ★★★★☆" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ display: 'flex',
          flexDirection: 'row-reverse', pt:2}}>
        <Link href="./freeboard" > 더 많은 캠핑장 보기 </Link>
      </Box>
      </CardContent>
    </Card>
    </Grid>      
    <Grid item xs={6}>
    <Card variant="outlined" sx={{padding: 2}}>
      <CardContent>
      <Typography variant="h4" align="center" sx={{pb: 2}}>
          Best Posting
        </Typography>
        <Divider />
        <List sx={{pt: 2}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="./">
              <ListItemText primary="꼭 가세요 두 번 가세요! [221] 🎦" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="./">
              <ListItemText primary="전기사용이 안돼서 고... [189]" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="./">
              <ListItemText primary="좋았어요! [128]" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ display: 'flex',
          flexDirection: 'row-reverse', pt:2}}>
        <Link href="./freeboard" > 더 많은 게시글 보기 </Link>
      </Box>

      </CardContent>
    </Card>
    </Grid> 
</Grid>
<Footer />
      </ThemeProvider>
    </div>
  );
}

export default Home;