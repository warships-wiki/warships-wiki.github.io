import {data as indexData} from "../../data-sources/views/index.js";
import {
    createNavCards,
    createResourcesCards,
    createSectionsArticles,
    getSectionData,
    initView
} from "../basic-structure/main.js";
import {getViewLang} from "../basic-structure/meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    if (!localStorage.getItem("modal-shown")) await createLangModal(document.getElementById("main-section"));
    initView(indexData, getViewLang(), createBasicStructure);
});

function createBasicStructure(container, locale) {
    createSectionsArticles(indexData.sections, container, locale);
    createNavCards(getSectionData(indexData, "navigation"), "navigation", "", "static", locale);
    createResourcesCards(getSectionData(indexData, "featured-articles").content, "featured-articles", "article", locale);
    createResourcesCards(getSectionData(indexData, "latest-news").content, "latest-news", "news", locale);
}

async function createLangModal(container) {

    return new Promise(resolve => {
        let langModal = document.createElement("div");
        langModal.setAttribute("id", "lang-modal");
        langModal.classList.add("disable-select");

        let locales = [{
            id: "en",
            name: "English",
            icon: "us",
            title: "Welcome to 'Warships Wiki'<br><br>The website is primarily in English. It can also be viewed in Spanish and Portuguese, among other languages<br><br>Enter by clicking here"
        }, {
            id: "es",
            name: "Español",
            icon: "es",
            title: "Bienvenido a 'Wiki de Buques de Guerra'<br><br>El sitio tiene, cómo base, el idioma Inglés. También se puede visualizar en español y portugués, entre otros<br><br>Ingrese cliqueando aquí"
        }, {
            id: "pt",
            name: "Portugués",
            icon: "pt",
            title: "Bem-vindo a 'Wiki de Navios de Guerra'<br><br>O site está principalmente em inglês. Também pode ser visualizado em espanhol e português, entre outros idiomas<br><br>Clique aqui para entrar"
        }];

        let langContent = document.createElement("div");
        langContent.classList.add("modal-content");
        langModal.appendChild(langContent);

        locales.forEach(function (locale) {
            let lang = document.createElement("a");
            lang.classList.add("lang-block");
            lang.href = ("/");
            lang.innerHTML = `
            <i class="fi fi-${locale.icon.toLowerCase()} fis"></i>
            <p>${locale.title}</p>
          `;
            langContent.appendChild(lang);
            lang.addEventListener("click", function (event) {
                localStorage.setItem("lang", locale.id);
                deleteLangModal(container);
            });
        });

        /*langModal.addEventListener("click", function (event) {
            if (event.target === langModal) {
                deleteLangModal(container);
                location.reload();
            }
        });*/

        container.appendChild(langModal);
    });
}

function deleteLangModal(container) {
    container.removeChild(document.getElementById("lang-modal"));
    localStorage.setItem("modal-shown", true);
}
