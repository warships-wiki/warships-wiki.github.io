import {data as mainData} from "../data-sources/main.js";
import {data as newsData} from "../data-sources/resources/news.js";
import {data as articlesData} from "../data-sources/resources/articles.js";
import {createArticle, createPathReference, setCollapsibles} from "./basic-structure/main.js";

document.addEventListener("DOMContentLoaded", async function () {
    const locale = localStorage.getItem("currentLocale");

    const viewNavCards = await createNavCards("Contenidos del Sitio", locale);
    createViewNavCards(viewNavCards, locale);

    const newsNavCards = await createNavCards("Novedades del Sitio", locale);
    newsNavCards.classList.add("news-container");

    const articlesNavCards = await createNavCards("Artículos destacados", locale);
    articlesNavCards.classList.add("articles-container");

    createResourcesCards(newsNavCards, articlesNavCards, locale);
    setCollapsibles();
});

export async function createNavCards(title) {
    const container = document.getElementById("main-section");
    const article = createArticle(true, false, title,"nav-cards","disable-select");
    container.appendChild(article);
    return article.querySelector(".article-content");
}

function createViewNavCards(container, locale) {
    mainData.views.forEach((button) => {
        if (button.hasOwnProperty("reference") && button.id !== "index") {
            container.appendChild(createNavCard(button, locale));
        }
    });
}

function createNavCard(data, locale) {
    const card = document.createElement("nav");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");
    if (!data.disabled) container.setAttribute("href", createPathReference(window.location.pathname, data.id, data.reference));
    container.textContent = data.translations[locale];

    card.appendChild(container);
    return card;
}

function createResourcesCards(newsContainer, articlesContainer, locale) {
    newsData.forEach((news) => {
        newsContainer.appendChild(createResourceCard(news, locale));
    });
    articlesData.forEach((article) => {
        articlesContainer.appendChild(createResourceCard(article, locale));
    });
}

function createResourceCard(data, locale) {
    let container = document.createElement("a");
    container.classList.add("nav-resource");
    container.setAttribute("href", data.reference);

    let card = document.createElement("div");
    card.classList.add("resource-card");
    container.appendChild(card);

    let cardInner = document.createElement("div");
    cardInner.classList.add("resource-card-innerbox");
    card.appendChild(cardInner);

    let image = document.createElement("img");
    image.classList.add("resource-card-img");
    image.setAttribute("src", data.image);
    image.setAttribute("alt", data.translations.title[locale]);
    cardInner.appendChild(image);

    let cardTextbox = document.createElement("div");
    cardTextbox.classList.add("resource-card-textbox");
    cardInner.appendChild(cardTextbox);

    let title = document.createElement("div");
    title.classList.add("resource-card-title");
    title.textContent = data.translations.title[locale];
    cardTextbox.appendChild(title);

    let subtitle = document.createElement("div");
    subtitle.classList.add("resource-card-subtitle");
    subtitle.textContent = data.translations.subtitle[locale];
    cardTextbox.appendChild(subtitle);

    let cardBar = document.createElement("div");
    cardBar.classList.add("resource-card-bar");
    cardTextbox.appendChild(cardBar);

    let description = document.createElement("div");
    description.classList.add("resource-card-description");
    description.textContent = data.translations.description[locale];
    cardTextbox.appendChild(description);

    return container;
}