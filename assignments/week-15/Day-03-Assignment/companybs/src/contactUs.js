import React from 'react';
import Card from "./card";
import Header from "./header";


class ContactUs extends React.Component{
    render() {
        return(
           <div>

        <Header />


          
        <Card img src ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaFtCfPtI7Sh-mn6fvqvPIkUfj7z4DZ_7kkmFbBcebCGbJNHZ"} alt="Card image cap"  style = {{'width' : '10rem' }} text = " 91springboard 80ft Road Indiranagar Bengaluru - 560038 "/>
        
       
      
        </div> 
      


        );
    }
}


export default ContactUs;