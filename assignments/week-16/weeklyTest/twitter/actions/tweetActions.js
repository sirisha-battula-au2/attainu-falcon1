export function postTweet(name,tweet) {
    console.log("action: POST_TWEET");
    return{
        type : "POST_TWEET",
        payload : {name : name, tweet : tweet}
    };
}


export function updateName(name){
    return{
        type : "UPDATE_NAME",
        name : name
    }
}