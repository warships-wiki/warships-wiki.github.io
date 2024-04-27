import {data as basicData} from "../../../data-sources/warships/nation.js";
import {data as nationsData} from "../../../data-sources/modules/warshipsNations.js";
import {
    createNavCards,
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
    const nationId = new URLSearchParams(location.search).get("id");
    const typeId = new URLSearchParams(location.search).get("prevId");
    const nationData = nationsData.find(nation => nation.id === nationId);
    const typeData = (typeId === null) ? "" : (nationData.warshipTypes.find(type => type.id === typeId));
    createSectionsArticles(basicData.sections, container, locale);
    createResourcesCards(getSectionData(basicData, "featured-articles").content, "featured-articles", "article", locale);
    createNavCards(getSectionData(basicData, "navigation"), "navigation", "", "static", locale);
    if (typeId === null) createNavCards(getSectionData(basicData, "types"), "types", "", "dynamic", locale);
    createTextArticles(basicData, ["notes", "sources", "authors", "editions"], locale);
    createWarshipCards(((typeId === null) ? nationData : typeData), "warships", nationId);
}

function createWarshipCard(id, title, refBackPath, imageURL, typeId, nationId) {
    const card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");

    container.setAttribute("href", refBackPath + ".html?id=" + id + "&type=" + typeId + "&nation=" + nationId);

    if (imageURL) card.style.backgroundImage = "url(" + imageURL + ")";
    container.textContent = title;

    card.appendChild(container);
    return card;
}

function createWarshipCards(data, containerId, nationId) {
    const container = document.getElementById(containerId);
    container.classList.add("nav-cards");
    if (data.hasOwnProperty("warshipTypes")) {
        data.warshipTypes.forEach((t) => {
            if (t.hasOwnProperty("warshipClasses")) {
                t.warshipClasses.forEach((c) => {
                    getArticleContent(container).appendChild(createWarshipCard(c.id, c.name, "/warships/class", ((c.hasOwnProperty("background")) ? c.background : ""), t.id, nationId));
                });
            }
        });
    } else {
        if (data.hasOwnProperty("warshipClasses")) {
            data.warshipClasses.forEach((c) => {
                getArticleContent(container).appendChild(createWarshipCard(c.id, c.name, "/warships/class", ((c.hasOwnProperty("background")) ? c.background : ""), data.id, nationId));
            });
        }
    }
}