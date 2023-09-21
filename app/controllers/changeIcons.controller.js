import tweets from "./../tweets.json"

// export const renderLikeIcon = () => {
//     const likeIcon = document.querySelector(".icons .like-icon .svg-icon");
//     const likesAmountLabel = document.querySelector(".icons .likes-amount");

//     let likesAmount = `${tweet.likes}`;

//     likeIcon.addEventListener("click", (tweet) => {
//     likeIcon.classList.toggle("likedclick");
//       if (likeIcon.classList.contains("likedclick")) {
//         likesAmount++;
//       } else {
//         likesAmount--;
//       }

//       likesAmountLabel.innerHTML = likes;
//     });
// };


// export const renderRtIcon = () => {
//   const rtIcon = document.querySelector(".icons .rt-icon .svg-icon");
//   const rtAmountLabel = document.querySelector(".icons .rt-amount");

//   let rtAmount = `${tweet.retweets}`;

//   rtIcon.addEventListener("click", () => {
//     rtIcon.classList.toggle("rtclick");
//     if (rtIcon.classList.contains("rtclick")) {
//       rtAmount++;
//     } else {
//       rtAmount--;
//     }

//     rtAmountLabel.innerHTML = rtAmount;
//   });
// };