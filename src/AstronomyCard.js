import React from "react";

const AstronomyCard = (props) => {
  console.log(props)
    const { title, imageUrl, explanation, date, copyright } = props
    function IsImage() {
      if(imageUrl.includes('jpg')){
        return (
          <img className="image"
          style={{ maxHeight: "500px" }}
          src={imageUrl}
          alt={imageUrl}
        />
        ) 
      } else if (!imageUrl.includes('jpg')){
        return (
          <video className="video" controls preload="auto" height="500">
            <source src={imageUrl} type="video/mp4"/>
          </video>
        )
      } else {
        return (<h1>No Image found</h1>)
      }
    }
    return (
        <div className="astronomyCard">
        <h1>{title}</h1>
        <h3>{date}</h3>
        <br></br>
        <IsImage />
        <br></br>
        <h1>{copyright}</h1>
        <br></br>
        <p>{explanation}</p>
        <br></br>
      </div>
    )
}

export default AstronomyCard