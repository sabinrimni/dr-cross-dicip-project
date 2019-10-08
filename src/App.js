import React from 'react'
import Container from '@material-ui/core/Container'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <>
      <NavBar auth='true' />
      <Container maxWidth="sm">
        <p>Hello World!</p>
      </Container>
    </>
  )
}

export default App
