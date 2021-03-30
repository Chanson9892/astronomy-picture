import React from "react";

const AstronomyCard = (props) => {
    const { title, imageUrl, explanation, date, copyright } = props
    return (
        <div>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <img
          style={{ maxHeight: "500px" }}
          src={imageUrl}
          alt="this will be a cool pic"
        />
        <h1>{copyright}</h1>
        <p>{explanation}</p>
      </div>
    )
}

export default AstronomyCard