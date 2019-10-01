// Object
import { Header, Nav, Main, Footer } from "./components";

/**
 * Use `state` to render the appropriate heading depending on the state of the app.
 * What page is currently selected or being displayed.
 */
const state = {
  home: {
    heading: "Home Page"
  },
  About: {
    heading: "About Page"
  }
};

/**
 * Currently, #root div is empty.
 * We want to grab that #root div.
 * We want to assign the markup that is contained in the components as the innerHTML of root.
 */
document.querySelector("#root").innerHTML = `
  ${Header(state.home.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;

const aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();

  /**
   * TODO: Re-render the page again,
   * using the appropriate data from state so that we get the updated heading.
   * HINT: render()
   */
  const aboutElement = event.target;
  console.log('aboutElement is', aboutElement);

  const aboutText = event.target.textContent;
  console.log('about text is:', aboutText);
  console.log(state[aboutText]);




  console.log('you clicked me!');
})
