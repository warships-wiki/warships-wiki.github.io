import {data as warshipsData} from "../../data-sources/views/warships.js";
import {data as countriesData} from "../../data-sources/basic-data/countries.js";
import {data as articlesData} from "../../data-sources/resources/articles.js";
import {
    addLangEventListener,
    createArticle,
    createCountryCard,
    createLoadingScreen,
    createNavCards,
    createResourceCard,
    deleteLoadingScreen,
    getArticleContent, getSectionData,
    setCollapsibles
} from "../basic-structure/main.js";
import {getViewLang} from "../basic-structure/meta.js";

// noinspection DuplicatedCode
function initView(locale) {
    const mainSection = document.getElementById("main-section");
    mainSection.innerHTML = "";
    reloadView(mainSection, locale);
    deleteLoadingScreen(mainSection);
}

function reloadView(container, locale) {
    createLoadingScreen(container);
    createBasicStructure(container, locale);
    setCollapsibles();
    addLangEventListener(initView);
}

document.addEventListener("DOMContentLoaded", async function () {
    initView(getViewLang());
});

function createErasArticle(locale) {
    const section = warshipsData.sections.find(section => section.id === "eras");
    const erasContainer = document.getElementById("eras");
    for (let description of section.description) {
        let container = createArticle(true, false, description.title[locale], (description.hasOwnProperty("subtitle") ? description.subtitle[locale] : ""));
        for (let content of description.content) {
            let descriptionContainer = document.createElement("p");
            descriptionContainer.textContent = content[locale];
            getArticleContent(container).appendChild(descriptionContainer);
        }
        getArticleContent(erasContainer).appendChild((container));
    }
}

function createFeaturedArticles(locale) {
    const section = warshipsData.sections.find(section => section.id === "featured-articles");
    const featuredArticlesContainer = document.getElementById("featured-articles");
    featuredArticlesContainer.classList.add("articles-container");
    for (let articleId of section.content) {
        getArticleContent(featuredArticlesContainer).appendChild(createResourceCard(articlesData.find(article => article.id === articleId), "article", locale));
    }
}

function createCountriesNavCards(locale) {
    const section = warshipsData.sections.find(section => section.id === "nations");
    const nationsContainer = document.getElementById("nations");
    section.content.forEach((article) => {
        let container = createArticle(true, false, article.title[locale], article.subtitle[locale], article.id, "countries");
        getArticleContent(nationsContainer).appendChild(container);
        countriesData[article.id === "sovereign" ? "sovereign" : "nonSovereign"].forEach((country) => {
            getArticleContent(container).appendChild(createCountryCard(country,"warships", "nation", locale));
        });
    });
}

function createBasicStructure(container, locale) {
    createBasicArticles(container, locale);
    createErasArticle(locale);
    createFeaturedArticles(locale);
    createNavCards(getSectionData(warshipsData, "navigation"),"navigation", "", "static", locale);
    createNavCards(getSectionData(warshipsData, "types"),"types", "", "dynamic", locale);
    createCountriesNavCards(locale);
}

function createBasicArticles(parentContainer, locale) {
    for (let section of warshipsData.sections) {
        let container = createArticle(true, false, section.title[locale], "", section.id);
        parentContainer.appendChild(container);
        if (section.id === "featured-articles") {
            container.classList.add("nav-cards");
            getArticleContent(container).classList.add("articles-container");
        }
        if ((section.id !== "navigation") && (section.id !== "featured-articles") && (section.id !== "nations") && (section.id !== "types") && (section.hasOwnProperty("content"))) {
            for (let content of section.content) {
                let description = document.createElement("p");
                description.textContent = content[locale];
                getArticleContent(container).appendChild(description);
            }
        }
    }
}