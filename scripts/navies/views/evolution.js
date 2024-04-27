import {data as evolutionData} from "../../../data-sources/navies/evolution.js";
import {
    createLinksArticle,
    createNavCards,
    createResourcesCards,
    createSectionsArticles,
    createTextArticles,
    getSectionData,
    initView,
} from "../../basic-structure/main.js";
import {getViewLang} from "../../basic-structure/meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    initView(evolutionData, getViewLang(), createBasicStructure);
});

function createBasicStructure(container, locale) {
    createSectionsArticles(evolutionData.sections, container, locale);
    createResourcesCards(getSectionData(evolutionData, "featured-articles").content, "featured-articles", "article", locale);
    createNavCards(getSectionData(evolutionData, "navigation"), "navigation", "", "static", locale);
    createTextArticles(evolutionData, ["introduction","notes", "sources", "authors", "editions"], locale);
    createLinksArticle(document.getElementById("links"), getSectionData(evolutionData, "links").content, locale);
}