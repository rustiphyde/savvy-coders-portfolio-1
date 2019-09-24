// Write a fxn. to where I can pass in a string that will end up being in the window prompt

function greeter(question = "What is your name?") {
  let answer = prompt(question);

  if (answer === "") {
    return greeter(); // recursion
  }

  return answer;
}

// // We are GETTING the value of the textContent property - WE ARE NOT SETTING IT!
// const getter = document.querySelector("h1").textContent;

// TODO: Resolve issue where h1 is not updated if user gives blank answer
document.querySelector("h1").textContent = greeter();

// const answer = greeter();
// document.querySelector("h1").textContent = answer

// const h1 = document.querySelector("h1");
// const textContent = h1.textContent;
// const h1TextContent = document.querySelector("h1").textContent;
