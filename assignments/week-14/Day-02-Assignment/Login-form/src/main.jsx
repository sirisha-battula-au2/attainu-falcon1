

class InputField extends React.Component {
    render() {
        return (
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
    )
       }
    }

class Password extends React.Component {
    render() {
        return (
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
  

        )
    }
}

class Button extends React.Component {
    render() {
        return (
            
            <button type="submit" className="btn btn-primary">Submit</button>
         
        )
    }
}


class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid" style= { { marginTop : '5%'} }>
            <div className = "col-md-5 offset-md-4">
             <InputField/>
             <Password/>
             <Button/>

           </div>
          </div>
        )

    }
}


ReactDOM.render(<Login/>,document.getElementById("app"));