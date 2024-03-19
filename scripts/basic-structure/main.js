import {data as mainData} from "../data-sources/main.js";
import {createNavbar, toggleTheme, updateNavbar} from "./basic-structure/nav-bar.js";

document.addEventListener("DOMContentLoaded", async function () {
    const {currentTheme, currentLocale} = await setBasicInfo();
    await initBasicPage(currentTheme, currentLocale);

    const collapsibleContainers = document.querySelectorAll('.collapsible');

    collapsibleContainers.forEach(function (header) {
        header.addEventListener("click", function () {
            this.parentElement.classList.toggle("collapsed");
        });
    });
});

async function setBasicInfo() {
    let currentTheme = localStorage.getItem("currentTheme") || mainData.themes.default;
    let currentLocale = localStorage.getItem("currentLocale") || mainData.locales.default;
    localStorage.setItem("currentTheme", currentTheme);
    localStorage.setItem("currentLocale", currentLocale);
    return {currentTheme, currentLocale};
}

async function initBasicPage(theme, locale) {

    try {
        const mainSection = document.querySelector("section");
        mainSection.setAttribute("id", "main-section");
        await createLoadingScreen(mainSection);
        updateTitle(locale);
        await createNavbar(theme, locale);
        await createBasicStructure(mainSection, locale);
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

function updateTitle(locale) {
    const viewId = getCurrentView(window.location.pathname).slice(0, -5);
    if (viewId === "") document.title = mainData.views[0].translations[locale]; else {
        const view = mainData.views.find(view => view.id === viewId);
        document.title = view.translations[locale];
    }
}

async function createHeader(locale) {
    const header = document.querySelector("header");
    header.classList.add("disable-select");
    header.setAttribute("id", "main-header");

    const title = document.createElement("h1");
    header.appendChild(title);
    updateHeader(locale);
}

function updateHeader(locale) {
    const title = document.querySelector("h1");
    title.textContent = mainData.header.translations[locale];
}

async function createFooter(locale) {
    const footer = document.querySelector("footer");
    footer.setAttribute("id", "main-footer");

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

    socialIcon.appendChild(createIcon(["fab", `fa-${data.icon.toLowerCase()}`], data.translations[locale]));
    return socialIcon;
}

async function createBasicStructure(container, locale) {
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
        container[index].setAttribute("title", button.translations[locale]);
    });
}

function updateDonationBanner(data, container, locale) {
    container.setAttribute("title", data.translations[locale]);
    container.textContent = data.translations[locale];

    container.appendChild(createIcon(["fas", `fa-${data.icon.toLowerCase()}`], data.translations[locale]));
}

function updateDeveloperInfo(data, container, locale) {
    container.textContent = (data.translations[locale] + " ");

    const link = document.createElement("a");
    link.setAttribute("title", data.translations[locale] + " " + data.name);
    link.setAttribute("href", data.reference);
    link.textContent = data.name;
    container.appendChild(link);
}

export function updateLang(locale) {
    updateTitle(locale);
    updateNavbar(locale);
    toggleTheme(localStorage.getItem("currentTheme"));
    updateHeader(locale);
    updateFooter(locale);
    localStorage.setItem("currentLocale", locale);
}

export function createCollapsibleArticle() {

}