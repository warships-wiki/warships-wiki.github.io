import {data as calculationsData} from "../../data-sources/views/calculations.js";
import {data as warshipsData} from "../../data-sources/modules/warshipsNations.js";
import {
    createSectionsArticles,
    getArticleContent,
    getSectionData,
    initView
} from "../basic-structure/main.js";
import {getViewLang} from "../basic-structure/meta.js";

const convertersData = getSectionData(calculationsData, "converters");


document.addEventListener("DOMContentLoaded", async function () {
    initView(calculationsData, getViewLang(), createBasicStructure);
});

async function initConverters(container, locale) {
    for (let i = 0; i < 3; i++) {
        for (const unitType of convertersData.types) {
            generateCommonConverterCard(container, unitType, locale, i);
        }
    }
}

function createPenetrationCalculator(data, container, locale) {
    createPenetrationForm(getSectionData(calculationsData, "armor-pen"), container, "input", 2, locale);
    createPenetrationForm(getSectionData(calculationsData, "armor-pen"), container, "results", 5, locale);
}

async function createBasicStructure(container, locale) {
    createSectionsArticles(calculationsData.sections, container, locale);
    await initConverters(getArticleContent(document.getElementById("converters")), locale);
    await createPenetrationCalculator(getSectionData(calculationsData, "armor-pen"), getArticleContent(document.getElementById("armor-pen")), locale);
    createAPForm(getArticleContent(document.getElementById("armor-piercing")), locale);
    updateSelects(locale);
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

    const selectFrom = createUnitsSelect(unitType.units.en, unitType.units[locale]);
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

    const selectTo = createUnitsSelect(unitType.units.en, unitType.units[locale]);
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

function createUnitsSelect(defaultUnits, localizedUnits) {
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

function compareArmorPiercing() {
    const penetrationValues = document.querySelectorAll('#penetration-value-0, #penetration-value-1, #penetration-value-2');

    if (penetrationValues[0].value && penetrationValues[1].value || (penetrationValues[0].value && penetrationValues[1].value && penetrationValues[2].value && document.querySelector("#armor-piercing-input-2-2").value)) {
        let apComparison = document.getElementById("ap-comparison");
        createAPComparison(getSectionData(calculationsData, "armor-piercing").comparison[getViewLang()], apComparison);
        apComparison.style.display = "flex";
    }
}

function createAPComparison(title, container) {
    container.innerHTML = "";

    const header = document.createElement("header");
    header.classList.add("card-header", "flex-m");
    header.textContent = title;
    container.appendChild(header);

    const comparison = document.createElement("div");
    comparison.classList.add("flex-m", "comparison");
    container.appendChild(comparison);

    const bullets = document.createElement("div");
    bullets.classList.add("bullets");
    comparison.appendChild(bullets);

    const steelBlock = document.createElement("div");
    steelBlock.classList.add("steel-block");
    comparison.appendChild(steelBlock);

    const penetrationValues = document.querySelectorAll('#penetration-value-0, #penetration-value-1, #penetration-value-2');
    const userInputCaliber = document.querySelector("#armor-piercing-input-2-2").value;

    for (let i = 0; i < ((penetrationValues[2].value && userInputCaliber) ? 3 : 2); i++) {
        let data = penetrationValues[i];

        let bullet = document.createElement("div");
        bullet.classList.add("bullet");
        bullet.style.height = (i < 2) ? ((data.dataset.ccaliber * 100) / 1000) + "%" : ((document.querySelector("#armor-piercing-input-2-2").value * 100) / 1000) + "%";
        bullet.style.backgroundImage = (i < 2) ? `url(../../../assets/modules/projectiles/${data.dataset.pnomen.toUpperCase()}.png)` : "";
        bullets.appendChild(bullet);

        const bulletLabel = document.createElement("label");
        bulletLabel.textContent = (i < 2) ? data.dataset.ccaliber + "mm" : userInputCaliber + "mm";
        bullet.appendChild(bulletLabel);

        let penGraph = document.createElement("div");
        penGraph.classList.add("pen-graph");
        penGraph.setAttribute("id", `pen-graph-${i}`);

        if (data.value >= 1000) penGraph.style.width = "100%"; else penGraph.style.width = ((data.value * 100) / 1000) + '%';
        penGraph.style.height = (i < 2) ? ((data.dataset.ccaliber * 100) / 1000) + "%" : ((userInputCaliber * 100) / 1000) + "%";

        penGraph.style.backgroundColor = "rgb(130,0,0)";

        let penGraphLabel = document.createElement("label");
        penGraphLabel.textContent = data.value + "mm";
        penGraph.appendChild(penGraphLabel);

        steelBlock.appendChild(penGraph);
    }
    const steelBlockLabel = document.createElement("label");
    steelBlockLabel.textContent = "1000mm";
    steelBlock.appendChild(steelBlockLabel);
}

function createSelect(options) {
    let select = document.createElement('select');
    options.forEach(value => {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    })
    return select;
}

function createAPForm(container, locale) {
    const formData = getSectionData(calculationsData, "armor-piercing");

    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("header");
    header.classList.add("card-header", "flex-m");
    header.textContent = formData.title;

    const form = document.createElement("form");
    form.classList.add("flex-m");
    card.appendChild(form);

    for (let l of formData.labels) {
        let colLabel = document.createElement("label");
        colLabel.classList.add("flex-m");
        colLabel.textContent = l[locale];
        form.appendChild(colLabel);
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 5; col++) {
            let inputGroup = document.createElement("div");
            inputGroup.classList.add("flex-m", "input-group");

            let inputValue;
            if (row < 2 && col < 4) {
                inputValue = document.createElement("select");
                inputValue.id = `${formData.labels[col]["en"].toLowerCase()}-select-${row}`;
                inputValue.title = formData.labels[col]["en"].toLowerCase();
            } else if (col === 4) {
                inputValue = document.createElement("input");
                inputValue.id = `${formData.labels[col]["en"].toLowerCase()}-value-${row}`;
                inputValue.title = formData.labels[col]["en"].toLowerCase();
            } else {
                inputValue = document.createElement("input");
                inputValue.id = `${formData.id}-input-${row}-${col}`;
                inputValue.readOnly = false;
            }

            if (row < 2) inputValue.readOnly = true;
            inputValue.placeholder = "...";
            inputValue.classList.add("input-value");
            if (row === 2 && col !== 4 && col !== 2) inputValue.hidden = true; else if (col === 4 || (row === 2 && col === 2)) inputValue.type = "number";
            if (row === 2 && col === 2) inputValue.placeholder = formData.placeholders[0][locale];
            if (row === 2 && col === 4) inputValue.placeholder = formData.placeholders[1][locale];
            inputGroup.appendChild(inputValue);

            form.appendChild(inputGroup);
        }
    }

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("flex-m", "button");
    button.textContent = formData.button[locale];
    button.addEventListener("click", compareArmorPiercing);
    form.appendChild(button);

    let legend = document.createElement("p");
    legend.classList.add("flex-m");
    legend.textContent = formData.legend[locale];
    form.appendChild(legend);
    container.appendChild(card);

    const apComparison = document.createElement("div");
    apComparison.classList.add("card");
    apComparison.setAttribute("id", "ap-comparison");
    apComparison.style.display = "none";
    container.appendChild(apComparison);
}

function updateSelects(locale) {

    const nationSelects = document.querySelectorAll('#nation-select-0, #nation-select-1');
    const warshipSelects = document.querySelectorAll('#warship-select-0, #warship-select-1');
    const cannonSelects = document.querySelectorAll('#cannon-select-0, #cannon-select-1');
    const projectileSelects = document.querySelectorAll('#projectile-select-0, #projectile-select-1');
    const penetrationValues = document.querySelectorAll('#penetration-value-0, #penetration-value-1');

    function fillSelectOptions(select, options) {
        select.innerHTML = '';
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.id;
            optionElement.textContent = option.name;
            select.appendChild(optionElement);
        });
    }

    function fillWarshipSelects(nationId, index) {
        const selectedNation = warshipsData.find(nation => nation.id === nationId);
        if (selectedNation && selectedNation.warshipClasses) {
            cannonSelects[index].innerHTML = '';
            projectileSelects[index].innerHTML = '';
            penetrationValues[index].value = '';
            fillSelectOptions(warshipSelects[index], selectedNation.warshipClasses);
        }
    }

    function fillCannonSelects(nationId, warshipId, index) {
        const selectedNation = warshipsData.find(nation => nation.id === nationId);
        if (selectedNation && selectedNation.warshipClasses) {
            const selectedWarshipClass = selectedNation.warshipClasses.find(warshipClass => warshipClass.id === warshipId);
            if (selectedWarshipClass && selectedWarshipClass.cannons) {
                cannonSelects[index].innerHTML = '';
                projectileSelects[index].innerHTML = '';
                penetrationValues[index].value = '';
                fillSelectOptions(cannonSelects[index], selectedWarshipClass.cannons);
            }
        }
    }

    function fillProjectileSelects(nationId, warshipId, cannonId, index) {
        const selectedNation = warshipsData.find(nation => nation.id === nationId);
        if (selectedNation && selectedNation.warshipClasses) {
            const selectedWarshipClass = selectedNation.warshipClasses.find(warshipClass => warshipClass.id === warshipId);
            if (selectedWarshipClass && selectedWarshipClass.cannons) {
                const selectedCannon = selectedWarshipClass.cannons.find(cannon => cannon.id === cannonId);
                projectileSelects[index].innerHTML = '';
                penetrationValues[index].value = ''
                fillSelectOptions(projectileSelects[index], selectedCannon.projectiles);
            }
        }
    }

    function fillPenetrationValue(nationId, warshipId, cannonId, projectileId, index) {
        const selectedNation = warshipsData.find(nation => nation.id === nationId);
        if (selectedNation && selectedNation.warshipClasses) {
            const selectedWarshipClass = selectedNation.warshipClasses.find(warshipClass => warshipClass.id === warshipId);
            if (selectedWarshipClass && selectedWarshipClass.cannons) {
                const selectedCannon = selectedWarshipClass.cannons.find(cannon => cannon.id === cannonId);
                if (selectedCannon && selectedCannon.projectiles) {
                    const selectedProjectile = selectedCannon.projectiles.find(projectile => projectile.id === projectileId);
                    penetrationValues[index].value = selectedProjectile.perforation;
                    penetrationValues[index].setAttribute("data-pNomen", selectedProjectile.nomen);
                    penetrationValues[index].setAttribute("data-cCaliber", selectedCannon.caliber);
                }
            }
        }
    }

    for (let i = 0; i < nationSelects.length; i++) fillSelectOptions(nationSelects[i], warshipsData.map(nation => ({
        id: nation.id, name: nation.name
    })));


    nationSelects.forEach((select, index) => {
        select.addEventListener('change', (event) => {
            const nationId = event.target.value;
            warshipSelects[index].innerHTML = '';
            cannonSelects[index].innerHTML = '';
            projectileSelects[index].innerHTML = '';
            penetrationValues[index].value = '';
            fillWarshipSelects(nationId, index);
            fillCannonSelects(nationId, warshipSelects[index].value, index);
            fillProjectileSelects(nationId, warshipSelects[index].value, cannonSelects[index].value, index);
            fillPenetrationValue(nationId, warshipSelects[index].value, cannonSelects[index].value, projectileSelects[index].value, index);
        });
    });

    warshipSelects.forEach((select, index) => {
        select.addEventListener('change', (event) => {
            const warshipId = event.target.value;
            projectileSelects[index].innerHTML = '';
            fillCannonSelects(nationSelects[index].value, warshipId, index);
            fillProjectileSelects(nationSelects[index].value, warshipId, cannonSelects[index].value, index);
            fillPenetrationValue(nationSelects[index].value, warshipId, cannonSelects[index].value, projectileSelects[index].value, index);
        });
    });

    cannonSelects.forEach((select, index) => {
        select.addEventListener('change', (event) => {
            const cannonId = event.target.value;
            fillProjectileSelects(nationSelects[index].value, warshipSelects[index].value, cannonId, index);
            fillPenetrationValue(nationSelects[index].value, warshipSelects[index].value, cannonId, projectileSelects[index].value, index);
        });
    });

    projectileSelects.forEach((select, index) => {
        select.addEventListener('change', (event) => {
            const projectileId = event.target.value;
            fillPenetrationValue(nationSelects[index].value, warshipSelects[index].value, cannonSelects[index].value, projectileId, index);
        });
    });
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
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("header");
    header.classList.add("card-header", "flex-m");
    header.textContent = data[(title === "results") ? "results" : "title"][locale];

    const form = document.createElement("form");
    form.classList.add("flex-m");
    form.setAttribute("id", `armor-pen-${title}`);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < 3; j++) {

            let inputGroup = document.createElement("div");
            inputGroup.classList.add("flex-m", ((title === "results") ? "output-group" : "input-group"));

            const inputLabel = document.createElement("label");
            inputLabel.textContent = (i !== 0) ? "" : data.labels[(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')][locale];
            inputLabel.setAttribute("for", `${(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')}-value-${((title === "results") ? "output" : "input")}-${i}`);

            const inputValue = document.createElement("input");
            inputValue.type = "number";
            inputValue.placeholder = data.placeholders[(j === 0) ? 'range' : ((j === 1) ? 'pen' : 'angle')][locale];
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
        button.textContent = data.button[locale];
        button.addEventListener("click", calculatePenetration);
        form.appendChild(button);
    }

    card.appendChild(header);
    card.appendChild(form);
}