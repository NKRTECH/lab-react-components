import React from 'react'

function Body(props) {
    const {imageData} = props
  return (
    <div>
    {
      imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
  )
}

export default Body