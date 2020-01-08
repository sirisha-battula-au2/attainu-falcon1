import React from 'react';

class Tweet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: this.props.data.tweet,
        editable: false
      };

    }


render() {
    return (
      <li>
        {this.state.editable ? (
          <input value={this.state.text} onChange={this.handleChange} />
        ) : (
          <span className="tweetlist-tweet">{this.props.data.tweet}</span>
        )}
        <br />
        <span className="tweetlist-name">{this.props.data.name}</span>
       
      </li>

    );
        }
      }
    

export default Tweet;