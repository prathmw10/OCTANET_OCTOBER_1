const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function () {
  if (input.value !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    const value = document.createElement("value");
    checkbox.setAttribute("type", "checkbox");
    value.innerText = input.value;

    checkbox.addEventListener("click", function () {
      if (li.style.textDecoration !== "line-through") {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("del");
    btn.addEventListener("click", function () {
      li.remove();
    });

    li.append(checkbox);
    li.append(value);
    li.append(btn);
    ul.append(li);

    input.value = "";
  } else {
    alert("please enter some text");
  }
});




































//   li.innerText = input.value; addd to line 9
