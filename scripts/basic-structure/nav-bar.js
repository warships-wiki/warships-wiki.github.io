import {data as mainData} from "../../data-sources/main.js";
import {createIcon, createPathReference, updateLang} from "../main.js";

export async function createNavbar(theme, locale) {
    const navbar = document.querySelector("nav");
    navbar.classList.add("disable-select");
    navbar.setAttribute("id", "nav-bar");

    navbar.appendChild(createNavButton(mainData.views[0], locale));
    navbar.appendChild(document.createElement("hr"));
    createLangSelector(navbar, locale);
    navbar.appendChild(document.createElement("hr"));

    mainData.views.forEach((button) => {
        if (button.hasOwnProperty("reference") && button.id !== "index") {
            navbar.appendChild(createNavButton(button, locale));
            if (button.hrAfter) navbar.appendChild(document.createElement("hr"));
        }
    });
    createThemeToggle(navbar, theme);
}

export function updateNavbar(locale) {
    const navbar = document.getElementById("nav-bar");
    mainData.views.forEach((button) => {
        if (button.hasOwnProperty("reference")) {
            let container = navbar.querySelector(`[data-button-id="${button.id}"]`);
            let icon = container.querySelector("i");
            let tooltip = container.querySelector("span");
            if (container) {
                icon.setAttribute("role", "img");
                icon.setAttribute("aria-label", button.translations[locale]);
                tooltip.innerHTML = button.translations[locale];
            }
        }
    });
    updateLangSelector(locale);
}

export function createNavButton(data, locale) {
    let container = document.createElement("a");
    container.classList.add("nav-button");
    container.setAttribute("data-button-id", data.id.toLowerCase());
    if (!data.disabled) container.setAttribute("href", createPathReference(window.location.pathname, data.id, data.reference));

    let icon = createIcon(["fas", `fa-${data.icon.toLowerCase()}`], data.translations[locale]);

    let tooltip = document.createElement("span");
    tooltip.innerHTML = data.translations[locale];

    container.append(icon, tooltip);
    return container;
}

export function createLangSelector(navbar, locale) {
    const container = document.createElement("span");
    const options = document.createElement("span");

    container.classList.add("nav-button");
    container.id = "lang-selector";
    options.classList.add("lang-options");

    container.appendChild(createIcon());
    container.appendChild(options);
    navbar.appendChild(container);

    updateLangSelector(locale);
}

export function createLangOption(optionData) {
    let option = createIcon(["lang-option", "fi", `fi-${optionData.icon}`, "fis"], optionData.name);
    let optionId = optionData.id;

    option.setAttribute("data-lang-id", optionId);
    option.addEventListener("click", function () {
        localStorage.setItem("currentLocale", optionId);
        updateLang(optionId);
    });

    return option;
}

export function updateLangSelector(locale) {
    const container = document.getElementById("lang-selector");
    const icon = container.querySelector("i");
    const localesData = mainData.locales;
    icon.setAttribute("aria-label", localesData[locale].name);
    icon.className = "fi fi-" + localesData[locale].icon + " fis";

    const options = container.querySelector(".lang-options");
    options.innerHTML = "";

    for (let lang in localesData) {
        if ((lang !== "default") && (lang !== locale)) {
            options.appendChild(createLangOption(localesData[lang]));
        }
    }
}

export function createThemeToggle(navbar, theme) {
    const container = document.createElement("span");

    container.classList.add("nav-button");
    container.setAttribute("id", "theme-toggle");

    navbar.appendChild(container);
    container.appendChild(createIcon());
    toggleTheme(theme);

    container.addEventListener("click", function () {
        let newTheme = localStorage.getItem("currentTheme") === "dark" ? "light" : "dark";
        toggleTheme(newTheme);
    });
}

export function toggleTheme(theme) {
    const locale = localStorage.getItem("currentLocale");
    const icon = document.getElementById("theme-toggle").querySelector("i");

    icon.className = `fas fa-${theme === "dark" ? "sun" : "moon"}`;
    icon.setAttribute("aria-label", theme === "dark" ? mainData.themes.lightTheme[locale] : mainData.themes.darkTheme[locale]);

    document.body.className = `${theme}-theme`;
    localStorage.setItem("currentTheme", theme);
}