/** @format */

let button = document.querySelector(".btn-add");
let inputText = document.querySelector(".input");
let taskList = document.querySelector(".task-list");
let taskAdd = document.querySelector(".task-add");
let errorContent = document.querySelector(".error-content");

function addRow(text) {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let p_Text = document.createElement("p");
  let i_Remove = document.createElement("i");

  p_Text.innerHTML = text;
  taskList.append(ul);
  ul.append(li);
  li.append(p_Text);
  li.append(i_Remove);

  li.classList.add("list");
  i_Remove.classList.add("fa-solid");
  i_Remove.classList.add("fa-trash-can");
}
button.addEventListener("click", () => {
  let inputLength = inputText.value.length;
  if (!(inputLength > 3 && inputLength < 15)) {
    inputText.value = "";
    inputText.classList.add("error-border-style");
    errorContent.innerHTML = "Simvol length betwen 3-15 ";
    return;
  }
  inputText.classList.remove("error-border-style");
  errorContent.innerHTML = "";
  addRow(inputText.value);
  inputText.value = "";
});

function lineCenter(e) {
  e.target.classList.toggle("line-center");
}
document.addEventListener("click", function (event) {
  if (event.target.matches(".task-list .list p")) {
    lineCenter(event);
  }
});
function removeRow(event) {
  if (event.target.matches(".task-list .list i")) {
    let ul = event.target.closest("ul");
    ul.remove();
  }
}

document.addEventListener("click", (event) => {
  removeRow(event);
});
