import React from 'react'

export default function Footer() {

  let footerStyle = {
    position: "relative",
    width: "100%",
    bottom: "0",
    border: "2px solid gray"

  }
  return (
    <footer className='bg-dark text-light my-3' style={footerStyle}>
      <p className='text-center'> Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
