import React from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends React.Component {
    render() {
        return(
              <button className = "mt-5 ml-5 mr-5 btn btn-success">Click me</button>
        );
    }
}

ReactDOM.render(<HelloWorld/>,document.getElementById('root'));