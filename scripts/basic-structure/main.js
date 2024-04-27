import {data as mainData} from "../../data-sources/basic-data/main.js";
import {createNavbar, toggleTheme, updateNavbar} from "./nav-bar.js";
import {
    getViewLang,
    getViewTheme,
    setDescription,
    setOGDescription,
    setOGTitle,
    setOGUrl,
    setTitle,
    setTwitterDescription,
    setTwitterTitle,
    setTwitterUrl,
    setViewLang,
    setViewTheme
} from "./meta.js";
import {data as articlesData} from "../../data-sources/resources/articles.js";
import {data as newsData} from "../../data-sources/resources/news.js";
import {data as countriesData} from "../../data-sources/basic-data/countries.js";

document.addEventListener("DOMContentLoaded", async function () {
    const {currentTheme, currentLocale} = await setBasicInfo();
    await initBasicPage(currentTheme, currentLocale);
});

export function createCountriesNavCards(data, view, locale) {
    const nationsContainer = document.getElementById("nations");
    getSectionData(data, "nations").content.forEach((article) => {
        let container = createArticle(true, false, article.title[locale], article.subtitle[locale], article.id, "countries, nav-cards, inner-article");
        getArticleContent(nationsContainer).appendChild(container);
        countriesData[article.id === "sovereign" ? "sovereign" : "nonSovereign"].forEach((country) => {
            getArticleContent(container).appendChild(createCountryCard(country, view, "nation", locale));
        });
    });
}

export function initView(data, locale, createBasicStructure) {
    const mainSection = document.getElementById("main-section");
    mainSection.innerHTML = "";
    reloadView(mainSection, data, locale, createBasicStructure);
    deleteLoadingScreen(mainSection);
}

export function reloadView(container, data, locale, createBasicStructure) {
    createLoadingScreen(container);
    createBasicStructure(container, locale);
    setCollapsibles();
    addLangEventListener(data, initView, createBasicStructure);
    setTitle(data.title[locale]);
}

async function setBasicInfo() {
    const currentTheme = getViewTheme() || mainData.themes.default;
    const currentLocale = getViewLang() || mainData.locales.default;
    setViewLang(currentLocale);
    setViewTheme(currentTheme);
    return {currentTheme, currentLocale};
}

async function initBasicPage(theme, locale) {
    try {
        const mainSection = document.getElementById("main-section");
        await createBasicStructure(mainSection, theme, locale);
    } catch (error) {
        console.error("Error loading page: ", error);
        throw error;
    }
}

export function createLoadingScreen(main) {
    const container = document.createElement("template");
    const wave = document.createElement("div");

    container.id = "loading-screen";
    wave.classList.add("loading-wave");

    for (let i = 0; i < 4; i++) {
        let waveBar = document.createElement("div");
        waveBar.classList.add("loading-bar");
        wave.appendChild(waveBar);
    }

    container.appendChild(wave);
    main.appendChild(container);
}

export function deleteLoadingScreen(container) {
    // Timer loading screen deletion
    /*setTimeout(function () {
        container.removeChild(document.getElementById("loading-screen"));
    }, 1500);*/
    container.removeChild(document.getElementById("loading-screen"));
}

export function createIcon(iconClasses, label) {
    let icon = document.createElement("i");
    if (iconClasses) {
        for (const iconClass of iconClasses) {
            icon.classList.add(iconClass);
        }
    }
    icon.setAttribute("role", "img");
    if (label) icon.setAttribute("aria-label", label);
    return icon;
}

export function createPathReference(path, buttonId, buttonRef) {
    const pathParts = path.split("/");
    const pathLength = pathParts.length;

    if ((pathParts[pathLength - 1] === buttonRef) || (isRoot(path) && (buttonId === "index"))) {
        return "#top";
    } else {
        return addBackPath((buttonRef), (getPathDepth(pathParts[1], pathLength)));
    }
}

export function getPathnameSplit(path) {
    const pathParts = path.split("/");
    const pathLength = pathParts.length;

    return {pathParts, pathLength};
}

export function getCurrentView(path) {
    const info = getPathnameSplit(path);
    return info.pathParts[info.pathLength - 1];
}

export function getCurrentDirectory(path) {
    const info = getPathnameSplit(path);
    return info.pathParts[info.pathLength - 2];
}

export function getPreviousDirectory(path) {
    const info = getPathnameSplit(path);
    return info.pathParts[info.pathLength - 3];
}

