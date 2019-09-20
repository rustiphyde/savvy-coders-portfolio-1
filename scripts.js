// Write a fxn. to where I can pass in a string that will end up being in the window prompt

// TODO: Replace <h1> with the answer from the question.
function greeter(question = "What is your name?") {
  return prompt(question);
}

document.querySelector("h1").textContent = greeter();

// const answer = greeter();
// document.querySelector("h1").textContent = answer

// const h1 = document.querySelector("h1");
// const textContent = h1.textContent;
// const h1TextContent = document.querySelector("h1").textContent;
