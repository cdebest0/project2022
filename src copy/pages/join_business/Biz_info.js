import React, { useRef } from 'react';
import { Button, Box, Typography, TextField, Grid, Modal } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '../../components/main/Footer';


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
/* 모달창 스타일 */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Biz_info() {
  // form과 submit이용하는 경우
  // const handleSubmit = (event) => {
  //   const signInData = new FormData(event.currentTarget);
  //   console.log({
  //     id: signInData.get('id')
  //     , pw: signInData.get('pw')
  //     , biznum: signInData.get('biznum')
  //     , bizname: signInData.get('bizname')
  //     , bizowner: signInData.get('bizowner')
  //     , mobile: signInData.get('mobile')
  //   });
  // }


  /* ref이용해서 데이터 가져오는 경우 */
  const signupId = useRef('') 
  const signupPw = useRef('')
  const signupBiznum = useRef('')
  const signupBizname = useRef('')
  const signupBizowner = useRef('')
  const signupMobile = useRef('')
  const signupEmail = useRef('')
  const sendValue = () => {
     const signupInfo = {
       isignupId: signupId.current.value
       , signupPw: signupPw.current.value
       ,signupBiznum: signupBiznum.current.value
       , signupBizname: signupBizname.current.value
       , signupBizowner: signupBizowner.current.value
       , signupMobile: signupMobile.current.value 
       , signupEmail: signupEmail.current.value 
     }

        return console.log(signupInfo);
    }

  /* 중복확인 모달 이벤트 */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const id= "camper1111";

  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', mb:8}}>
        <Typography variant='h2' sx={{mt:8}}>
           Hi, Camping
        </Typography>
        <Typography variant='h5'>
            사업자 가입하기
        </Typography>

      <Box component="form" 
      // onSubmit={handleSubmit} 
      sx={{mt:4, width: 500}}>
      <Grid container spacing={3} sx={{pt:4}}>
      <Grid item xs={11}>
<TextField
  autoFocus
  required
  fullWidth
  id="signupId"
  label="아이디"
  name="signupId"
  inputRef={signupId}
/>
</Grid>
<Grid item xs={1}>
<Button variant="contained" size="small" onClick={handleOpen}  sx={{bgcolor:"palette.lb",'&:hover': {bgcolor: 'palette.nb'}}}
>중복<br/>확인</Button>
<Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style} component="form" 
    // onSubmit={handleSubmit}
    alignItems="center" justifyContent="center" 
    >
      <Grid container>
      <Grid item xs={11}>
      <Typography align="center" variant="h5">
        {id}
      </Typography>
      <Typography align="center" variant="h5" sx={{mt:2}}>
        사용이 가능한 아이디입니다.
      </Typography>
        </Grid>  
        <Grid item xs={11} align="center">
      <Button onClick={handleClose} variant="contained"
      sx={{ mt: 3, mb: 2, bgcolor:"palette.lo",'&:hover': {bgcolor: 'palette.no'}}}>
      확인
      </Button>
          </Grid>
      </Grid>
    </Box>
  </Modal>
</Grid>  
<Grid item xs={11}>
<TextField
  required
  fullWidth
  type="password"
  id="signupPw"
  label="비밀번호"
  name="signupPw"
  inputRef={signupPw}
/>

</Grid>
<Grid item xs={11}>
<TextField
  required
  fullWidth
  type="password"
  id="signupPwCk"
  label="비밀번호 확인"
  name="signupPwCk"
/>
</Grid>
<Grid item xs={11}>
<TextField
  required
  fullWidth
  id="signupBiznum"
  label="사업자번호"
  name="signupBiznum"
  inputRef={signupBiznum}
  
/>
</Grid>
<Grid item xs={11}>
<TextField
  required
  fullWidth
  id="signupBizname"
  label="사업장명"
  name="signupBizname"
  inputRef ={signupBizname}
/>
</Grid>
<Grid item xs={11}>
<TextField
  required
  fullWidth
  id="signupBizowner"
  label="사업자명"
  name="signupBizowner"
  inputRef={signupBizowner}
  
/>
</Grid>
<Grid item xs={11}>
<TextField
  required
  fullWidth
  id="signupMobile"
  label="연락처"
  name="signupMobile"
  inputRef={signupMobile}
/>
</Grid>
<Grid item xs={11}>
<TextField
  required
  fullWidth
  id="signupEmail"
  label="이메일"
  name="signupEmail"
  inputRef={signupEmail}
/>
</Grid>
<Grid item xs={11}>
<Button fullWidth type="submit" variant="contained" onClick={sendValue}
sx={{ color: "000",bgcolor:"palette.lo",'&:hover': {bgcolor: 'palette.no'}}}>
가입하기
</Button>
  </Grid>
</Grid>
</Box>
</Box>
<Footer />    
</ThemeProvider>
</div>
  );
}

export default Biz_info;