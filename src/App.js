import './App.css';
import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard.js"

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
    return (
      <div className="wrapper">
        <AstronomyCard title={title} imageUrl={imageUrl} explanation={explanation} date={date} copyright={copyright}  />
        <input id="calendar" type="date" onChange={this.handleChange} />
      </div>
    );
  }
}


export default App;
