import React from 'react'
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
    height : 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>댓글남기기</Button>
        <Modal
          open={open}
          onClose={handleClose}

        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              댓글 남기기
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <TextField
              sx={{
                width : '600px',
                autoComplete : 'false'
              }}
              id="filled-search"
              label="댓글내용"
              type="search"
              variant="filled"
            />
            </Typography>
            <Box
            position={'absolute'}
            right={'30px'}
            bottom={'10px'}
            >
            <Button>확인</Button>
            <Button>취소</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
};

export default BoardCommentWrite;
