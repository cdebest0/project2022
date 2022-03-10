import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  Button,
          } from '@mui/material'

function Home() {

  const navigate = useNavigate();

  const boardClick = () => {
    navigate('/BoardList')
  }

  return (

    <div>
      <h1>Main Page</h1>
      <Button
      variant='contained'
      color='primary'
      onClick={boardClick}
      >게시판 이동
      </Button>
    </div>

  )
}

export default Home;