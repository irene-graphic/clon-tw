import "./../assets/styles/style.sass";
import tweets from "./tweets.json";
import { renderTweets, searchInputController } from "./controllers/searchFilter.controller";
import { newTweetController } from "./controllers/newTweet.controller";
import { textRed, renderChart } from "./controllers/textRed.controller";
// import { renderLikeIcon, renderRtIcon } from "./controllers/changeIcons.controller";

window.addEventListener("load", () => {
  searchInputController()
  renderTweets()
  newTweetController()
  textRed()
  renderChart()
  // renderLikeIcon()
  // renderRtIcon()
})




// ------------- pintado dinámico del los li del nav -------------
const renderNavs = () => {
  //seleccionar la clase de HTML
  const navsBlock = document.querySelector(".list")

  //crear un array vacio
  let navString = ""

  //bucle dentro de navString pegamos la estructura html de la card
  for (let i = 0; i < itemsNav.length; i++){
      navString+=`
          <li class="menu-item">
              <a href="${itemsNav[i].href}">
                  <img src="${itemsNav[i].iconNav}" alt="Foto de perfil">${itemsNav[i].title}
              </a>
          </li>
      `
  }
  //se pinta
  navsBlock.innerHTML = navString

};

renderNavs();