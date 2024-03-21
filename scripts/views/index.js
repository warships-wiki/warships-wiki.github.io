import {data as mainData} from "../data-sources/main.js";
import {data as newsData} from "../data-sources/resources/news.js";
import {data as articlesData} from "../data-sources/resources/articles.js";
import {createArticle, createPathReference, setCollapsibles} from "./basic-structure/main.js";

const view = mainData.views.find(view => view.id === "index");
const sectionsData = view.sections;

document.addEventListener("DOMContentLoaded", async function () {
    const locale = localStorage.getItem("currentLocale");

    const viewNavCards = await createNavCards(sectionsData.navigation[locale], locale);
    createViewNavCards(viewNavCards, locale);
    viewNavCards.parentElement.setAttribute("data-section-id", "navigation");

    const newsNavCards = await createNavCards(sectionsData.news[locale], locale);
    newsNavCards.classList.add("news-container");
    newsNavCards.parentElement.setAttribute("data-section-id", "news");

    const articlesNavCards = await createNavCards(sectionsData.articles[locale], locale);
    articlesNavCards.classList.add("articles-container");
    articlesNavCards.parentElement.setAttribute("data-section-id", "articles");

    createResourcesCards(newsNavCards, articlesNavCards, locale);
    setCollapsibles();
    addLangEventListener();
});

export async function createNavCards(title) {
    const container = document.getElementById("main-section");
    const article = createArticle(true, false, title, "", "nav-cards", "disable-select");
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
    container.textContent = data.title[locale];
    container.setAttribute("data-button-id", data.id);

    card.appendChild(container);
    return card;
}

function createResourcesCards(newsContainer, articlesContainer, locale) {
    newsData.slice(0, 4).forEach((news) => {
        newsContainer.appendChild(createResourceCard(news, "news", locale));
    });
    articlesData.slice(0, 4).forEach((article) => {
        articlesContainer.appendChild(createResourceCard(article, "article", locale));
    });
}

function createResourceCard(data, type, locale) {
    let container = document.createElement("a");
    container.classList.add("nav-resource");
    container.setAttribute("href", data.reference);
    container.setAttribute("target", "_blank");
    container.setAttribute("data-resource-id", data.id);
    container.setAttribute("data-resource-type", type);

    let card = document.createElement("div");
    card.classList.add("resource-card");
    container.appendChild(card);

    let imageBox = document.createElement("div");
    imageBox.classList.add("resource-card-image-box");
    card.appendChild(imageBox);

    let image = document.createElement("img");
    image.classList.add("resource-card-img");
    image.setAttribute("src", data.image);
    image.setAttribute("alt", data.title[locale]);
    imageBox.appendChild(image);

    let cardTextBox = document.createElement("div");
    cardTextBox.classList.add("resource-card-text-box");
    card.appendChild(cardTextBox);

    let title = document.createElement("div");
    title.classList.add("resource-card-title");
    title.textContent = data.title[locale];
    cardTextBox.appendChild(title);

    let subtitle = document.createElement("div");
    subtitle.classList.add("resource-card-subtitle");
    subtitle.textContent = data.subtitle[locale];
    cardTextBox.appendChild(subtitle);

    let cardBar = document.createElement("div");
    cardBar.classList.add("resource-card-bar");
    cardTextBox.appendChild(cardBar);

    let description = document.createElement("div");
    description.classList.add("resource-card-description");
    description.textContent = data.shortDescription[locale];
    cardTextBox.appendChild(description);

    return container;
}

function updateResourceLang(container, locale) {
    let resourceData = ((container.dataset.resourceType === "news") ? newsData[container.dataset.resourceId] : articlesData[container.dataset.resourceId]);
    container.querySelector(".resource-card-title").textContent = resourceData.title[locale];
    container.querySelector(".resource-card-subtitle").textContent = resourceData.subtitle[locale];
    container.querySelector(".resource-card-description").textContent = resourceData.shortDescription[locale];
    container.querySelector(".resource-card-img").setAttribute("alt", resourceData.title[locale]);
}

function updateResourcesLang(containers, locale) {
    for (let container of containers) {
        updateResourceLang(container, locale);
    }
}

function updateArticleHeaderLang(container, locale) {
    container.textContent = sectionsData[container.parentElement.dataset.sectionId][locale];
}

function updateArticlesHeaderLang(containers, locale) {
    for (let container of containers) {
        updateArticleHeaderLang(container, locale);
    }
}

function updateNavCardsLang(containers, locale) {
    for (let container of containers) {
        let button = mainData.views.find(button => container.dataset.buttonId === button.id);
        container.textContent = button.title[locale];
    }
}

function updateLang(locale) {
    updateResourcesLang(document.querySelectorAll(".nav-resource"), locale);
    updateArticlesHeaderLang(document.querySelectorAll(".article-header"), locale);
    updateNavCardsLang(document.querySelectorAll(".nav-card"), locale);
    addLangEventListener();
}

function addLangEventListener() {
    const langOptions = document.querySelectorAll(".lang-option");
    for (let langOption of langOptions) {
        langOption.addEventListener("click", function () {
            updateLang(langOption.dataset.langId);
        });
    }
}