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
    container.setAttribute("target", "_blank");

    let card = document.createElement("div");
    card.classList.add("resource-card");
    container.appendChild(card);

    let imageBox = document.createElement("div");
    imageBox.classList.add("resource-card-image-box");
    card.appendChild(imageBox);

    let image = document.createElement("img");
    image.classList.add("resource-card-img");
    image.setAttribute("src", data.image);
    image.setAttribute("alt", data.translations.title[locale]);
    imageBox.appendChild(image);

    let cardTextBox = document.createElement("div");
    cardTextBox.classList.add("resource-card-text-box");
    card.appendChild(cardTextBox);

    let title = document.createElement("div");
    title.classList.add("resource-card-title");
    title.textContent = data.translations.title[locale];
    cardTextBox.appendChild(title);

    let subtitle = document.createElement("div");
    subtitle.classList.add("resource-card-subtitle");
    subtitle.textContent = data.translations.subtitle[locale];
    cardTextBox.appendChild(subtitle);

    let cardBar = document.createElement("div");
    cardBar.classList.add("resource-card-bar");
    cardTextBox.appendChild(cardBar);

    let description = document.createElement("div");
    description.classList.add("resource-card-description");
    description.textContent = data.translations.shortDescription[locale];
    cardTextBox.appendChild(description);

    return container;
}