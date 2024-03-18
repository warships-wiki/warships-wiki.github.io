import {createMetaData} from "./basic-structure/meta.js";
import {data as mainData} from "../data-sources/main.js";
import {createPathReference} from "./main.js";

document.addEventListener("DOMContentLoaded", async function () {
    await createMetaData("Warships Wiki","Esta plataforma multilenguaje está dedicada a recopilar y difundir Datos, Información y Conocimiento Histórico y Técnico sobre los Buques de Guerra de Latinoamérica desde los años de la Independencia hasta el Presente.",window.location.href);
    const locale = localStorage.getItem("currentLocale");

    const viewNavCards = await createNavCards("Contenidos del Sitio",locale);
    createViewNavCards(viewNavCards, locale);

    const newsNavCards = await createNavCards("Novedades del Sitio",locale);
    createViewNavCards(newsNavCards, locale);

    const additionalNavCards = await createNavCards("Adicionales",locale);
    createViewNavCards(additionalNavCards, locale);
});

export async function createNavCards(title) {
    const parentContainer = document.querySelector("main");
    const container = document.createElement("article");
    container.classList.add("nav-cards");

    const header = document.createElement("h2");
    header.classList.add("article-header", "disable-select");
    header.textContent = title;
    container.appendChild(header);

    const content = document.createElement("div");
    content.classList.add("article-content");
    container.appendChild(content);

    parentContainer.appendChild(container);
    return content;
}

function createNavCard(data, locale) {
    const card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");
    if (!data.disabled) container.setAttribute("href", createPathReference(window.location.pathname, data.id, data.reference));
    container.textContent = data.translations[locale];

    card.appendChild(container);
    return card;
}

function createViewNavCards(container, locale) {
    mainData.views.forEach((button) => {
        if (button.hasOwnProperty("reference") && button.id !== "index") {
            container.appendChild(createNavCard(button, locale));
        }
    });
}