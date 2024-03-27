const data = {
    description: {
        es: "Esta plataforma multilenguaje está dedicada a recopilar y difundir Datos, Información y Conocimiento Histórico y Técnico sobre los Buques de Guerra de Latinoamérica desde los años de la Independencia hasta el Presente.",
        en: "This multilingual platform is dedicated to collecting and disseminating Data, Information, and Historical and Technical Knowledge about Warships of Latin America from the years of Independence to the Present.",
        pt: "Esta plataforma multilíngue é dedicada a coletar e disseminar Dados, Informações e Conhecimento Histórico e Técnico sobre os Navios de Guerra da América Latina desde os anos da Independência até o Presente.",
        ru: "Эта многоязычная платформа посвящена сбору и распространению данных, информации и исторических и технических знаний о военных кораблях Латинской Америки с момента независимости до настоящего времени."
    }, themes: {
        default: "dark", darkTheme: {
            es: "Modo Oscuro", en: "Dark Mode", pt: "Modo Escuro", ru: "Темный режим"
        }, lightTheme: {
            es: "Modo Claro", en: "Light Mode", pt: "Modo Claro", ru: "Светлый режим"
        }
    }, locales: {
        default: "es", es: {
            id: "es", name: "Español", icon: "mx",
        }, en: {
            id: "en", name: "English", icon: "us",
        }, pt: {
            id: "pt", name: "Português", icon: "br",
        }, ru: {
            id: "ru", name: "Русский", icon: "ru",
        }
    }, views: [{
        id: "index", reference: "", icon: "home", hrAfter: true, disabled: false, title: {
            es: "Inicio", en: "Home", pt: "Início", ru: "Домой"
        }, sections: [{
            id: "navigation", title: {
                es: "Contenidos del sitio", en: "Site contents", pt: "Conteúdo do site", ru: "Содержание сайта"
            }
        }, {
            id: "latest-news", title: {
                es: "Novedades destacadas",
                en: "Highlighted news",
                pt: "Novidades em destaque",
                ru: "Выделенные новости"
            }
        }, {
            id: "featured-articles", title: {
                es: "Artículos destacados", en: "Features Articles", pt: "Artigos em destaque", ru: "Выдающиеся статьи"
            }
        }]
    }, {
        id: "armies", reference: "armies.html", icon: "person-military-rifle", hrAfter: false, disabled: true, title: {
            es: "Armadas", en: "Navies", pt: "Marinhas", ru: "Военно-морские силы"
        }
    }, {
        id: "aircraft", reference: "aircraft.html", icon: "jet-fighter-up", hrAfter: false, disabled: true, title: {
            es: "Aeronaves", en: "Aircraft", pt: "Aeronaves", ru: "Самолёты"
        }
    }, {
        id: "warships", reference: "warships.html", icon: "ship", hrAfter: false, disabled: false, title: {
            es: "Buques", en: "Warships", pt: "Navios", ru: "Военные корабли"
        }
    }, {
        id: "armaments", reference: "armaments.html", icon: "gun", hrAfter: true, disabled: true, title: {
            es: "Armamentos", en: "Armaments", pt: "Armamentos", ru: "Вооружение"
        }
    }, {
        id: "technologies", reference: "technologies.html", icon: "microchip", hrAfter: false, disabled: true, title: {
            es: "Tecnologías", en: "Technologies", pt: "Tecnologias", ru: "Технологии"
        }
    }, {
        id: "policies", reference: "policies.html", icon: "landmark", hrAfter: false, disabled: true, title: {
            es: "Políticas Navales", en: "Naval Policies", pt: "Políticas Navais", ru: "Военная политика"
        }
    }, {
        id: "terms", reference: "terms.html", icon: "spell-check", hrAfter: true, disabled: true, title: {
            es: "Terminologías", en: "Terminologies", pt: "Terminologias", ru: "Терминологии"
        }
    }, {
        id: "cinema", reference: "cinema.html", icon: "film", hrAfter: false, disabled: true, title: {
            es: "Cinematografía y Música",
            en: "Cinematography & Music",
            pt: "Cinematografia e Música",
            ru: "Кинематография и музыка"
        }
    }, {
        id: "gaming", reference: "gaming.html", icon: "gamepad", hrAfter: true, disabled: true, title: {
            es: "Videojuegos", en: "Gaming", pt: "Videojogos", ru: "Игры"
        }
    }, {
        id: "misc", reference: "misc.html", icon: "shuffle", hrAfter: false, disabled: true, title: {
            es: "Misceláneos", en: "Miscellaneous", pt: "Diversos", ru: "Разное"
        }
    }, {
        id: "docs", reference: "docs.html", icon: "file", hrAfter: false, disabled: true, title: {
            es: "Documentación", en: "Documentation", pt: "Documentação", ru: "Документация"
        }
    }, {
        id: "links", reference: "links.html", icon: "link", hrAfter: false, disabled: true, title: {
            es: "Enlaces Destacados", en: "Featured Links", pt: "Links em Destaque", ru: "Избранные ссылки"
        }
    }, {
        id: "calculations", reference: "calculations.html", icon: "calculator", hrAfter: true, disabled: false, title: {
            es: "Cálculos", en: "Calculations", pt: "Cálculos", ru: "Расчеты"
        }
    }, {
        id: "about", reference: "about.html", icon: "anchor", hrAfter: false, disabled: true, title: {
            es: "Proyecto Warships Wiki",
            en: "Warships Wiki Project",
            pt: "Projeto Warships Wiki",
            ru: "Военные корабли Вики Проекта"
        }
    }, {
        id: "faq", reference: "faq.html", icon: "question", hrAfter: false, disabled: true, title: {
            es: "Preguntas Frecuentes",
            en: "Frequently Asked Questions",
            pt: "Perguntas Frequentes",
            ru: "Часто задаваемые вопросы"
        }
    }, {
        id: "our-team", reference: "our-team.html", icon: "people-group", hrAfter: false, disabled: true, title: {
            es: "Nuestros integrantes", en: "Our Team", pt: "Nossa Equipe", ru: "Наша команда"
        }
    }, {
        id: "collaborators", reference: "collaborators.html", icon: "user-pen", hrAfter: false, disabled: true, title: {
            es: "Nuestros colaboradores", en: "Our Collaborators", pt: "Nossos Colaboradores", ru: "Наши соавторы"
        }
    }, {
        id: "partners", reference: "partners.html", icon: "handshake", hrAfter: true, disabled: true, title: {
            es: "Vuestras colaboraciones", en: "Your Contributions", pt: "Suas Contribuições", ru: "Ваши вклады"
        }
    }, {
        id: "warship", title: {
            es: "Buque", en: "Warship", pt: "Navio", ru: "Военный корабль"
        }
    }, {
        id: "warships", subId: "nation", title: {
            "es": "Buques del país", "en": "Ships of the country", "pt": "Navios do país", "ru": "Корабли страны"
        }
    }, {
        id: "warships", subId: "type", title: {
            es: "Tipos de buques del país",
            en: "Types of ships of the country",
            pt: "Tipos de navios do país",
            ru: "Типы судов страны"
        }
    }, {
        id: "armies", subId: "evolution", title: {
            "es": "Evolución de las Armadas",
            "en": "Evolution of the Navies",
            "pt": "Evolução das Marinhas",
            "ru": "Эволюция военно-морских"
        }
    }], header: {
        title: {
            es: "Wiki de Buques de Guerra",
            en: "Warships Wiki",
            pt: "Wiki de Navios de Guerra",
            ru: "Военные корабли Вики"
        }, searchBar: {
            placeholder: {
                es: "Buscar", en: "Search", pt: "Procurar", ru: "Поиск"
            }, searchIcon: {
                es: "Ícono de Búsqueda", en: "Search icon", pt: "Ícone de pesquisa", ru: "Значок поиска"
            }
        }
    }, footer: {
        donationButton: {
            id: "donation", reference: "#", icon: "hand-holding-dollar", title: {
                es: "Donaciones", en: "Donations", pt: "Doações", ru: "Пожертвования"
            }
        }, socialButtons: [{
            id: "twitter", reference: "#", icon: "twitter", title: {
                es: "Twitter", en: "Twitter", pt: "Twitter", ru: "Твиттер"
            }
        }, {
            id: "facebook", reference: "#", icon: "facebook", title: {
                es: "Facebook", en: "Facebook", pt: "Facebook", ru: "Фейсбук"
            }
        }, {
            id: "instagram", reference: "#", icon: "instagram", title: {
                es: "Instagram", en: "Instagram", pt: "Instagram", ru: "Инстаграм"
            }
        }], developerButton: {
            name: "Facundo 'Pastruken' Fernandez", reference: "#", title: {
                es: "Sitio web desarrollado por",
                en: "Website developed by",
                pt: "Site desenvolvido por",
                ru: "Сайт разработан"
            }
        }
    }
};

export {data};
