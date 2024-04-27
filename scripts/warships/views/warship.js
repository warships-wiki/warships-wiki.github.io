import {data as basicData} from "../../../data-sources/warships/warship.js";
import {data as nationsData} from "../../../data-sources/modules/warshipsNations.js";
import {
    createInnerTextArticles,
    createNavCards,
    createResourcesCards,
    createSectionsArticles,
    createTextArticles,
    getSectionData,
    initView,
} from "../../basic-structure/main.js";
import {getViewLang} from "../../basic-structure/meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    initView(basicData, getViewLang(), createBasicStructure);
});

function createBasicStructure(container, locale) {
    const warshipId = new URLSearchParams(location.search).get("id");
    const wClassId = new URLSearchParams(location.search).get("wClass");
    const typeId = new URLSearchParams(location.search).get("type");
    const nationId = new URLSearchParams(location.search).get("nation");
    const nationData = nationsData.find(nation => nation.id === nationId);
    const typeData = nationData.warshipTypes.find(type => type.id === typeId);
    const classData = typeData.warshipClasses.find(wClass => wClass.id === wClassId);
    const warshipData = classData.warships.find(warship => warship.id === warshipId);
    createSectionsArticles(basicData.sections, container, locale);
    createNavCards(getSectionData(basicData, "navigation"), "navigation", "", "static", locale);
    createResourcesCards(getSectionData(basicData, "featured-articles").content, "featured-articles", "article", locale);
    createTextArticles(basicData, ["notes", "sources", "authors", "editions"], locale);
    createInnerTextArticles(document.getElementById("introduction"), warshipData.introduction[0], locale);
}