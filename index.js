// Object
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import auth from './firebase/auth';

/**
 * Currently, #root div is empty.
 * We want to grab that #root div.
 * We want to assign the markup that is contained in the components as the innerHTML of root.
 */
// The parameter st represents a piece of state
function render(st = state.Home) {

  /**
   * Developer's Note: Since state.Links is static,
   * there is no reason to pass it in each time.
   *
   * Instead, 'Nav' can import 'Links' directly.
   */
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
}

render();

const links = document.querySelectorAll("nav a, footer a");

links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    render(state[event.target.textContent]);
}));

const signup = document.querySelector("#signup-form");

signup.addEventListener('submit', function () {
  const newUser = {
    email: signup['signup-email'].value,
    password: signup['signup-password'].value
  };

  auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
    .catch(err => console.log(err));

})
