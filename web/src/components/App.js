import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.jpg";
import Title from "./Title";
import Jokes from "./Jokes";

class App extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hey I'm Lucy</h1>
        <Title />
        <p>Im always looking forward to working on meaningful projects</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Madrid, and code everyday</p>
            <p>
              My favorite language is JavaScript and I think React is awesome
            </p>
            <p>Besides coding, I also love Music and Ramen</p>
            <div>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;
