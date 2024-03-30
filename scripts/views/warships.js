import {data as warshipsData} from "../../data-sources/views/warships.js";
import {
    createCountriesNavCards,
    createInnerTextArticles,
    createNavCards,
    createResourcesCards,
    createSectionsArticles,
    createTextArticles,
    getArticleContent,
    getSectionData,
    initView,
} from "../basic-structure/main.js";
import {getViewLang} from "../basic-structure/meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    initView(warshipsData, getViewLang(), createBasicStructure);
});

function createBasicStructure(container, locale) {
    createSectionsArticles(warshipsData.sections, container, locale);
    createInnerTextArticles(document.getElementById("eras"), getSectionData(warshipsData, "eras"), ["eras"], locale)
    createResourcesCards(getSectionData(warshipsData, "featured-articles").content, "featured-articles", "article", locale);
    createNavCards(getSectionData(warshipsData, "navigation"), "navigation", "", "static", locale);
    createNavCards(getSectionData(warshipsData, "types"), "types", "", "dynamic", locale);
    createCountriesNavCards(warshipsData, "warships", locale);
    createTextArticles(warshipsData, ["notes", "sources", "authors", "editions"], locale);
    createVideosArticle(locale);
}

function createVideosArticle(locale) {
    let sectionData = getSectionData(warshipsData, "videos");
    let videosContainer = getArticleContent(document.getElementById("videos"));
    for (let videoData of sectionData.content) {
        let video = document.createElement("iframe");
        video.title = videoData.title[locale];
        video.src = videoData.reference;
        video.allowFullscreen = true;
        videosContainer.appendChild(video);
    }
}