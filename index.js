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
// The parameter st represents a piece of state
function render(st = state.home) {
document.querySelector("#root").innerHTML = `
  ${Header(st.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
}

render();

const aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();

  // In this case, we are accessing state.About
  render(state[event.target.textContent]);
})
