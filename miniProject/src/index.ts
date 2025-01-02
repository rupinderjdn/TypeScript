console.log("Hello World");

const btn = document.getElementById("btn"); // type of HTMLElement
// const btn = [] // this will give error as typescript knows that document is a poarticular object


btn?.addEventListener("click", () => {
  console.log("Button clicked");
});
