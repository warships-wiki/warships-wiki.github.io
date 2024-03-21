import { data as calculationsData } from "../../data-sources/views/calculations.js";
import {createArticle, setCollapsibles} from "../basic-structure/main.js";
const convertersData = calculationsData.sections[0];

document.addEventListener("DOMContentLoaded", async function () {
    let currentLocale = localStorage.getItem("currentLocale");
    await createBasicStructure(document.getElementById('main-section'), currentLocale);
    setCollapsibles();
});

async function initConverters(container) {
    try {
        let currentLocale = localStorage.getItem("currentLocale");
        for (let i = 0; i < 3; i++) {
            for (const unitType of convertersData.types) {
                generateCommonConverterCard(container, unitType, currentLocale, i);
            }
        }
        addListenerUpdateLang();
    } catch (error) {
        console.error("Error loading converters: ", error);
        throw error;
    }
}

async function createBasicStructure(container, locale) {
    await createConverters(container, locale);
}

async function createConverters(parentContainer, locale) {
    const container = createArticle(true,false, calculationsData.title[locale],"","converters");
    container.setAttribute("id", "converters");
    await initConverters(container.querySelector(".article-content"));
    parentContainer.appendChild(container);
}

function generateCommonConverterCard(container, unitType, locale, converterIndex) {
    const defaultName = unitType.title["en"].toLowerCase();

    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("header");
    header.classList.add("card-header", "flex-m");
    header.textContent = unitType.title[locale];
    header.setAttribute("data-unit-name", defaultName.toLowerCase());

    const form = document.createElement("form");
    form.classList.add("flex-m");

    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "flex-m");
    inputGroup.setAttribute("data-unit-name", defaultName.toLowerCase());

    const inputLabel = document.createElement("label");
    inputLabel.textContent = convertersData.placeholders.input[locale];
    inputLabel.setAttribute("for", `${defaultName}-value-input-${converterIndex}`);

    const inputValue = document.createElement("input");
    inputValue.type = "number";
    inputValue.placeholder = convertersData.placeholders.input[locale];
    inputValue.classList.add("input-value");
    inputValue.id = `${defaultName}-value-input-${converterIndex}`;

    const selectFrom = createSelect(unitType.units.en, unitType.units[locale]);
    selectFrom.setAttribute("title", convertersData.placeholders.inputSelect[locale]);
    selectFrom.id = `${defaultName}-select-from-${converterIndex}`;
    selectFrom.name = `${defaultName}-select-from`;

    inputGroup.appendChild(inputLabel);
    inputGroup.appendChild(inputValue);
    inputGroup.appendChild(selectFrom);

    const outputGroup = document.createElement("div");
    outputGroup.classList.add("output-group", "flex-m");
    outputGroup.setAttribute("data-unit-name", defaultName.toLowerCase());

    const outputLabel = document.createElement("label");
    outputLabel.textContent = convertersData.placeholders.output[locale];
    outputLabel.setAttribute("for", `${defaultName}-result-output-${converterIndex}`);

    const outputValue = document.createElement("input");
    outputValue.type = "text";
    outputValue.placeholder = convertersData.placeholders.output[locale];
    outputValue.readOnly = true;
    outputValue.classList.add("output-value");
    outputValue.id = `${defaultName}-result-output-${converterIndex}`;

    const selectTo = createSelect(unitType.units.en, unitType.units[locale]);
    selectTo.setAttribute("title", convertersData.placeholders.outputSelect[locale]);
    selectTo.id = `${defaultName}-select-to-${converterIndex}`;
    selectTo.name = `${defaultName}-select-to`;

    outputGroup.appendChild(outputLabel);
    outputGroup.appendChild(outputValue);
    outputGroup.appendChild(selectTo);

    form.appendChild(inputGroup);
    form.appendChild(outputGroup);
    card.appendChild(header);
    card.appendChild(form);

    inputValue.addEventListener('input', () => {
        calculateConversion(inputValue.value, selectFrom.value, selectTo.value, outputValue, unitType.conversions);
    });

    selectFrom.addEventListener('change', () => {
        calculateConversion(inputValue.value, selectFrom.value, selectTo.value, outputValue, unitType.conversions);
    });

    selectTo.addEventListener('change', () => {
        calculateConversion(inputValue.value, selectFrom.value, selectTo.value, outputValue, unitType.conversions);
    });

    container.appendChild(card);
}

