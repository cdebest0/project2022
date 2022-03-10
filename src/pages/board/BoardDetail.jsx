import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import sampleData from '../../components/board/table/sampleData.json'
import BoardCommentList from '../../components/board/BoardCommentList'
import BoardCommentWrite from '../../components/board/BoardCommentWrite'
import {
  Box,
  Divider,
  Stack,
  Chip
} from '@mui/material'

function BoardDetail() {
  const location = useLocation();
  const { 
    boardNumber,
    boardTitle,
    boradContent,
    boardDate,
    boardView,
    boardCategory
  } = location.state

  const [boardData, setBoardData] = useState([{
    b_no : "",
    b_category : "",
    b_content : "",
    b_date : "",
    b_title : "",
    b_view : 0,
  }])

  useEffect(() => {
    setBoardData(sampleData.data)
    // console.log(boardData)
  })


  return (
    <div>
    <Box
      className='boardHeader'
      sx={{
        height: '7vh',
      }}>
    <div><h2>Hi Camping</h2></div>
    </Box>
    <h2>자유게시판</h2>
    <Divider variant="inset"
      sx={{
        marginLeft : '-0px',
        marginTop : '-18px',
        width : '96vw'
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
        marginTop : '-40px',
        padding : '10px'
      }}
      direction={'row'}>
      <h4>캠린이123</h4>
      <Divider
        orientation='vertical'
        flexItem
        sx={{
          marginLeft : '15px',
          marginTop : '23px',
          height : '20px'
        }}
        />
        <Box
        marginLeft={'15px'}
        >
      <h4>{boardDate}</h4>
      </Box>
      <Stack 
      marginLeft={'72vw'}
      direction={'row'}>
        <h4>조회수 { boardView }</h4>
      </Stack>
      </Stack>
      <Divider variant="inset"
      sx={{
        marginLeft : '-0px',
        marginTop : '-18px',
        width : '96vw'
      }}
      />
      <Box
      width={'50vw'}
      marginBottom={'20vh'}
      >
      <h4>{boradContent}</h4>
      </Box>
      {/* {boardData.map(row =>
        <h3 key={row.b_no}>{row.b_title}</h3>
      )} */}
    <BoardCommentWrite />
    <BoardCommentList />
    </Box>
    </div>
  )
};

export default BoardDetail;
