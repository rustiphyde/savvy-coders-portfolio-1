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
  about: {
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
