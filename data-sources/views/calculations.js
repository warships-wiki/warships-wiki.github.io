const data = {
    description: {
        es: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        en: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        it: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        fr: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        de: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        cmn: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        sa: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        pt: "Esta plataforma multilíngue é dedicada a coletar e disseminar Dados, Informações e Conhecimento Histórico e Técnico sobre os Navios de Guerra da América Latina desde os anos da Independência até o Presente.",
        ru: "Эта многоязычная платформа посвящена сбору и распространению данных, информации и исторических и технических знаний о военных кораблях Латинской Америки с момента независимости до настоящего времени."
    }, id: "calculations", title: {
        es: "Cálculos",
        en: "Calculations",
        it: "Calculations",
        fr: "Calculations",
        de: "Calculations",
        cmn: "Calculations",
        sa: "Calculations",
        pt: "Cálculos",
        ru: "Расчеты"
    }, sections: [{
        id: "converters", title: {
            es: "Conversores",
            en: "Converters",
            it: "Converters",
            fr: "Converters",
            de: "Converters",
            cmn: "Converters",
            sa: "Converters",
            pt: "Conversores",
            ru: "Конвертеры"
        }, placeholders: {
            input: {
                es: "Introducir valor",
                en: "Enter value",
                it: "Enter value",
                fr: "Enter value",
                de: "Enter value",
                cmn: "Enter value",
                sa: "Enter value",
                pt: "Digite o valor",
                ru: "Введите значение"
            }, output: {
                es: "Resultado",
                en: "Result",
                it: "Result",
                fr: "Result",
                de: "Result",
                cmn: "Result",
                sa: "Result",
                pt: "Resultado",
                ru: "Результат"
            }, inputSelect: {
                es: "Selecciona la unidad a convertir",
                en: "Select unit to convert",
                it: "Select unit to convert",
                fr: "Select unit to convert",
                de: "Select unit to convert",
                cmn: "Select unit to convert",
                sa: "Select unit to convert",
                pt: "Selecione a unidade para converter",
                ru: "Выберите единицу для конвертации"
            }, outputSelect: {
                es: "Selecciona la unidad del resultado",
                en: "Select result unit",
                it: "Select result unit",
                fr: "Select result unit",
                de: "Select result unit",
                cmn: "Select result unit",
                sa: "Select result unit",
                pt: "Selecione a unidade de resultado",
                ru: "Выберите единицу результата"
            }
        }, types: [{
            title: {
                es: "Longitud",
                en: "Length",
                it: "Length",
                fr: "Length",
                de: "Length",
                cmn: "Length",
                sa: "Length",
                pt: "Comprimento",
                ru: "Длина"
            }, icon: "ruler", units: {
                es: ['Kilómetro', 'Metro', 'Centímetro', 'Milímetro', 'Micrómetro', 'Nanómetro', 'Milla', 'Yarda', 'Pie', 'Pulgada', 'Milla náutica'],
                en: ['Kilometre', 'Metre', 'Centimetre', 'Millimetre', 'Micrometre', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'],
                it: ['Kilometre', 'Metre', 'Centimetre', 'Millimetre', 'Micrometre', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'],
                fr: ['Kilometre', 'Metre', 'Centimetre', 'Millimetre', 'Micrometre', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'],
                de: ['Kilometre', 'Metre', 'Centimetre', 'Millimetre', 'Micrometre', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'],
                cmn: ['Kilometre', 'Metre', 'Centimetre', 'Millimetre', 'Micrometre', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'],
                sa: ['Kilometre', 'Metre', 'Centimetre', 'Millimetre', 'Micrometre', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'],
                pt: ['Quilômetro', 'Metro', 'Centímetro', 'Milímetro', 'Micrômetro', 'Nanômetro', 'Milha', 'Jarda', 'Pé', 'Polegada', 'Milha náutica'],
                ru: ['Километр', 'Метр', 'Сантиметр', 'Миллиметр', 'Микрометр', 'Манометр', 'Миля', 'Ярд', 'Фут', 'Дюйм', 'Морская миля'],
            }, conversions: {
                'kilometre': {toMain: 1000, fromMain: 0.001},
                'metre': {toMain: 1, fromMain: 1},
                'centimetre': {toMain: 0.01, fromMain: 100},
                'millimetre': {toMain: 0.001, fromMain: 1000},
                'micrometre': {toMain: 0.000001, fromMain: 1000000},
                'nanometre': {toMain: 0.000000001, fromMain: 1000000000},
                'mile': {toMain: 1609.34, fromMain: 0.000621371},
                'yard': {toMain: 0.9144, fromMain: 1.09361},
                'foot': {toMain: 0.3048, fromMain: 3.28084},
                'inch': {toMain: 0.0254, fromMain: 39.3701},
                'nautical mile': {toMain: 1852, fromMain: 0.000539957}
            }
        }, {
            title: {
                es: "Peso",
                en: "Weight",
                it: "Weight",
                fr: "Weight",
                de: "Weight",
                cmn: "Weight",
                sa: "Weight",
                pt: "Peso",
                ru: "Macca"
            }, icon: "weight-scale", units: {
                es: ['Kilogramo', 'Tonelada métrica', 'Gramo', 'Miligramo', "Microgramo", 'Tonelada larga', 'Tonelada corta', 'Stone', 'Libra', 'Onza'],
                en: ['Kilogram', 'Tonne', 'Gram', 'Milligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
                it: ['Kilogram', 'Tonne', 'Gram', 'Milligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
                fr: ['Kilogram', 'Tonne', 'Gram', 'Milligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
                de: ['Kilogram', 'Tonne', 'Gram', 'Milligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
                cmn: ['Kilogram', 'Tonne', 'Gram', 'Milligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
                sa: ['Kilogram', 'Tonne', 'Gram', 'Milligram', 'Microgram', 'Imperial Ton', 'US Ton', 'Stone', 'Pound', 'Ounce'],
                pt: ['Quilograma', 'Tonelada métrica', 'Grama', 'Miligrama', 'Micrograma', 'Tonelada de deslocamiento', 'Tonelada curta', 'Stone', 'Libra', 'Onça'],
                ru: ['Килограмм', 'Тонна', 'Грамм', 'Миллиграмм', 'Микрограмм', 'Английская тонна', 'Американская тонна', 'Стоун', 'Фунт', 'Унция']
            }, conversions: {
                'kilogram': {toMain: 1, fromMain: 1},
                'tonne': {toMain: 1000, fromMain: 0.001},
                'gram': {toMain: 0.001, fromMain: 1000},
                'milligram': {toMain: 0.000001, fromMain: 1000000},
                'microgram': {toMain: 0.000000001, fromMain: 1000000000},
                'imperial ton': {toMain: 1016.05, fromMain: 0.000984207},
                'us ton': {toMain: 907.185, fromMain: 0.00110231},
                'stone': {toMain: 6.35029, fromMain: 0.157473},
                'pound': {toMain: 0.453592, fromMain: 2.20462},
                'ounce': {toMain: 0.0283495, fromMain: 35.274}
            }
        }, {
            title: {
                es: "Velocidad",
                en: "Speed",
                it: "Speed",
                fr: "Speed",
                de: "Speed",
                cmn: "Speed",
                sa: "Speed",
                pt: "Velocidade",
                ru: "Скорость"
            }, icon: "gauge-high", units: {
                es: ['Metro por segundo', 'Kilómetro por hora', 'Milla por hora', 'Nudo', 'Pies por segundo'],
                en: ['Meter per second', 'Kilometer per hour', 'Mile per hour', 'Knot', 'Feet per second'],
                it: ['Meter per second', 'Kilometer per hour', 'Mile per hour', 'Knot', 'Feet per second'],
                fr: ['Meter per second', 'Kilometer per hour', 'Mile per hour', 'Knot', 'Feet per second'],
                de: ['Meter per second', 'Kilometer per hour', 'Mile per hour', 'Knot', 'Feet per second'],
                cmn: ['Meter per second', 'Kilometer per hour', 'Mile per hour', 'Knot', 'Feet per second'],
                sa: ['Meter per second', 'Kilometer per hour', 'Mile per hour', 'Knot', 'Feet per second'],
                pt: ['Metro por segundo', 'Quilômetro por hora', 'Milha por hora', 'Nó', 'Pés por segundo'],
                ru: ['Метр в секунду', 'Километр в час', 'Миля в час', 'Узел', 'Фут в секунду']
            }, conversions: {
                'meter per second': {toMain: 1, fromMain: 1},
                'kilometer per hour': {toMain: 0.277778, fromMain: 3.6},
                'mile per hour': {toMain: 0.44704, fromMain: 2.23694},
                'knot': {toMain: 0.514444, fromMain: 1.94384},
                'feet per second': {toMain: 0.3048, fromMain: 3.28084}
            }
        }]
    }, {
        id: "armor-pen", title: {
            en: "Armor Penetration Calculator", es: "Armor Penetration Calculator"
        }, results: {
            en: "Results", es: "Resultados"
        }, button: {
            en: "Calculate", es: "Calcular"
        }, labels: {
            range: {
                en: "Range", es: "Rango"
            }, pen: {
                en: "Penetration", es: "Penetración"
            }, angle: {
                en: "Angle", es: "Ángulo"
            }
        }, placeholders: {
            range: {
                en: "Enter range...", es: "Introduce rango..."
            }, pen: {
                en: "Enter penetration...", es: "Introduce penetración..."
            }, angle: {
                en: "Enter angle...", es: "Introduce ángulo..."
            }
        }
    }],
};

export {data};
