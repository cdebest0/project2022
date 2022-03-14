import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';

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

export default function FindAcctPw() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = (event) => {
    const findInfo = new FormData(event.currentTarget);
    console.log({
      id: findInfo.get('id')
      , email: findInfo.get('email')
      , birthdate: findInfo.get('birthdate')
      , fullName: findInfo.get('fullName')
      , mobile: findInfo.get('mobile')
    });
  }

  return (
    <div>
      <Box onClick={handleOpen}>
        <Typography align="center" variant="h5">비밀번호 찾기</Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography align="center" variant="h4">
            비밀번호 찾기
          </Typography>
          <Typography align="center" variant="h6" >
            회원가입시 사용한 정보를 입력해 주세요.
          </Typography>
<Grid container spacing={3} sx={{pt:4}}>
<Grid item xs={12}>
<TextField
  autoFocus
  required
  fullWidth
  id="id"
  label="아이디"
  name="id"
/>
</Grid>
<Grid item xs={12}>
<TextField
  required
  fullWidth
  id="email"
  label="이메일"
  name="email"
/>
</Grid>
<Grid item xs={12}>
<TextField
  required
  fullWidth
  id="birthdate"
  label="생년월일"
  name="birthdate"
/>
</Grid>
<Grid item xs={12}>
<TextField
  name="fullName"
  required
  fullWidth
  id="fullName"
  label="성명"
/>
 </Grid>
<Grid item xs={12}>
<TextField
  name="mobile"
  required
  fullWidth
  id="mobile"
  label="연락처"
/>
 </Grid>
</Grid>

          <Grid container>
          <Grid item xs >
          <Button type="submit" variant="contained"
          sx={{ mt: 3, mb: 2, color: "000",bgcolor:"palette.lo",'&:hover': {bgcolor: 'palette.no'}}}>
          비밀번호 찾기
          </Button>
          </Grid>  
          <Grid item>
          <Button onClick={handleClose} variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor:"palette.lo",'&:hover': {bgcolor: 'palette.no'}}}>
          취소
          </Button>
          </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
