import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

// State is an Object Literal that will hold information that functional components to properly render
const state = {};

state.title = 'Some Title';

// Use innerHTML property as a SETTER
document.querySelector('#root').innerHTML =
// In each of these, we are invoking our fxns. and the 'return' is the resulting HTML
`
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;
