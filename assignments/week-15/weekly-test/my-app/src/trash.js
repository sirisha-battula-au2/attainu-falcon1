import React from 'react';
import "./App.css";
class Trash extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mail: []
        }
    }
    componentDidMount(){
       
        let url = "https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/mail.json";
            fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                var cat = responseData.filter(responseData => responseData.category === "Trash")
                this.setState({mail: cat})
                console.log(this.state.mail)
                console.log(cat)
            });
    }
    render(){
        return(
            <div className="container">
                <div className="App">
                    <div className="App-header">
                    { this.state.mail ? (
                        <div className="container">
                            <div className="table">
                                {this.state.mail.map((mail, index) => (

                                <tr key={index}><td>{mail.mail}</td></tr>

            ))}
            </div>
            </div>
            ) : (<div><h1>No result found  !!! Try search another meal</h1></div>)
          }
                    </div>
                </div>
            </div>
        );
    }
}

export default Trash;