import './App.css';
import React, { Component } from "react";

const API = 'http://localhost:3000'

class App extends Component{
  state = {
    title: "title here",
    explanation: "explanation here",
    date: "date here",
    copyright: "copyright goes here",
    imageUrl: ""
  };
  componentDidMount() {
    fetch(API + `/get_image`)
      .then((resp) => resp.json())
      .then((data) => {
        const { title, explanation, date, url, copyright } = data;
        this.setState({
          title: title,
          explanation: explanation,
          date: date,
          imageUrl: url,
          copyright: copyright,
        });
      });
  }
  handleChange = (e) => {
    fetch(API + `/get_image?date=${e.target.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        const { title, explanation, date, url, copyright } = data;
        this.setState({
          title: title,
          explanation: explanation,
          date: date,
          imageUrl: url,
          copyright: copyright,
        });
      });
  };
  render() {
    const { title, imageUrl, explanation, date, copyright } = this.state;
    console.log(copyright)
    return (
      <div style={{ position: "fixed" }}>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <img
          style={{ maxHeight: "500px" }}
          src={imageUrl}
          alt="this will be a cool pic"
        />
        <h1>{copyright}</h1>
        <p>{explanation}</p>
        <br />
        <input type="date" onChange={this.handleChange} />
      </div>
    );
  }
}


export default App;
