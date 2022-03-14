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
    </Box>
    {/* ------------------- Header End ------------------------*/}

    {/* ------------------- Body Start ------------------------*/}

    <Box
      className='boardBody'
    >
          <Stack
          marginLeft={'20px'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          >
        <Box display={'flex'}>
        <h2>자유게시판</h2>
          <BtnGroup />
        </Box>
        <Search />
        </Stack>
      </Box>
    <BoardTable />
    </Box>

    {/* ------------------- Body End ------------------------*/}
    </Container>
  )
}

export default BoardList;