const content = document.querySelector(".content");

function createElement (newElement, textOrSrc) {
  const element = document.createElement(newElement);
  newElement === "img" ? element.setAttribute("src", textOrSrc) : element.textContent = textOrSrc;
  return element;
}

function loadButtons() {
  const btns = createElement("div");
  const home = () => createElement("button", "Home");
  const tab1 = () => createElement("button", "Tab 1");
  const tab2 = () => createElement("button", "Tab 2");

  document.body.appendChild(btns);
  btns.appendChild(home());
  btns.appendChild(tab1());
  btns.appendChild(tab2());
}

function loadPage(h1Text, imgSrc, pText) {
  

  const h1 = () => createElement("h1", h1Text);
  const img = () => createElement("img", imgSrc);
  const p = () => createElement("p", pText);

  

  content.appendChild(h1());
  content.appendChild(img());
  content.appendChild(p());
}

export {content, loadButtons, loadPage};





