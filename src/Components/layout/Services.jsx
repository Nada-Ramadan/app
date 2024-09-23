import React, { useState } from 'react'

export default function Services() {
    
    let [useName , setUserName] = useState("Nada")

  return (
    <div>
      <h1>{useName}</h1>
      <button onClick={ () => {setUserName("eman")}}>Change User Name</button>
    </div>
  )
}
