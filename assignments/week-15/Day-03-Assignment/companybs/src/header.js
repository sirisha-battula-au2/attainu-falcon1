import React from 'react';


class Header extends React.Component{
    render() {
        return(
            <div className="card text-center bg-light">
            <div className="card-body">
              <h2 className="card-title">AttainU</h2>
              <h4 className="card-title">Attain Your Dream</h4>
              <p className="card-text">{this.props.text}
               
              </p>
              </div>
              </div>
            
            
          

        );
    }
}







export default Header;