import React from 'react';
import { Box, Button, createTheme, Grid, ThemeProvider, Typography, Modal } from '@mui/material';
import FindAcctId from '../../components/lostInfo/FindAcctId';
import FindAcctPw from '../../components/lostInfo/FindAcctPw';


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


function FindAcct(props) {
 return (
<div>
<ThemeProvider theme={theme}>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant='h2' sx={{mt:8}}>
         Hi, Camping
        </Typography>
        <Typography align="center" variant='h6' sx={{mt: 4, mb: 4}}>
            아이디/비밀번호 찾기
        </Typography>
        <Typography align="center" variant='h5' sx={{mt: 4, mb: 4}}>
        찾기 원하는 항목을 선택해주세요.
        </Typography>
        <Grid container spacing={2} sx={{width: 600, mt: 4}}>
          <Grid item xs >
          <Box display="flex" sx={{borderRadius: 16, width: 200, height: 100, bgcolor: "palette.lb",'&:hover': {bgcolor: 'palette.nb'} }} >
          <Box m="auto">
           <FindAcctId />
           </Box>
          </Box>
          </Grid>
          <Grid item >
          <Box display="flex"  sx={{borderRadius: 16, width: 200, height: 100, bgcolor: "palette.lb",'&:hover': {bgcolor: 'palette.nb'} }}>
          <Box m="auto">
          <FindAcctPw />
           </Box>
          </Box>
          </Grid>

          </Grid>
      </Box>    
</ThemeProvider>
</div>
  );
}

export default FindAcct;