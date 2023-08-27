import React from 'react'

function MainContent({ title, description, id, clickDelete }) {

  return (
    <>
      <div className='output-div' style={{display:"flex", flexDirection:"column"}}>
        <div style={{ cursor: "pointer" }} className="cut-div" onClick={() => clickDelete(id)}>X</div>
        <h1>{title}</h1>
        <p style={{textAlign:"center"}}>{description}</p>
      </div>
    </>
  )
}

export default MainContent