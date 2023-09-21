import tweets from "./../tweets.json"

// ------------ search bar y pintado de tweets --------------
const searchInput = document.querySelector(".search input");
const tweetsBlock = document.querySelector(".tweets");

// el search bar si lo introducido es mayor a 3 letras se renderizan los tweets y se filtran, apareciendo o no
export const searchInputController = () => {

    searchInput.addEventListener("keyup", (ev) => {
      const searchInputValue = searchInput.value;
      const searchInputLenght = searchInputValue.length;

      if (searchInputLenght <= 2){
        renderTweets();
      } else {
          const filteredTweets = tweets.filter((tweet) => 
            tweet.message.includes(searchInputValue)
          );
          
          if (filteredTweets.length > 0) {
            renderTweets(filteredTweets);
          } else {
            renderNoTweets();
          }
      }
    });
};

// Pintado dinámico de los datos de cada tweet
export const renderTweets = (tweetsToRender = tweets) => {
    let html = "";
    tweetsToRender.forEach((tweet) => {
    html += `
          <article class="column_tweets">
              <div class="img_frame_single">
                <img src="${tweet.image}" alt="Foto de perfil">
              </div>
              <div class="info_tweet">
                <div class="name_single_tweet">
                  <span>${tweet.name}</span>
                  <p>@${tweet.nick}</p>
                  <p>·</p>
                  <p>${tweet.hour}</p>
                </div>
                <div class="text_content">
                  <p>
                      ${tweet.message}
                  </p>
                </div>
                <div class="icons_single_tweet">
                  <div class="icons">
                    <div class="icon">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M16.76,7.51l-5.199-5.196c-0.234-0.239-0.633-0.066-0.633,0.261v2.534c-0.267-0.035-0.575-0.063-0.881-0.063c-3.813,0-6.915,3.042-6.915,6.783c0,2.516,1.394,4.729,3.729,5.924c0.367,0.189,0.71-0.266,0.451-0.572c-0.678-0.793-1.008-1.645-1.008-2.602c0-2.348,1.93-4.258,4.303-4.258c0.108,0,0.215,0.003,0.321,0.011v2.634c0,0.326,0.398,0.5,0.633,0.262l5.199-5.193C16.906,7.891,16.906,7.652,16.76,7.51 M11.672,12.068V9.995c0-0.185-0.137-0.341-0.318-0.367c-0.219-0.032-0.49-0.05-0.747-0.05c-2.78,0-5.046,2.241-5.046,5c0,0.557,0.099,1.092,0.292,1.602c-1.261-1.111-1.979-2.656-1.979-4.352c0-3.331,2.77-6.041,6.172-6.041c0.438,0,0.886,0.067,1.184,0.123c0.231,0.043,0.441-0.134,0.441-0.366V3.472l4.301,4.3L11.672,12.068z"></path>
                      </svg>
                    </div>
                    <div>${tweet.comment}</div>
                  </div>
                  <div class="icons">
                    <div class="rt-icon">
                      <svg class="svg-icon ${tweet.rtdone ? "rtdone": ""}" viewBox="0 0 20 20">
                        <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
                      </svg>
                    </div>
                    <div class="rt-amount">${tweet.retweets}</div>
                  </div>
                  <div class="icons">
                    <div class="like-icon">
                      <svg class="svg-icon ${tweet.liked ? "liked": ""}" viewBox="0 0 20 20">
                        <path class="path " d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                      </svg>
                    </div>
                    <div class="likes-amount">${tweet.likes}</div>
                  </div>
                </div>
              </div>
          </article>
    `;
  });
  tweetsBlock.innerHTML = html;
}

// Mensaje que te aparece si no hay tweets que concuerden con el filtrado
const renderNoTweets = () => {
  tweetsBlock.innerHTML = `
   <h3> No hay tweets... </h3>
  `;
};