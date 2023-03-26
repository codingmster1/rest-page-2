(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.src="images/zelda-cooking-camp.gif",n.alt="Link",e.appendChild(t("The most delicious recipes in all of Hyrule Kingdom!")),e.appendChild(t("It's dangerous to go alone...without a good meal!")),e.appendChild(n),e.appendChild(t("The travel is worth it!")),e}())};function n(t,e){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=t;const d=document.createElement("p");d.textContent=e;const i=document.createElement("img");return i.src="images/heart-beat.gif",i.alt=`${t}`,n.appendChild(i),n.appendChild(a),n.appendChild(d),n}const a=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(n("Creamy Heart Soup","Hydromelon, a voltfruit, fresh milk, and a hearty radish(gives health boost)")),t.appendChild(n("Clam Chowder","Fresh milk, tabantha wheat, goat butter, and a hearty blueshell snail(gives health boost)")),t.appendChild(n("Seafood Curry","Goron spice and Hylian rice(Boosts attack and defense)")),t.appendChild(n("Hasty Fruit And Mushroom Mix","Mix any fruit with a Rushroom(increases speed)")),t.appendChild(n("Seafood Fried Rice","Hylian rice and rock salt(just a fun dish to make)")),t.appendChild(n("Hearty Fruitcake","Apple or a wildberry, a hearty durian, wheat, and cane sugar(maxes out hearts)")),t.appendChild(n("Hearty Veggie Rice Balls","Hearty Radish or its bigger variant with Hylian Rice(full recovery with 12+ hearts)")),t.appendChild(n("Fairy Tonic","Combine a fairy with either a monster part, Guardian part, animal part, or a type of gemstone(restorative effect)")),t}())},d=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="1-800-HEY-LISTEN!";const n=document.createElement("p");n.textContent="🏠 Great Plateau, Kakariko Village, Hyrule Kingdom";const a=document.createElement("img");return a.src="images/map-zelda.jpg",a.alt="Restaurant location",t.appendChild(e),t.appendChild(n),t.appendChild(a),t}())};function i(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Link's Kitchen",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav"),n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(i(n),e())}));const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Menu",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(i(o),a())}));const c=document.createElement("button");return c.classList.add("button-nav"),c.textContent="Contact",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(i(c),d())})),t.appendChild(n),t.appendChild(o),t.appendChild(c),t}()),t}()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent=`Copyright © Nintendo ${(new Date).getFullYear()} codingmster1`;const n=document.createElement("a");n.href="https://github.com/codingmster1";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),t.appendChild(e),t.appendChild(n),t}()),i(document.querySelector(".button-nav")),e()}()})();