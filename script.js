addElem = function () {
  let text = document.getElementById("add-elem").value;

  document.getElementById("add-elem").value = "";
  let textNode = document.createTextNode(text);

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.className = "close";

  let closeButton = document.createTextNode("\u00D7");
  span.onclick = function () {
    let elem = this.parentElement;
    elem.style.display = "none";
  };

  span.appendChild(closeButton);

  li.appendChild(textNode);
  li.appendChild(span);
  if (text === "") {
    alert("Write something!");
  } else {
    document.getElementById("todo").appendChild(li);
  }
};

let close = document.getElementsByTagName("LI");
for (let i = 0; i < close.length; i++) {
  let span = document.createElement("span");
  let closeButton = document.createTextNode("close");
  span.appendChild(closeButton);
  close[i].appendChild(span);
}

deleteElem = function (elem) {
  console.log(elem);
};

let buttons = document.getElementsByClassName("close");
