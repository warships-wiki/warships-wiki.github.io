import {data as mainData} from "../../data-sources/basic-data/main.js";
import {createNavbar, toggleTheme, updateNavbar} from "./nav-bar.js";
import {
    setDescription,
    setOGDescription,
    setOGTitle,
    setOGUrl,
    setTitle,
    setTwitterDescription,
    setTwitterTitle,
    setTwitterUrl
} from "./meta.js";

document.addEventListener("DOMContentLoaded", async function () {
    const {currentTheme, currentLocale} = await setBasicInfo();
    await initBasicPage(currentTheme, currentLocale);
});

async function setBasicInfo() {
    const currentTheme = localStorage.getItem("currentTheme") || mainData.themes.default;
    const currentLocale = localStorage.getItem("currentLocale") || mainData.locales.default;
    localStorage.setItem("currentTheme", currentTheme);
    localStorage.setItem("currentLocale", currentLocale);
    return {currentTheme, currentLocale};
}

async function initBasicPage(theme, locale) {

    try {
        const mainSection = document.getElementById("main-section");
        await createLoadingScreen(mainSection);
        await createBasicStructure(mainSection, theme, locale);
        deleteLoadingScreen(mainSection);
    } catch (error) {
        console.error("Error loading page: ", error);
        throw error;
    }
}

async function createLoadingScreen(main) {
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

function deleteLoadingScreen(main) {
    setTimeout(function () {
        const loadingScreen = document.getElementById("loading-screen");
        main.removeChild(loadingScreen);
    }, 1500);
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

function addBackPath(path, depth) {
    if (depth === 0) return "./" + path; else return "../".repeat(depth) + path;
}

function isRoot(path) {
    return ["", "warships-wiki"].includes(path);
}

function getPathDepth(root, length) {
    return (length - ((root === "warships-wiki") ? 3 : 2));
}

function updateMetadata(locale) {
    const viewId = getCurrentView(window.location.pathname).slice(0, -5);
    if (viewId === "") document.title = mainData.views[0].title[locale]; else {
        const view = mainData.views.find(view => view.id === viewId);
        setTitle(view.title[locale]);
        setOGTitle(view.title[locale]);
        setTwitterTitle(view.title[locale]);
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
    updateMetadata(locale);
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
    updateMetadata(locale);
    updateNavbar(locale);
    toggleTheme(localStorage.getItem("currentTheme"));
    updateHeader(locale);
    updateFooter(locale);
    localStorage.setItem("currentLocale", locale);
}

export function createArticle(isCollapsible, isCollapsed, title, subtitle, containerClasses, headerClasses, contentClasses) {
    const container = document.createElement("article");
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
        const contentTitle = document.createElement("h3");
        contentTitle.textContent = subtitle;
        content.appendChild(contentTitle);
    }
    container.appendChild(content);

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