import {data as calculationsData} from "../../data-sources/views/calculations.js";
import {createSectionsArticles, getArticleContent, getSectionData, initView} from "../basic-structure/main.js";
import {getViewLang} from "../basic-structure/meta.js";

const convertersData = getSectionData(calculationsData, "converters");


document.addEventListener("DOMContentLoaded", async function () {
    initView(calculationsData, getViewLang(), createBasicStructure);
});

async function initConverters(container) {
    try {
        let currentLocale = getViewLang();
        for (let i = 0; i < 3; i++) {
            for (const unitType of convertersData.types) {
                generateCommonConverterCard(container, unitType, currentLocale, i);
            }
        }
    } catch (error) {
        console.error("Error loading converters: ", error);
        throw error;
    }
}

function createPenetrationCalculator(data, container, locale) {
    createPenetrationForm(calculationsData, container, "input", 2, locale);
    createPenetrationForm(calculationsData, container, "results", 5, locale);
}

function calculatePenetration() {
    const convertToDegrees = (2 * Math.PI) / 360.0;

    const inputs = document.querySelectorAll("#armor-pen-input .input-value");
    const range1 = parseInt(inputs[0].value) || 0;
    const angle1 = (parseInt(inputs[2].value) || 0) * convertToDegrees;
    const pen1 = parseInt(inputs[1].value) / Math.pow(Math.cos(angle1), 1.5);
    if (!inputs[3].value) inputs[3].value = 500;
    const range2 = parseInt(inputs[3].value);
    const angle2 = (parseInt(inputs[5].value) || 0) * convertToDegrees;
    const pen2 = parseInt(inputs[4].value) / Math.pow(Math.cos(angle2), 1.5);

    const c2 = Math.log(Math.pow(pen2, 1.4286) / Math.pow(pen1, 1.4286)) / (-range2 + range1);
    const c1 = Math.pow(pen1, 1.4286) * Math.exp(range1 * c2);

    const outputForms = document.querySelectorAll("#armor-pen-results .output-value");

    for (let i = 0; i < outputForms.length; i += 3) {

        let range = outputForms[i].value || i * 100 + 100;
        let newPen = Math.pow((c1 * Math.exp(-c2 * range)), 0.7);
        let angle = outputForms[i + 2].value;
        if (angle !== "") newPen = newPen * Math.pow(Math.cos(parseInt(angle) * convertToDegrees), 1.5);

        outputForms[i].value = range;
        outputForms[i + 1].value = Math.round(newPen, 2);
        outputForms[i + 2].value = angle;
    }
}

function createPenetrationForm(data, container, title, rows, locale) {
    const penetrationData = getSectionData(data, "armor-pen");

    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("header");
    header.classList.add("card-header", "flex-m");
    header.textContent = penetrationData[(title === "results") ? "results" : "title"][locale];

    const form = document.createElement("form");
    form.classList.add("flex-m");
    form.setAttribute("id", `armor-pen-${title}`);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < 3; j++) {

            let inputGroup = document.createElement("div");
            inputGroup.classList.add("flex-m", ((title === "results") ? "output-group" : "input-group"));

            const inputLabel = document.createElement("label");
            inputLabel.textContent = (i !== 0) ? "" : penetrationData.labels[(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')][locale];
            inputLabel.setAttribute("for", `${(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')}-value-${((title === "results") ? "output" : "input")}-${i}`);

            const inputValue = document.createElement("input");
            inputValue.type = "number";
            inputValue.placeholder = penetrationData.placeholders[(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')][locale];
            inputValue.classList.add((title === "results") ? "output-value" : "input-value");
            if (title === "results" && (j === 1)) inputValue.readOnly = true;
            inputValue.id = `${(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')}-value-${((title === "results") ? "output" : "input")}-${i}`;
            inputGroup.appendChild(inputLabel);
            inputGroup.appendChild(inputValue);

            form.appendChild(inputGroup);
            container.appendChild(card);
        }
    }

    if (title === "input") {
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.classList.add("flex-m", "button");
        button.textContent = penetrationData.button[locale];
        button.addEventListener("click", calculatePenetration);
        form.appendChild(button);
    }

    card.appendChild(header);
    card.appendChild(form);
}

async function createBasicStructure(container, locale) {
    createSectionsArticles(calculationsData.sections, container, locale);
    await initConverters(getArticleContent(document.getElementById("converters")));
    await createPenetrationCalculator(calculationsData, getArticleContent(document.getElementById("armor-pen")), locale);
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

//OLD VERSION
/*document.addEventListener("DOMContentLoaded", async function () {
    let currentLocale = getViewLang();
    await createBasicStructure(document.getElementById('main-section'), currentLocale);
    setCollapsibles();
});

async function updateLang(locale) {
    const parentContainer = document.getElementById("main-section");
    parentContainer.removeChild(document.getElementById("armor-pen"));
    createPenetrationCalculator(calculationsData, document.getElementById("main-section", locale));

    const convertersContainer = document.getElementById('converters');
    const convertersHeader = convertersContainer.querySelector(".article-header");
    convertersContainer.querySelector(".article-header").textContent = convertersData.title[locale];
    let headerIcon = document.createElement("i");
    headerIcon.classList.add("collapsible-icon", "fa-solid", "fa-caret-up");
    convertersHeader.appendChild(headerIcon);

    const cardHeaders = convertersContainer.querySelectorAll('.card header');
    cardHeaders.forEach(header => {
        let unitName = header.dataset.unitName.toLowerCase();
        let unitType = convertersData.types.find(unitType => unitType.title.en.toLowerCase() === unitName);
        header.textContent = unitType.title[locale];
    });

    const inputGroups = convertersContainer.querySelectorAll('.card .input-group');
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

    const outputGroups = convertersContainer.querySelectorAll('.card .output-group');
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
        langOption.addEventListener("click", async function () {
            await updateLang(langOption.dataset.langId);
        });
    });
}*/