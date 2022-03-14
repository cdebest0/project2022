import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BoardCommentList from '../../components/board/BoardCommentList'
import {
  Box,
  Divider,
  Stack,
  Chip,
  Button,
  Container
} from '@mui/material'
import Header from '../../components/board/boardComponent/Header';

function BoardDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    boardNumber,
    boardTitle,
    boradContent,
    boardDate,
    boardView,
    boardCategory,
    boardWriter
  } = location.state

  // const [boardData, setBoardData] = useState([{
  //   b_no : "",
  //   b_category : "",
  //   b_content : "",
  //   b_date : "",
  //   b_title : "",
  //   b_view : 0,
  // }])

  // useEffect(() => {
  //   setBoardData(sampleData.data)
  //   // console.log(boardData)
  // })

  return (
      <Container
      sx={{
        width : '90vw'
      }}
      maxWidth="lg">
    <Box
      className='boardHeader'
      sx={{
        height: '7vh',
      }}>
    {/* <h2>Hi Camping</h2> */}
    </Box>
    <h2>자유게시판</h2>
    <Header />
    <Divider variant="inset"
      sx={{
        marginLeft : '-0px',
        marginTop : '-8px',
        width : '70vw',
        borderColor : '#00B4D8'
      }}
      />
      <Box
      marginTop={'-6px'}
      >
      {/* <h4>글번호 : { boardNumber }</h4> */}
      <Stack 
      alignItems={'center'}
      direction={'row'}>
      <Chip
      sx={{
        color : 'white'
      }}
      color='primary'
      label={boardCategory}/>
      <Box
      marginLeft={'5px'}
      >
      <h3>{boardTitle}</h3>
      </Box>
      </Stack>
      <Stack
      sx={{
        width : '68vw',
        marginTop : '-40px',
        padding : '10px'
      }}
      justifyContent={'space-between'}
      direction={'row'}>
        <Stack 
        divider={<Divider
          sx={{
          marginLeft : '15px',
          marginTop : '23px',
          height : '20px'
          }}
          orientation='vertical' 
          flexItem/>}
        direction={'row'}>
      <Box>
      <h4>{boardWriter}</h4>
      </Box>
      
        <Box
        marginLeft={'15px'}
        >
      <h4>{boardDate}</h4>
      </Box>
      </Stack>
      <Stack direction={'row'}>
      <Box>
        <h5>조회수 { boardView }</h5>
      </Box>
      <Box marginLeft={'10px'}>
        <h5>댓글 {2}</h5>
      </Box>
      </Stack>
      </Stack>
      <Divider variant="inset"
      sx={{
        marginLeft : '0px',
        marginTop : '-18px',
        width : '70vw',
        borderColor : '#00B4D8'
      }}
      />
      <Box
      padding={'10px'}
      width={'70vw'}
      marginBottom={'15vh'}
      >
      <h4>{boradContent}</h4>
      </Box>
      {/* {boardData.map(row =>
        <h3 key={row.b_no}>{row.b_title}</h3>
      )} */}
      <Stack
      sx={{
        width : '70vw'
      }}
      justifyContent={'space-between'}
      direction={'row'}>
      <Box></Box>
      <Box 
      top={'50px'}
      position={'relative'}>
      <Button onClick={() => navigate(-1)}>목록으로</Button>
    </Box>
    </Stack>
    <BoardCommentList boardNum={boardNumber} />


    </Box>
    </Container>
  )
};

export default BoardDetail;
