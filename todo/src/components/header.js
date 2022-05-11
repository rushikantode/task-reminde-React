
import React from 'react'
import Button from './button'

const Header = (props)=>{

  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>Hello {props.title}</h1>
      <Button color='green' text='Hello' onClick={onClick} />
      <Button color='yellow' text = 'Details' />
      
    </header>
    
  )
}


Header.defaultProps = {
  title: 'Task Manager',
}


export default Header