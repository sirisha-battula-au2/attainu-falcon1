import React from 'react';
import TweetContainer from './TweetContainer';
import Tweet from './Tweet';
import TweetForm from './TweetForm';

function App(props) {
    return(
        <div className= "App">
            <h1> Twitter</h1>
            
            <TweetContainer/>
            <Tweet/>
            <TweetForm/>
            
        </div>
    );

}

export default App;