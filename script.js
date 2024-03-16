/** @format */

let button = document.querySelector(".btn-add");
let inputText = document.querySelector(".input");
let taskList = document.querySelector(".task-list");
let taskAdd = document.querySelector(".task-add");
let errorContent = document.querySelector(".error-content");
let p = document.getElementsByTagName("p");
let allPteg = [];

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

  for (let i = 0; i < p.length; i++) {
    if (!allPteg.includes(p[i].innerHTML)) {
      allPteg.push(p[i].innerHTML);
    }
  }
}

function removeRow(event) {
  let ul = event.target.closest("ul");
  ul.remove();

  let ul_li = event.target.closest("li");
  let li_p = ul_li.querySelector("p");
  let p_content = li_p.textContent;
  let indexPteg = allPteg.indexOf(p_content.trim());

  allPteg.splice(indexPteg, 1);
}
function lineCenter(e) {
  e.target.classList.toggle("line-center");
}

function validationLength(inputValue) {
  let result = true;
  let inputLength = inputValue.value.length;
  if (!(inputLength > 3 && inputLength < 15)) {
    inputText.value = "";
    inputText.classList.add("error-border-style");
    errorContent.innerHTML = "Simvol length betwen 3-15 ";
    result = false;
    return result;
  }
  return result;
}

function validationRepeat(inputValue) {
  let result = true;

  if (allPteg.includes(inputText.value.trim())) {
    inputText.value = "";
    inputText.classList.add("error-border-style");
    errorContent.innerHTML = "The task content is already have";
    result = false;
    return result;
  }
  return result;
}
//---------- click button----------
button.addEventListener("click", (e) => {
  inputText.classList.remove("error-border-style");
  errorContent.innerHTML = "";

  let resultLength = validationLength(inputText);
  let resultRepeat = validationRepeat(inputText);
  if (resultLength && resultRepeat) {
    addRow(inputText.value);
    inputText.value = "";
  }
});
//---------- click button END ----------
//----------- line center-------------
document.addEventListener("click", function (event) {
  if (event.target.matches(".task-list .list p")) {
    lineCenter(event);
  }
});
//----------- line center END -------------

//----------- Remove -------------
document.addEventListener("click", (event) => {
  if (event.target.matches(".task-list .list i")) {
    removeRow(event);
  }
});
//----------- Remove End -------------
