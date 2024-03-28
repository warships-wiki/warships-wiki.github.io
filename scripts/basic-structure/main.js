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

document.addEventListener("DOMContentLoaded", async function () {
    const {currentTheme, currentLocale} = await setBasicInfo();
    await initBasicPage(currentTheme, currentLocale);
});

async function setBasicInfo() {
    const currentTheme = getViewTheme() || mainData.themes.default;
    const currentLocale = getViewLang() || mainData.locales.default;
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

export function createCompleteNavCard(data, locale) {
    const card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");
    if (!data.disabled) container.setAttribute("href", createPathReference(window.location.pathname, data.id, data.reference));
    container.appendChild(data.title[locale]);
    container.appendChild(data.year[locale]);
    container.appendChild(data.type[locale]);
    container.appendChild(data.subtitle[locale]);
    container.setAttribute("data-button-id", data.id);

    card.appendChild(container);
    return card;
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
    card.setAttribute("data-country-id", data.id);

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
    if (containerClasses) container.classList.add(containerClasses);
    if (isCollapsible) container.classList.add("collapsible");
    if (isCollapsed) container.classList.add("collapsed");

    const header = document.createElement("h2");
    header.classList.add("article-header");
    if (headerClasses) header.classList.add(headerClasses);
    header.textContent = title;
    container.appendChild(header);

    const content = document.createElement("div");
    content.classList.add("article-content");
    if (contentClasses) header.classList.add(contentClasses);
    if (subtitle !== "") {
        const contentSubtitle = document.createElement("small");
        contentSubtitle.textContent = subtitle;
        header.append(contentSubtitle);
    }
    container.appendChild(content);
    return container;
}

export function createNavCards(data, containerId, classes, type, locale) {
    const container = document.getElementById(containerId);
    container.classList.add("nav-cards");
    data.content.forEach((item) => {
        getArticleContent(container).appendChild(createNavCard(item.id, item.title[locale], ((item.hasOwnProperty("backPath")) ? item.backPath : ""), classes, type));
    });
}

export function createNavCard(id, title, refBackPath, classes, type) {
    const card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("a");
    container.classList.add("nav-card");
    if (classes) container.classList.add(classes);

    if (refBackPath && type === "dynamic") {
        container.setAttribute("href", refBackPath + ".html?id=" + id);
    } else {
        container.setAttribute("href", ((refBackPath) ? refBackPath : "") + id + ".html");
    }

    //container.setAttribute(attrName, id);
    container.textContent = title;

    card.appendChild(container);
    return card;
}

export function getSectionData(data, sectionId) {
    return data.sections.find(section => section.id === sectionId)
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
    container.classList.add(classes);
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
        });
    });
}

export function addLangEventListener(initView) {
    const langOptions = document.querySelectorAll(".lang-option");
    for (let langOption of langOptions) {
        langOption.addEventListener("click", function () {
            initView(langOption.dataset.langId);
        });
    }
}