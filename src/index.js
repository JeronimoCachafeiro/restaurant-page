import { content, loadButtons, loadPage } from "./page-load.js";
import { tab1 } from "./tab1.js";
import { tab2 } from "./tab2.js";

function changeTab() {
  
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      content.innerHTML = "";
      switch (e.target.textContent) {
        case "Home":
          home();
          break;
        case "Tab 1":
          tab1();
          break;
        case "Tab 2":
          tab2();
          break;
      }
    }
    
  })
};

const home = () =>
  loadPage(
    "Lorem ipsum",
    "../src/image.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

loadButtons();
home();
changeTab();
