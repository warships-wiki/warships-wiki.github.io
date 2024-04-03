const data = {
    description: {
        es: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        en: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Navies of Latin America from the years of Independence to the Present.",
        pt: "Esta plataforma multilíngue é dedicada a coletar e disseminar Dados, Informações e Conhecimento Histórico e Técnico sobre os Navios de Guerra da América Latina desde os anos da Independência até o Presente.",
        ru: "Эта многоязычная платформа посвящена сбору и распространению данных, информации и исторических и технических знаний о военных кораблях Латинской Америки с момента независимости до настоящего времени."
    }, id: "navies", title: {
        es: "Armadas", en: "Navies", pt: "Marinhas", ru: "Военно-морские силы"
    }, sections: [{
        id: "introduction", title: {
            es: "Introducción", en: "Introduction", pt: "Introdução", ru: "Введение"
        }, content: [{
            es: "América Latina suele agrupar a regiones de Norteamérica, Centroamérica, Caribe y Sudamérica, sea por sus Lenguas, por su Cultura o por una idea Supranacional. Para favorecer el interés y satisfacer el interés de los lectores en el contexto regional, vamos a incluir a todos esos Estados, Dependencias y Territorios existentes, con las excepciones de Canadá y los Estados Unidos continentales.",
            en: "Latin America usually groups regions of North America, Central America, the Caribbean, and South America, whether by their Languages, their Culture, or by a Supranational idea. To promote interest and meet the interest of readers in the regional context, we are going to include all those existing States, Dependencies, and Territories, with the exceptions of Canada and the continental United States.",
            pt: "A América Latina costuma agrupar regiões da América do Norte, América Central, Caribe e América do Sul, seja por suas Línguas, por sua Cultura ou por uma ideia Supranacional. Para promover o interesse e atender ao interesse dos leitores no contexto regional, vamos incluir todos esses Estados, Dependências e Territórios existentes, com as exceções do Canadá e dos Estados Unidos continentais.",
            ru: "Латинская Америка обычно объединяет регионы Северной Америки, Центральной Америки, Карибского бассейна и Южной Америки, будь то по языкам, культуре или сверхнациональной идее. Чтобы способствовать интересу и удовлетворять интересам читателей в региональном контексте, мы собираемся включить все эти существующие государства, зависимые территории и территории, за исключением Канады и континентальных Соединенных Штатов."
        }]
    }, {
        id: "nations", reference: "/navies/nation.html", title: {
            es: "Buques de Guerra por Nación",
            en: "Navies by Nation",
            pt: "Navios de Guerra por Nação",
            ru: "Военные корабли по нациям"
        }, content: [{
            id: "sovereign", title: {
                es: "Estados Libres o Soberanos",
                en: "Free or Sovereign States",
                pt: "Estados Livres ou Soberanos",
                ru: "Свободные или суверенные государства"
            }, subtitle: {
                es: "Enlistado de todos los buques de una nación desde los días de la Independencia hasta el Presente",
                en: "List of all ships of a nation from the days of Independence to the Present",
                pt: "Lista de todos os navios de uma nação desde os dias da Independência até o Presente",
                ru: "Список всех кораблей нации от дней независимости до настоящего времени"
            }, content: [{
                es: "En América Latina las Armadas que tradicionalmente se destacan son las Argentina, Brasil y Chile, las que se agrupan en el denominado “A-B-C” y que históricamente se han clasificado como Armadas Medias. Otras Armadas con una tradición importante son las de Colombia, Perú y Venezuela, clasificadas como Armadas Menores-Medias según el contexto.",
                en: "In Latin America, the traditionally prominent navies are those of Argentina, Brazil, and Chile, which are grouped in the so-called 'A-B-C' and historically classified as Medium Navies. Other navies with significant tradition include those of Colombia, Peru, and Venezuela, classified as Medium-Minor Navies depending on the context.",
                pt: "Na América Latina, as marinhas tradicionalmente proeminentes são as da Argentina, Brasil e Chile, que são agrupadas no chamado 'A-B-C' e historicamente classificadas como Marinhas Médias. Outras marinhas com uma tradição significativa incluem as da Colômbia, Peru e Venezuela, classificadas como Marinhas Médio-Menores dependendo do contexto.",
                ru: "В Латинской Америке традиционно выдающимися флотами являются флоты Аргентины, Бразилии и Чили, которые группируются в так называемом 'A-B-C' и исторически классифицируются как Средние флоты. Другие флоты с значительной традицией включают флоты Колумбии, Перу и Венесуэлы, классифицированные как Средние-Малые флоты в зависимости от контекста."
            }, {
                es: "La Marinha de Brasil se destacó durante las primeras décadas del siglo XIX, la Escuadra de Chile hizo lo propio a fines del siglo XIX y la Armada de Argentina lo hizo lo mismo desde inicios y hasta fines del siglo XX. Actualmente la Marinha de Brasil recuperó su prominencia hacia el siglo XXI y la Marina de Chile se encuentra casi a la par.",
                en: "The Brazilian Navy stood out during the early decades of the 19th century, the Chilean Squadron did the same in the late 19th century, and the Argentine Navy did likewise from the beginning to the end of the 20th century. Currently, the Brazilian Navy has regained its prominence towards the 21st century, and the Chilean Navy is almost on par.",
                pt: "A Marinha do Brasil destacou-se durante as primeiras décadas do século XIX, a Esquadra Chilena fez o mesmo no final do século XIX e a Marinha Argentina fez o mesmo desde o início até o final do século XX. Atualmente, a Marinha do Brasil recuperou sua proeminência em direção ao século XXI e a Marinha do Chile está quase no mesmo nível.",
                ru: "Бразильский ВМФ выделялся в начале XIX века, Чилийская Эскадра сделала то же самое в конце XIX века, а Аргентинское ВМФ делало то же самое с начала и до конца XX века. В настоящее время бразильский ВМФ вернул свою применность к XXI веку, и Чилийский ВМФ почти наравне."
            }]
        }, {
            id: "non-sovereign", title: {
                es: "Dependencias y/o Territorios No Soberanos",
                en: "Dependent Territories or Non-Sovereign Territories",
                pt: "Territórios Dependentes ou Territórios Não Soberanos",
                ru: "Зависимые территории или неполноправные территории"
            }, subtitle: {
                es: "Enlistado de todos los buques de una Dependencia o Territorio operados con asiento en estos lugares desde la Colonización hasta el Presente",
                en: "List of all ships of a Dependency or Territory operated based in these locations from Colonization to the Present",
                pt: "Lista de todos os navios de uma Dependência ou Território operados com base nesses locais desde a Colonização até o Presente",
                ru: "Список всех судов зависимости или территории, эксплуатируемых на этих местах с колонизации до настоящего времени"
            }, content: [{
                es: "Hay demarcaciones de la región, disputadas o no, que no se han caracterizado por su tradición naval, pero sí por un Estado Central que impera sobre estos y que está dispuesto a defender su soberanía sobre estas Dependencias y Territorios.",
                en: "There are demarcations in the region, disputed or not, that have not been characterized by their naval tradition, but rather by a Central State that reigns over them and is willing to defend its sovereignty over these Dependencies and Territories.",
                pt: "Existem demarcações na região, disputadas ou não, que não se caracterizaram por sua tradição naval, mas sim por um Estado Central que impera sobre elas e está disposto a defender sua soberania sobre essas Dependências e Territórios.",
                ru: "В регионе есть разграничения, спорные или нет, которые не характеризуются своей морской традицией, а скорее центральным государством, которое царит над ними и готово защищать свою суверенитет над этими зависимостями и территориями."
            }]
        }]
    }, {
        id: "not-considered", title: {
            es: "Armadas, Flotas o Fuerzas No Consideradas",
            en: "Navies, Fleets, or Forces Not Considered",
            pt: "Marinhas, Frotas ou Forças Não Consideradas",
            ru: "Военно-морские силы, флоты или силы, не рассматриваемые"
        }, content: [{
            es: "No se consideran objeto de estudio a los países regionales:",
            en: "Regional countries are not considered as subjects of study:",
            pt: "Os países regionais não são considerados objeto de estudo:",
            ru: "Региональные страны не рассматриваются как объект исследования:"
        }, {
            es: "\\bRepública de Estados Unidos de América (continental).\n\\bMonarquía Parlamentaria Federal de Canadá.",
            en: "\\bRepublic of United States of America (continental).\n\\bParliamentary Federal Monarchy of Canada.",
            pt: "\\bRepública dos Estados Unidos da América (continental).\n\\bMonarquia Parlamentar Federal do Canadá.",
            ru: "\\bРеспублика Соединенных Штатов Америки (континентальная).\n\\bПарламентская Федеральная Монархия Канады."
        }, {
            es: "Ni se consideran objeto de estudio a los países extra-regionales:",
            en: "Extra-regional countries are not considered as subjects of study:",
            pt: "Países extra-regionais não são considerados objeto de estudo:",
            ru: "Страны вне региона не рассматриваются как объект исследования:"
        }, {
            es: "\\bReino de Dinamarca.\n\\bReino de los Países Bajos.\n\\bReino Unido de Gran Bretaña e Irlanda del Norte.\n\\bRepública de Francia.",
            en: "\\bKingdom of Denmark.\n\\bKingdom of the Netherlands.\n\\bUnited Kingdom of Great Britain and Northern Ireland.\n\\bRepublic of France.",
            pt: "\\bReino da Dinamarca.\n\\bReino dos Países Baixos.\n\\bReino Unido da Grã-Bretanha e Irlanda do Norte.\n\\bRepública da França.",
            ru: "\\bКоролевство Дании.\n\\bКоролевство Нидерландов.\n\\bСоединенное Королевство Великобритании и Северной Ирландии.\n\\bФранцузская Республика."
        }]
    }, {
        id: "navigation", title: {
            es: "Contenidos del sitio", en: "Site contents", pt: "Conteúdo do site", ru: "Содержание сайта"
        }, content: [{
            id: "evolution", title: {
                es: "Evolución de las Armadas de Latinoamérica",
                en: "Evolution of Latin American Navies",
                pt: "Evolução das Marinhas da América Latina",
                ru: "Эволюция морских сил Латинской Америки"
            }, backPath: "/navies/"
        }, {
            id: "index", title: {
                es: "Menú principal", en: "Main Menu", pt: "Menu Principal", ru: "Главное меню"
            }, backPath: ""
        }]
    }, {
        id: "featured-articles", title: {
            es: "Artículos destacados", en: "Features Articles", pt: "Artigos em destaque", ru: "Выдающиеся статьи"
        }, content: [0, 3]
    }, {
        id: "notes", title: {
            es: "Notas de Observación", en: "Observation Notes", pt: "Notas de Observação", ru: "Заметки наблюдения"
        }, content: [{es: "[1] Nota", en: "[1] Note", pt: "[1] Nota", ru: "[1] Примечание"}, {
            es: "[2] Nota", en: "[2] Note", pt: "[2] Nota", ru: "[2] Примечание"
        }, {es: "[3] Nota", en: "[3] Note", pt: "[3] Nota", ru: "[3] Примечание"}]
    }, {
        id: "sources", title: {
            es: "Fuentes de Información",
            en: "Information Sources",
            pt: "Fontes de Informação",
            ru: "Источники информации"
        }, content: [{
            es: "Fuente de información primaria:",
            en: "Primary Information Source:",
            pt: "Fonte de informação primária:",
            ru: "Основной источник информации:"
        }, {
            es: "Fuente de información secundaria:",
            en: "Secondary Information Source:",
            pt: "Fonte de informação secundária:",
            ru: "Вторичный источник информации:"
        }, {
            es: "Fuente de información terciaria:",
            en: "Tertiary Information Source:",
            pt: "Fonte de informação terciária:",
            ru: "Третичный источник информации:"
        }]
    }, {
        id: "authors", title: {
            es: "Autores y Colaboradores del Artículo",
            en: "Authors and Contributors of the Article",
            pt: "Autores e Colaboradores do Artigo",
            ru: "Авторы и участники статьи"
        }, content: [{
            es: "Autores:", en: "Authors", pt: "Autores", ru: "Авторы"
        }, {
            es: "Colaboradores:", en: "Contributors", pt: "Colaboradores", ru: "Участники"
        }, {
            es: "Revisores:", en: "Reviewers", pt: "Revisores", ru: "Рецензенты"
        }]
    }, {
        id: "editions", title: {
            es: "Ediciones del Artículo", en: "Article Editions", pt: "Edições do Artigo", ru: "Редакции статьи"
        }, content: [{
            es: "Fecha de la publicación original: XX/XX/XXXX",
            en: "Original Publication Date: XX/XX/XXXX",
            pt: "Data de publicação original: XX/XX/XXXX",
            ru: "Дата первоначальной публикации: XX/XX/XXXX"
        }, {
            es: "Fecha de la última edición: XX/XX/XXXX",
            en: "Date of Last Edit: XX/XX/XXXX",
            pt: "Data da última edição: XX/XX/XXXX",
            ru: "Дата последнего редактирования: XX/XX/XXXX"
        }]

    }]
}

export {data}