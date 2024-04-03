import {data as naviesData} from "../../data-sources/views/navies.js";
import {
    createCountriesNavCards,
    createNavCards,
    createResourcesCards,
    createSectionsArticles,
    createTextArticles,
    getSectionData,
    initView,
} from "../basic-structure/main.js";
import {getViewLang} from "../basic-structure/meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    initView(naviesData, getViewLang(), createBasicStructure);
});

function createBasicStructure(container, locale) {
    createSectionsArticles(naviesData.sections, container, locale);
    createResourcesCards(getSectionData(naviesData, "featured-articles").content, "featured-articles", "article", locale);
    createNavCards(getSectionData(naviesData, "navigation"), "navigation", "", "static", locale);
    createCountriesNavCards(naviesData, "navies", locale);
    createTextArticles(naviesData, ["introduction", "not-considered", "notes", "sources", "authors", "editions"], locale);
}