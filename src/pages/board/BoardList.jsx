import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
          Container, 
          Box,
          Button,
          Stack
        } from '@mui/material'

import BoardTable from '../../components/board/table/BoardTable'
import Search from '../../components/board/table/Search'
import BtnGroup from '../../components/board/boardComponent/BtnGroup'

function BoardList() {

  // const navigate = useNavigate();
  // onClick={navigate('/Home')}
  return (
    <Container
      className='container'
      maxWidth="lg">
    <Box>
    {/* ------------------- Header Start------------------------*/}
    <Box
      className='boardHeader'
      sx={{
        height: '7vh',
      }}>
    <div><h2>Hi Camping</h2></div>
    </Box>
    {/* ------------------- Header End ------------------------*/}

    {/* ------------------- Body Start ------------------------*/}

    <Box
      className='boardBody'
    >
      <Box
      marginLeft={'20px'}
      sx={{
        display: 'flex'
      }}
      >
        <Stack
        alignItems={'center'}
        direction={'row'}>
        <h2>자유게시판</h2>
        <Box
        >
          <BtnGroup />
        </Box>
        <Box
          marginLeft={'400px'}

        >
        <Search />
        </Box>
        </Stack>
      </Box>
    <BoardTable />
    </Box>

    {/* ------------------- Body End ------------------------*/}
    
    </Box>
    </Container>
  )
}

export default BoardList;