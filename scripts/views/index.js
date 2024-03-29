import {data as viewData} from "../../data-sources/views/index.js";
import {
    addLangEventListener,
    createArticle,
    createLoadingScreen,
    createNavCard,
    createNavCards,
    createResourcesCards, createSectionsArticles,
    deleteLoadingScreen,
    getSectionData,
    setCollapsibles
} from "../basic-structure/main.js";
import {getViewLang, setViewLang} from "../basic-structure/meta.js";

const sectionsData = viewData.sections;

function createBasicStructure(container, locale) {
    createSectionsArticles(viewData.sections, container, locale);
    createNavCards(getSectionData(viewData, "navigation"), "navigation", "", "static", locale);
    createResourcesCards(getSectionData(viewData, "featured-articles").content, "featured-articles", "article", locale);
    createResourcesCards(getSectionData(viewData, "latest-news").content, "latest-news", "news", locale);
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

function createViewNavCards(container, locale) {
    sectionsData[0].content.forEach((section) => {
        if (section.id !== "index") {
            container.appendChild(createNavCard(section.id, section.title[locale], ""));
        }
    });
}