import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"; 
import SearchIcon from "@material-ui/icons/Search"; 

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
            <h2>What's Happening</h2>

            <TwitterTweetEmbed tweetId={"1703666900553920869"} />

            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="premsundar28"
            options={{ height: 400}}
            />

            <TwitterShareButton
            url={"https://www.facebook.com/PremSundar28/"}
            options={{ text: "#this is hard", via: "premsundar" }}
            />

        </div>
    </div>
  );
}

export default Widgets;