import React, { useState, useEffect } from 'react'
import {
    Box,
    Divider,
    List,
    Stack,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material'
import BoardCommentWrite from '../../components/board/BoardCommentWrite'
import sampleComment from './table/sampleComment.json'

function BoardCommentList( props ) {

  const boardNum = props.boardNum
  const [commentNum , setCommentNum] = useState([])
  const [boardComment, setBoardCommnet] = useState([{
    bc_no : 0,
    b_no : 0,
    bc_content : "",
    bc_date : "",
    bc_writer : ""
  }])

  // const commentLoad = () => {
  //   if(sampleComment.data.map(values => (values.b_no)) === boardNum) {
  //     setCommentNum(sampleComment.data)
  //   } else {
  //     setCommentNum([])
  //     console.log(sampleComment.data)
  //   }
  //   console.log(commentNum)
  // }

  

  useEffect(() => {
    setBoardCommnet(sampleComment.data)
    // console.log(boardNum)
    // console.log(boardComment)
  }, [boardComment])

  return (
    <>
      <Box
      sx={{
        width : '80vw'
      }}
      >
      <Stack
      alignItems={'center'}
      direction={'row'}>
      <h3>전체댓글</h3>
      <Box
      marginLeft={'10px'}
      >
      <BoardCommentWrite />
      </Box>
      </Stack>
      <Box
      sx={{
        marginTop : '-6px',
        width : '70vw',
        height : '300px',
      }}
      >
        <Divider 
        sx={{        
        borderColor : '#00B4D8',
        color : 'black'}}
        />
        {boardComment.map(element => (
        <List key={element.bc_no} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
        sx={{
          marginTop : '-6px'
          }}
          primary={`${element.bc_writer} / ${element.bc_date}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                fontSize={'16px'}
                variant="body2"
                color="text.primary"
              >
                {element.bc_content} <br/>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider
      sx={{
        width : '68vw',
        marginLeft : '12px',
        borderColor : '#FF9E00'
      }}
      variant="inset" 
      component="li" />
      </List>
      ))}
      </Box>
      </Box>
      <>
      </>
      </>
  )
}

export default BoardCommentList;