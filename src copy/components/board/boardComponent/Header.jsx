import React, { useEffect } from 'react'
import axios from 'axios'

function Header() {

  useEffect(() => {
    axios.get('/api/testGet').then((res) => {
      console.log(res)
    })
  })

  return (
    <div></div>
  )
}

export default Header
