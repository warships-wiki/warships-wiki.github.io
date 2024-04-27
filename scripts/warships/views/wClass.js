import {data as basicData} from "../../../data-sources/warships/nation.js";
import {data as nationsData} from "../../../data-sources/modules/warshipsNations.js";
import {
    createResourcesCards,
    createSectionsArticles,
    createTextArticles,
    getArticleContent,
    getSectionData,
    initView,
} from "../../basic-structure/main.js";
import {getViewLang} from "../../basic-structure/meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    initView(basicData, getViewLang(), createBasicStructure);
});

function createBasicStructure(container, locale) {
    const wClassId = new URLSearchParams(location.search).get("id");
    const typeId = new URLSearchParams(location.search).get("type");
    const nationId = new URLSearchParams(location.search).get("nation");
    const nationData = nationsData.find(nation => nation.id === nationId);
    const typeData = nationData.warshipTypes.find(type => type.id === typeId);
    const classData = typeData.warshipClasses.find(wClass => wClass.id === wClassId);
    createSectionsArticles(basicData.sections, container, locale);
    createResourcesCards(getSectionData(basicData, "featured-articles").content, "featured-articles", "article", locale);
    createTextArticles(basicData, ["notes", "sources", "authors", "editions"], locale);
    createWarshipCards(classData, "warships", wClassId, typeId, nationId);
}

function createWarshipCard(id, title, refBackPath, imageURL, wClassId, typeId, nationId) {
    const card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");

    container.setAttribute("href", refBackPath + ".html?id=" + id + "&wClass=" + wClassId + "&type=" + typeId + "&nation=" + nationId);

    if (imageURL) card.style.backgroundImage = "url(" + imageURL + ")";
    container.textContent = title;

    card.appendChild(container);
    return card;
}

function createWarshipCards(data, containerId, wClassId, typeId, nationId) {
    const container = document.getElementById(containerId);
    container.classList.add("nav-cards");
    if (data.hasOwnProperty("warships")) {
        data.warships.forEach((w) => {
            getArticleContent(container).appendChild(createWarshipCard(w.id, w.name, "/warships/warship", ((w.hasOwnProperty("background")) ? w.background : ""), wClassId, typeId, nationId));
        });
    }
}