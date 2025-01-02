"use strict";
// console.log("Hello World");
// const btn = document.getElementById("btn");
//  // type of HTMLElement | null
// // const btn = [] // this will give error as typescript knows that document is a poarticular object
// btn?.addEventListener("click", () => { // wouldn't let use just write btn. without ? as btn can be null
//   console.log("Button clicked");
// });
// // ------------------------------------------------------------------------------------------------
// // There is a non null assertion operator which is !
// const btn2 = document.getElementById("btn")!;
// btn2.addEventListener("click", () => {
//   const input = document.getElementById("input") as HTMLInputElement;
//   console.log(input.value);
// });
// // ------------------------------------------------------------------------------------------------
// // Type assertion
// let mystery: unknown = "Hello World";
// // let result = mystery.toUpperCase(); // this will give error as typescript doesn't know that mystery is a string
// let result2 = (mystery as string).toUpperCase(); // this will work as we have asserted that mystery is a string
// // ------------------------------------------------------------------------------------------------
// // Type assertion using as
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newTodo.textContent = input.value;
    newTodo.appendChild(checkbox);
    const todos = document.getElementById("todos");
    todos.appendChild(newTodo);
    input.value = "";
});