function createSelect(defaultUnits, localizedUnits) {
    let select = document.createElement('select');

    if (defaultUnits && localizedUnits && defaultUnits.length === localizedUnits.length) {
        defaultUnits.forEach((defaultUnit, i) => {
            let option = document.createElement('option');
            let englishValue = defaultUnit.toLowerCase();
            let localizedValue = localizedUnits[i];

            option.value = englishValue;
            option.textContent = localizedValue;

            select.appendChild(option);
        });
    }
    return select;
}

function calculateConversion(value, fromUnit, toUnit, output, conversions) {
    if ((!isNaN(value) && value !== '')) {
        let baseValue = value * conversions[fromUnit].toMain;
        let result = baseValue * conversions[toUnit].fromMain;
        output.value = (Number.isInteger(result)) ? result.toFixed(0) : result.toFixed(3);
    } else {
        output.value = '';
    }
}

function updateLang(locale) {

    const convertersContainers = document.getElementById('converters');

    convertersContainers.querySelector(".article-header").textContent = convertersData.title[locale]

    const cardHeaders = convertersContainers.querySelectorAll('.card header');
    cardHeaders.forEach(header => {
        let unitName = header.dataset.unitName.toLowerCase();
        let unitType = convertersData.types.find(unitType => unitType.title.en.toLowerCase() === unitName);
        header.textContent = unitType.title[locale];
    });

    const inputGroups = convertersContainers.querySelectorAll('.card .input-group');
    inputGroups.forEach(inputGroup => {
        let unitName = inputGroup.dataset.unitName.toLowerCase();
        let unitType = convertersData.types.find(unitType => unitType.title.en.toLowerCase() === unitName);

        let units = unitType.units[locale];

        let label = inputGroup.querySelector('label');
        let input = inputGroup.querySelector('input');
        let select = inputGroup.querySelector('select');
        let options = inputGroup.querySelectorAll('option');

        label.textContent = convertersData.placeholders.input[locale];
        label.setAttribute("title", convertersData.placeholders.inputSelect[locale]);
        input.placeholder = convertersData.placeholders.inputSelect[locale];
        select.setAttribute("title", convertersData.placeholders.outputSelect[locale]);

        options.forEach((option, index) => {
            option.textContent = units[index];
        });
    });

    const outputGroups = convertersContainers.querySelectorAll('.card .output-group');
    outputGroups.forEach(outputGroup => {
        let unitName = outputGroup.dataset.unitName.toLowerCase();
        let unitType = convertersData.types.find(unitType => unitType.title.en.toLowerCase() === unitName);

        let units = unitType.units[locale];

        let label = outputGroup.querySelector('label');
        let output = outputGroup.querySelector('input');
        let select = outputGroup.querySelector('select');
        let options = outputGroup.querySelectorAll('option');

        label.textContent = convertersData.placeholders.output[locale];
        label.setAttribute("title", convertersData.placeholders.outputSelect[locale]);
        output.placeholder = convertersData.placeholders.outputSelect[locale];
        select.setAttribute("title", convertersData.placeholders.outputSelect[locale]);

        options.forEach((option, index) => {
            option.textContent = units[index];
        });
    });

    addListenerUpdateLang();
}

function addListenerUpdateLang() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(langOption => {
        langOption.addEventListener("click", function () {
            updateLang(langOption.dataset.langId);
        });
    });
}