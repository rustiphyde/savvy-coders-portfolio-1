// Object
import { Header, Nav, Main, Footer } from "./components";

/**
 * Currently, #root div is empty.
 * We want to grab that #root div.
 * We want to assign the markup that is contained in the components as the innerHTML of root.
 */
document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
