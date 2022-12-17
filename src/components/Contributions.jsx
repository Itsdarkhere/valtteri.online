import React from 'react'
import "../css/Contributions.css"

export const Contributions = () => {
  return (
    <div style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row', flexWrap: 'wrap', padding: '24px', maxWidth: '1220px'}}>
        {Array.apply(null, Array(365)).map(() => {
            return <div className='contribution-box'></div>
        })}
    </div>
  )
}
