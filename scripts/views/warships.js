import {data as warshipsData} from "../../data-sources/views/warships.js";
import {data as articlesData} from "../../data-sources/resources/articles.js";
import {
    addLangEventListener,
    createArticle,
    createLoadingScreen,
    createNavCard,
    createResourceCard,
    deleteLoadingScreen,
    setCollapsibles,
} from "../basic-structure/main.js";

// noinspection DuplicatedCode
function initView(locale) {
    const mainSection = document.getElementById("main-section");
    mainSection.innerHTML = "";
    reloadView(mainSection, locale)
    deleteLoadingScreen(mainSection);
}

function reloadView(container, locale) {
    createLoadingScreen(container);
    createBasicStructure(container, locale);
    setCollapsibles();
    addLangEventListener(initView);
}

document.addEventListener("DOMContentLoaded", async function () {
    initView(localStorage.getItem("currentLocale") || "en");
});

function createErasArticle(locale) {
    const section = warshipsData.sections.find(section => section.id === "eras");
    const erasContainer = document.getElementById("eras");
    for (let description of section.description) {
        let container = createArticle(true, false, description.title[locale], (description.hasOwnProperty("subtitle") ? description.subtitle[locale] : ""));
        for (let content of description.content) {
            let descriptionContainer = document.createElement("p");
            descriptionContainer.textContent = content[locale];
            container.querySelector(".article-content").appendChild(descriptionContainer);
        }
        erasContainer.querySelector(".article-content").appendChild((container));
    }
}

function createFeaturedArticles(locale) {
    const section = warshipsData.sections.find(section => section.id === "featured-articles");
    const featuredArticlesContainer = document.getElementById("featured-articles");
    featuredArticlesContainer.classList.add("articles-container");
    for (let articleId of section.content) {
        featuredArticlesContainer.querySelector(".article-content").appendChild(createResourceCard(articlesData.find(article => article.id === articleId), "article", locale));
    }
}

function createViewNavCards(locale) {
    const section = warshipsData.sections.find(section => section.id === "navigation");
    const navigationContainer = document.getElementById("navigation");
    navigationContainer.classList.add("nav-cards");
    section.content.forEach((button) => {
        navigationContainer.querySelector(".article-content").appendChild(createNavCard(button, locale));
    });
}

function createBasicStructure(container, locale) {
    createBasicArticles(container, locale);
    createErasArticle(locale);
    createFeaturedArticles(locale);
    createViewNavCards(locale);
}

function createBasicArticles(parentContainer, locale) {
    for (let section of warshipsData.sections) {
        let container = createArticle(true, false, section.title[locale], "", section.id);
        parentContainer.appendChild(container);
        if ((section.id !== "navigation") && (section.id !== "featured-articles") && (section.hasOwnProperty("content"))) {
            for (let content of section.content) {
                let descriptionContainer = document.createElement("p");
                descriptionContainer.textContent = content[locale];
                container.querySelector(".article-content").appendChild(descriptionContainer);
            }
        }
    }
}