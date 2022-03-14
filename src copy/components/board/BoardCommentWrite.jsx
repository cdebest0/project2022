import React, { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField
} from '@mui/material'

function BoardCommentWrite() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height : 220,
    bgcolor: 'background.paper',
    border: '2px solid #0096C7',
    boxShadow: 24,
    p: 4,
  };
  
    const [commnetInput, setCommentInput] = useState('')
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleInputChange = (e) => {
      setCommentInput(e.target.value)
    }
    const handleSubmit = () => {
      //axios
      if(commnetInput === '') {
        alert('입력된 값이 없습니다.')
      }else {
        console.log("input : " + commnetInput)
        handleClose()
        setCommentInput('')
      }
    }
    return (
      <div>
        <Button 
        variant='outlined'

        onClick={handleOpen}>댓글쓰기</Button>
        <Modal
          open={open}
          onClose={handleClose}

        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              댓글 쓰기
            </Typography>
            <Typography sx={{ mt: 3 }}>
            <TextField
            autoComplete="false"
              sx={{
                width : '600px'
              }}
              multiline
              rows={4}
              id="filled-search"
              name='commentInput'
              label="댓글내용"
              variant="outlined"
              onChange={handleInputChange}
            />
            </Typography>
            <Box
            position={'absolute'}
            right={'20px'}
            bottom={'15px'}
            >
            <Button onClick={handleSubmit}>확인</Button>
            <Button onClick={handleClose}>취소</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
};

export default BoardCommentWrite;
