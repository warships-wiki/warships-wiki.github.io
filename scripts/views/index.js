import {data as viewData} from "../../data-sources/views/index.js";
import {data as newsData} from "../../data-sources/resources/news.js";
import {data as articlesData} from "../../data-sources/resources/articles.js";
import {
    addLangEventListener,
    createArticle,
    createLoadingScreen,
    createNavCard,
    createResourceCard,
    deleteLoadingScreen,
    setCollapsibles, updateMetadata
} from "../basic-structure/main.js";
import {getViewLang, getViewTheme, setViewLang} from "../basic-structure/meta.js";

const sectionsData = viewData.sections;

updateMetadata(getViewTheme(), getViewLang());

function createBasicStructure(container, locale) {
    const viewNavCards = createNavCards(container, sectionsData[0].title[locale], "navigation");
    createViewNavCards(viewNavCards, locale);

    const newsNavCards = createNavCards(container, sectionsData[1].title[locale], "latest-news");
    newsNavCards.classList.add("news-container");

    const articlesNavCards = createNavCards(container, sectionsData[2].title[locale], "featured-articles");
    articlesNavCards.classList.add("articles-container");
    createResourcesCards(newsNavCards, articlesNavCards, locale);
}

// noinspection DuplicatedCode
function initView(locale) {
    const mainSection = document.getElementById("main-section");
    mainSection.innerHTML = "";
    reloadView(mainSection, locale);
    setViewLang(locale);
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

function createNavCards(container, title, containerId) {
    const article = createArticle(true, false, title, "", containerId, "nav-cards", "disable-select");
    container.appendChild(article);
    return article.querySelector(".article-content");
}

function createViewNavCards(container, locale) {
    sectionsData[0].content.forEach((section) => {
        if (section.id !== "index") {
            container.appendChild(createNavCard(section.id, section.title[locale], ""));
        }
    });
}

function createResourcesCards(newsContainer, articlesContainer, locale) {
    newsData.slice(0, 4).forEach((news) => {
        newsContainer.appendChild(createResourceCard(news, "news", locale));
    });
    articlesData.slice(0, 4).forEach((article) => {
        articlesContainer.appendChild(createResourceCard(article, "article", locale));
    });
}