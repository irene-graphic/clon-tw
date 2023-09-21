import tweets from "./../tweets.json";
import { renderTweets } from "./searchFilter.controller";


const tweetFormButton = document.querySelector(".tweet_form .button")
const tweetFormTextArea = document.querySelector(".tweet_form textarea")

export const newTweetController = () => {
    tweetFormButton.addEventListener("click", () => {
    const newTweet = {
        id: new Date().getTime(),
        image: "./assets/images/user1.jpg",
        name: "Popy",
        nick: "carlino",
        hour: "3h",
        message: tweetFormTextArea.value,
        liked: false,
        likes: 0,
        retweets: 0,
        comment: 0
    };
    tweets.push(newTweet);
    renderTweets();
    tweetFormTextArea.value = "";
    });
};