export function addBackPath(path, depth) {
    if (depth === 0) return "./" + path; else return "../".repeat(depth) + path;
}

export function isRoot(path) {
    return ["", "warships-wiki"].includes(path);
}

export function getPathDepth(root, length) {
    return (length - ((root === "warships-wiki") ? 3 : 2));
}

export function updateMetadata(theme, locale) {
    const viewId = getCurrentView(window.location.pathname).slice(0, -5);
    if (viewId === "") document.title = mainData.views[0].title[locale]; else {
        const view = mainData.views.find(view => (view.hasOwnProperty("subId") ? view.subId : view.id) === viewId);
        setOGTitle(view.title[locale]);
        setTwitterTitle(view.title[locale]);
        setViewLang(locale);
        setViewTheme(theme);
        setTitle(view.title[locale]);
        setOGUrl(window.location.href);
        setTwitterUrl(window.location.href);
        setDescription(mainData.description[locale]);
        setOGDescription(mainData.description[locale]);
        setTwitterDescription(mainData.description[locale]);
    }
}

async function createHeader(locale) {
    const header = document.getElementById("main-header");
    header.classList.add("disable-select");

    const title = document.createElement("h1");
    header.appendChild(title);
    updateHeader(locale);
}

function updateHeader(locale) {
    const title = document.querySelector("h1");
    title.textContent = mainData.header.title[locale];
}

async function createFooter(locale) {
    const footer = document.getElementById("main-footer");
    const footerData = mainData.footer;

    createSocialIcons(footerData.socialButtons, footer, locale);
    createDonationBanner(footerData.donationButton, footer);
    createDeveloperInfo(footerData.developerButton, footer);
    updateFooter(locale);
}

function createSocialIcons(data, container, locale) {
    const icons = document.createElement("div");
    icons.classList.add("social-icons");

    data.forEach((button) => {
        icons.appendChild(createSocialIcon(button, locale));
    });
    container.appendChild(icons)
}

function createDonationBanner(data, container) {
    const banner = document.createElement("a");
    banner.classList.add("donate-banner");
    banner.setAttribute("href", data.reference);
    container.appendChild(banner);
}

function createDeveloperInfo(data, container) {
    const info = document.createElement("div");
    info.classList.add("developer-info");
    container.appendChild(info);
}

function createSocialIcon(data, locale) {
    let socialIcon = document.createElement("a");
    socialIcon.classList.add("social-icon");
    socialIcon.setAttribute("href", data.reference);

    socialIcon.appendChild(createIcon(["fab", `fa-${data.icon.toLowerCase()}`], data.title[locale]));
    return socialIcon;
}

async function createBasicStructure(container, theme, locale) {
    await createNavbar(theme, locale);
    await createHeader(locale);
    await createFooter(locale);
}

function updateFooter(locale) {
    const socialIcons = document.querySelectorAll(".social-icon");
    const donateBanner = document.querySelector(".donate-banner");
    const developerInfo = document.querySelector(".developer-info");
    const footerData = mainData.footer;

    updateSocialIcons(footerData.socialButtons, socialIcons, locale);
    updateDonationBanner(footerData.donationButton, donateBanner, locale);
    updateDeveloperInfo(footerData.developerButton, developerInfo, locale);
}

function updateSocialIcons(data, container, locale) {
    data.forEach((button, index) => {
        container[index].setAttribute("title", button.title[locale]);
    });
}

function updateDonationBanner(data, container, locale) {
    container.setAttribute("title", data.title[locale]);
    container.textContent = data.title[locale];

    container.appendChild(createIcon(["fas", `fa-${data.icon.toLowerCase()}`], data.title[locale]));
}

function updateDeveloperInfo(data, container, locale) {
    container.textContent = (data.title[locale] + " ");

    const link = document.createElement("a");
    link.setAttribute("title", data.title[locale] + " " + data.name);
    link.setAttribute("href", data.reference);
    link.textContent = data.name;
    container.appendChild(link);
}

export function updateLang(locale) {
    updateNavbar(locale);
    toggleTheme(getViewTheme());
    updateHeader(locale);
    updateFooter(locale);
    updateMetadata(getViewTheme(), locale);
}

export function getArticleContent(container) {
    return container.querySelector(".article-content");
}

