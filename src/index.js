import "./style.css";
import { buildLandingPage } from "./landingPage.js";
import { buildMenuPage } from "./menuPage.js";
import { buildAboutPage } from "./aboutPage.js";

function landingPageClick() {
    contentDiv.innerHTML = "";
    buildLandingPage();
}

function menuPageClick() {
    contentDiv.innerHTML = "";
    buildMenuPage();
}

function aboutPageClick() {
    contentDiv.innerHTML = "";
    buildAboutPage();
}

const contentDiv = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener('click', landingPageClick);
menuButton.addEventListener('click', menuPageClick);
aboutButton.addEventListener('click', aboutPageClick);

buildLandingPage();