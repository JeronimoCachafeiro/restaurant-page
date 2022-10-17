const content = document.querySelector(".content");

function createElement (newElement, textOrSrc) {
  const element = document.createElement(newElement);
  newElement === "img" ? element.setAttribute("src", textOrSrc) : element.textContent = textOrSrc;
  return element;
}

function loadPage(h1Text, imgSrc, pText) {
  const h1 = () => createElement("h1", h1Text);
  const img = () => createElement("img", imgSrc);
  const p = () => createElement("p", pText);

  content.appendChild(h1());
  content.appendChild(img());
  content.appendChild(p());
}

export {createElement, loadPage};