export function createCountryCard(data, section, type, locale) {
    const colors = data.colors;
    const primary = colors.primary;
    const secondary = colors.secondary;
    const tertiary = colors.tertiary;
    const fontColor = colors.text;

    const card = document.createElement("div");
    card.classList.add("card");

    const container = document.createElement("a");
    container.setAttribute("href", `/${section}/${type}.html?id=${data.id}`);
    container.classList.add("card-wave-container");

    const wave = createSimpleDiv(container, "card-wave");
    wave.style.boxShadow = `inset 0 0 8px 2px rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 1)`;
    wave.style.background = `linear-gradient(30deg, rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 1), rgba(${tertiary.r}, ${tertiary.g}, ${tertiary.b}, 1))`;

    const waveInner = createSimpleDiv(container, "card-wave-inner");
    waveInner.style.background = `rgba(${primary.r}, ${primary.g}, ${primary.b}, 1)`;

    const cardTitle = createSimpleDiv(container, "card-title", data.title[locale]);
    cardTitle.style.color = `rgba(${fontColor.r}, ${fontColor.g}, ${fontColor.b}, 1)`;

    card.appendChild(container);
    return card;
}

export function createArticle(isCollapsible, isCollapsed, title, subtitle, containerId, containerClasses, headerClasses, contentClasses) {
    const container = document.createElement("article");
    if (containerId) container.setAttribute("id", containerId);
    if (containerClasses) for (let c of containerClasses.split(",")) container.classList.add(c.trim());


    const header = document.createElement("h2");
    header.classList.add("article-header", "disable-select");
    if (headerClasses) for (let c of headerClasses.split(",")) header.classList.add(c.trim());
    header.textContent = title;
    container.appendChild(header);

    const content = document.createElement("div");
    content.classList.add("article-content");
    if (contentClasses) for (let c of contentClasses.split(",")) container.classList.add(c.trim());

    if (subtitle !== "") {
        const contentSubtitle = document.createElement("small");
        contentSubtitle.textContent = subtitle;
        header.append(contentSubtitle);
    }

    if (isCollapsible) {
        container.classList.add("collapsible");
        let headerIcon = document.createElement("i");
        headerIcon.classList.add("collapsible-icon", "fa-solid", "fa-caret-up");
        header.appendChild(headerIcon);
    }
    if (isCollapsed) container.classList.add("collapsed");

    container.appendChild(content);
    return container;
}

export function createNavCards(data, containerId, classes, type, locale) {
    const container = document.getElementById(containerId);
    container.classList.add("nav-cards");
    data.content.forEach((item) => {
        getArticleContent(container).appendChild(createNavCard(item.id, item.title[locale], ((item.hasOwnProperty("backPath")) ? item.backPath : ""), classes, type, ((item.hasOwnProperty("background")) ? item.background : ""), (item.hasOwnProperty("prevId") ? new URLSearchParams(location.search).get("id") : "")));
    });
}

export function createResourcesCards(data, containerId, type, locale) {
    const container = document.getElementById(containerId);
    container.classList.add("resources-container");
    const sectionData = (type === "news") ? newsData : articlesData;

    if (data) {
        for (let id of data) {
            const item = sectionData.find(item => item.id === id);
            getArticleContent(container).appendChild(createResourceCard(item, type, locale));
        }
    } else {
        sectionData.slice(0, 4).forEach((item) => {
            if (!data || data.includes(item.id)) {
                getArticleContent(container).appendChild(createResourceCard(item, type, locale));
            }
        });
    }
}

export function createSectionsArticles(sections, container, locale) {
    for (let section of sections) {
        container.appendChild(createArticle(true, false, section.title[locale], (section.hasOwnProperty("subtitle") ? section.subtitle[locale] : ""), section.id));
    }
}

export function createTextArticles(data, sections, locale) {
    for (let sectionId of sections) {
        let sectionData = getSectionData(data, sectionId);
        for (let content of sectionData.content) {
            let paragraph = document.createElement("p");
            let contentText = content[locale];
            let lines = contentText.split('\n');
            lines.forEach(line => {
                if (line.trim() !== '') {
                    let description = document.createElement("span");
                    if (line.trim().startsWith("\\b")) {
                        description.textContent = "\u2022 " + line.trim().substring(2);
                    } else {
                        description.textContent = line.trim();
                    }
                    paragraph.appendChild(description);
                    paragraph.appendChild(document.createElement("br")); // Salto de línea
                }
            });

            let container = document.getElementById(sectionId);
            container.classList.add("text-article");
            getArticleContent(container).appendChild(paragraph);
        }
    }
}

