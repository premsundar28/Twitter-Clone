import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./Firebase";

function TweetBox() {

    const[tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");
    
    const sendtweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Prem Sundar",
            username: "premsundar28",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://4.bp.blogspot.com/-8nKPJQSYxvY/WAfhX_MmDHI/AAAAAAAACOo/9RBYCgfjS68g6P0jBVE06f_bW9NqZY3jACLcB/s1600/0_9249f_a2413934_orig.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://4.bp.blogspot.com/-8nKPJQSYxvY/WAfhX_MmDHI/AAAAAAAACOo/9RBYCgfjS68g6P0jBVE06f_bW9NqZY3jACLcB/s1600/0_9249f_a2413934_orig.png" />
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                 value={tweetMessage} 
                 placeholder="What's Happening?" 
                 type="text" />
                </div>
                <input
                value = {tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter Image URL"
                type="text" 
                />
            
            <Button onClick={sendtweet}
                type="submit" 
                className="tweetBox__tweetButton">
                Tweet
            </Button>
        </form>
    </div>
    );
}

export default TweetBox;