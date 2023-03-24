function createHome() {
    
    /* ================ container ================== */

    /*const contentContainer = document.querySelector("#content");

    /* ================ for each tab =============== */

    const home = document.createElement("div");
    home.classList.add("home");

    const linkImage = document.createElement("img");
    linkImage.src = "./images/link-pot.gif";
    linkImage.alt = "Link";

  home.appendChild(createParagraph("Best pizza in your country"));
  home.appendChild(createParagraph("Made with passion since 1908"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;

}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
  