import React from 'react'

const styles = {
  height: '100px',
  width: '100px',
  borderRadius: '100%',
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const CircleButton = props => {
  const { text } = props

  return <div style={styles}>{text}</div>
}

export default CircleButton
