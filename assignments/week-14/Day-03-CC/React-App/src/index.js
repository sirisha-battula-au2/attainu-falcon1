import React from 'react';
import ReactDOM from 'react-dom';

class OddEven extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : null,
            result :  null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
    }

    handleChange(e) {
        this.setState({input:e.target.value})
    }

    handleClick() {
        if(this.state.input % 2 === 0) {
            this.setState({result: "This is a even number"});
        }else {
            this.setState({result:"This is a odd number"});
        }
    }

render() {
    return(
        <main className = "container m-5">
        <h3>Even or Odd</h3>    
        <p></p>
        <input onChange={this.handleChange} className="form-control" type="text"/>
        <p></p>
        <button onClick={this.handleClick} className="btn btn-success">Check</button>
        <p></p>
        <h3>{this.state.result}</h3>
        </main>
    );

        }
}

ReactDOM.render(<OddEven/>, document.getElementById("root"));