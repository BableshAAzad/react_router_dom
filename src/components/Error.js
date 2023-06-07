import React from 'react'

export default function Error() {
    let errBox = {
        padding: '10px',
        margin: '20px',
        textAlign: 'center'
    }
  return (
    <div style={errBox}>
      <h2>Sorry:( 404 Page Not Found.</h2>
    </div>
  )
}
