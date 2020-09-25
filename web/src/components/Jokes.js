import React, { Component } from "react";

class Jokes extends Component {
  state = { quote: {}, jokes: [] };

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((json) => this.setState({ quote: json }));
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }));
  };

  render() {
    const { content, author } = this.state.quote;

    return (
      <div>
        <h3>Famous Quotes:</h3>
        <p>
          <em>
            "{content}" - {author}
          </em>
        </p>
        <hr />
        <h3>Want some jokes?</h3>
        <button onClick={this.fetchJokes}>Get 10 Jokes!</button>
        {this.state.jokes.map((joke) => {
          const { id, setup, punchline } = joke;
          return (
            <p key={id}>
              <em>
                {setup} - {punchline}
              </em>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Jokes;
