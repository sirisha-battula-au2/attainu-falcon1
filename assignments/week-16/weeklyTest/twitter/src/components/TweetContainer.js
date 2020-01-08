import React from 'react';



class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        { name: "Mrinal", tweet: "Open React Dev tools" },
        { name: "Shahrukh", tweet: "lol" }
      ]
    };
    this.addTweet = this.addTweet.bind(this);
    
  }

  addTweet(name, tweet) {
    console.log(name + " " + tweet);
    this.setState({
      tweets: this.state.tweets.concat({
        name: name,
        tweet: tweet
      })
    });
  }

  render() {
    let listOfTweets = this.state.tweets.map((item, index) => (
      <Tweet
        key={index}
        index={index}
        data={item}
       
      />
    ));

    return (
      <div>
        {this.state.tweets.length === 0 ? (
          <p>No tweets to display</p>
        ) : (
          <ul>{listOfTweets}</ul>
        )}
        <TweetForm handleClick={this.addTweet} />
      </div>
    );
  }
}

export default TweetContainer;
