import React from "react";

const AstronomyCard = (props) => {
    console.log(props)
    const { title, imageUrl, explanation, date, copyright } = props
    return (
        <div className="astronomyCard">
        <h1>{title}</h1>
        <h3>{date}</h3>
        <br></br>
        <img
          style={{ maxHeight: "500px" }}
          src={imageUrl}
          alt={imageUrl}
        />
        <br></br>
        <h1>{copyright}</h1>
        <br></br>
        <p>{explanation}</p>
        <br></br>
      </div>
    )
}

export default AstronomyCard