export function createLinksArticle(container, data, locale) {
    for (let linkData of data) {
        let linkContainer = document.createElement("a");
        linkContainer.textContent = linkData.title[locale];
        linkContainer.setAttribute("href", linkData.reference);
        linkContainer.setAttribute("title", linkData.title[locale]);
        linkContainer.setAttribute("target", "_blank");
        getArticleContent(container).appendChild(linkContainer);
    }
    container.classList.add("text-article");
}

export function createInnerTextArticles(parentContainer, data, locale) {
    for (let description of data.description) {
        let container = createArticle(true, false, description.title[locale], (description.hasOwnProperty("subtitle") ? description.subtitle[locale] : ""), "", "inner-article");
        for (let content of description.content) {
            let descriptionContainer = document.createElement("p");
            descriptionContainer.textContent = content[locale];
            getArticleContent(container).appendChild(descriptionContainer);
        }
        getArticleContent(parentContainer).appendChild((container));
    }
}

export function createVideosArticle(data, containerId, locale) {
    let sectionData = getSectionData(data, containerId);
    let videosContainer = getArticleContent(document.getElementById(containerId));
    for (let videoData of sectionData.content) {
        let video = document.createElement("iframe");
        video.title = videoData.title[locale];
        video.src = videoData.reference;
        video.allowFullscreen = true;
        videosContainer.appendChild(video);
    }
}

export function createImagesArticle(data, containerId) {
    let imagesContainer = getArticleContent(document.getElementById(containerId));
    for (let image of data) {
        createImage(imagesContainer, "", image.src, image.alt);
    }
}

export function createNavCard(id, title, refBackPath, classes, type, imageURL, prevId) {
    const card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");
    if (classes) container.classList.add(classes);

    if (refBackPath && type === "dynamic") {
        container.setAttribute("href", refBackPath + ".html?id=" + id + ((prevId) ? "&prevId=" + prevId : ""));
    } else {
        container.setAttribute("href", ((refBackPath) ? refBackPath : "") + id + ".html");
    }

    if (imageURL) card.style.backgroundImage = "url(" + imageURL + ")";
    container.textContent = title;

    card.appendChild(container);
    return card;
}

export function getSectionData(data, sectionId) {
    return data.sections.find(section => section.id === sectionId);
}

export function createSimpleDiv(parent, classes, title) {
    const container = document.createElement("div");
    container.classList.add(classes);
    if (title) container.textContent = title;
    parent.appendChild(container);
    return container;
}

export function createImage(parent, classes, source, altText) {
    const container = document.createElement("img");
    container.setAttribute("src", source);
    container.setAttribute("alt", altText);
    for (let c of classes) container.classList.add(classes);
    parent.appendChild(container);
    return container;
}

export function createResourceCard(data, type, locale) {
    let container = document.createElement("a");
    container.classList.add("nav-resource");
    container.setAttribute("href", data.reference);
    container.setAttribute("target", "_blank");
    container.setAttribute("data-resource-id", data.id);
    container.setAttribute("data-resource-type", type);

    let card = createSimpleDiv(container, "resource-card");
    let imageBox = createSimpleDiv(card, "resource-card-image-box");
    createImage(imageBox, "resource-card-img", data.image, data.title[locale]);

    let cardTextBox = createSimpleDiv(card, "resource-card-text-box");
    createSimpleDiv(cardTextBox, "resource-card-title", data.title[locale]);
    createSimpleDiv(cardTextBox, "resource-card-subtitle", data.subtitle[locale]);
    createSimpleDiv(cardTextBox, "resource-card-bar");
    createSimpleDiv(cardTextBox, "resource-card-description", data.shortDescription[locale]);

    return container;
}

export function setCollapsibles() {
    const containers = document.querySelectorAll('.collapsible');
    containers.forEach(function (container) {
        container.querySelector(".article-header").addEventListener("click", function () {
            this.parentElement.classList.toggle("collapsed");
            let icon = this.querySelector("i");
            icon.classList.toggle('rotate');
        });
    });
}

export function addLangEventListener(data, initView, createBasicStructure) {
    const langOptions = document.querySelectorAll(".lang-option");
    for (let langOption of langOptions) {
        langOption.addEventListener("click", function () {
            initView(data, langOption.dataset.langId, createBasicStructure);
            setViewLang(langOption.dataset.langId);
        });
    }
}