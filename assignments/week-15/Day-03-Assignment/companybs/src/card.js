import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="card">
    <img className="card-img-top" src={this.props.src} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{this.props.title}</h5>
      <p className="card-text">{this.props.text}</p>
      <p className="card-text"><small className="text-muted"></small></p>
    </div>
  </div>
            
           

        );
    }
  }








export default Card;