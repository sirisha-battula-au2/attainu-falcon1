import React from 'react';
import Card from "./card";
import Header from "./header";


class AboutUs extends React.Component{
    render() {
        return(
           <div>

        <Header/>


        <div className="card-deck">   
        <Card src={"https://www.w3schools.com/howto/img_avatar2.png"} title="CEO" text = " Pay only a percentage of your income Never pay more than you make  Pay when the program works for you Pay only when you have a job"/>
        <Card src={"https://www.w3schools.com/howto/img_avatar2.png"} title="CTO" text = " Pay only a percentage of your income Never pay more than you make  Pay when the program works for you Pay only when you have a job"/>
        <Card src={"https://www.w3schools.com/howto/img_avatar2.png"} title="COO" text = " Pay only a percentage of your income Never pay more than you make  Pay when the program works for you Pay only when you have a job"/>
        
        </div> 
        </div> 
      


        );
    }
}


export default AboutUs;