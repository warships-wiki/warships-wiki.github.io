const data = {
    description: {
        cmn: "这个多语种平台致力于收集和传播有关拉丁美洲从独立年份到现在的战舰的数据、信息和历史技术知识。",
        de: "Diese mehrsprachige Plattform widmet sich der Sammlung und Verbreitung von Daten, Informationen und historischen sowie technischen Kenntnissen über Kriegsschiffe Lateinamerikas von den Unabhängigkeitsjahren bis zur Gegenwart.",
        en: "This multilanguage platform is dedicated to collecting and disseminating data, information, and historical and technical knowledge about warships of Latin America from the Independence years to the present.",
        es: "Esta plataforma multilenguaje está dedicada a recopilar y difundir Datos, Información y Conocimiento Histórico y Técnico sobre los Buques de Guerra de Latinoamérica desde los años de la Independencia hasta el Presente.",
        fr: "Cette plateforme multilingue est dédiée à la collecte et à la diffusion de données, d'informations et de connaissances historiques et techniques sur les navires de guerre d'Amérique latine depuis les années d'indépendance jusqu'à nos jours.",
        it: "Questa piattaforma multilingue è dedicata alla raccolta e diffusione di dati, informazioni e conoscenze storiche e tecniche sulle navi da guerra dell'America Latina dagli anni dell'indipendenza ai giorni nostri.",
        pt: "Esta plataforma multilíngue é dedicada a coletar e disseminar dados, informações e conhecimentos históricos e técnicos sobre os navios de guerra da América Latina desde os anos da independência até o presente.",
        ru: "Эта многоязычная платформа посвящена сбору и распространению данных, информации и исторических и технических знаний о военных кораблях Латинской Америки с времен независимости до настоящего времени.",
        sa: "تعتبر هذه المنصة متعددة اللغات مخصصة لجمع ونشر البيانات والمعلومات والمعرفة التاريخية والتقنية حول سفن الحرب في أمريكا اللاتينية منذ سنوات الاستقلال حتى الحاضر."
    }, themes: {
        default: "dark", darkTheme: {
            cmn: "暗模式",
            de: "Dunkler Modus",
            en: "Dark Mode",
            es: "Modo Oscuro",
            fr: "Mode sombre",
            it: "Modalità scura",
            pt: "Modo Escuro",
            ru: "Тёмный режим",
            sa: "الوضع الداكن"
        }, lightTheme: {
            cmn: "明亮模式",
            de: "Heller Modus",
            en: "Light Mode",
            es: "Modo Claro",
            fr: "Mode clair",
            it: "Modalità chiara",
            pt: "Modo Claro",
            ru: "Светлый режим",
            sa: "وضع النور"
        }
    }, locales: {
        default: "en", en: {
            id: "en", name: "English", icon: "us",
        }, es: {
            id: "es", name: "Español", icon: "mx",
        }, pt: {
            id: "pt", name: "Português", icon: "br",
        }, ru: {
            id: "ru", name: "Русский", icon: "ru",
        }, it: {
            id: "it", name: "Italiano", icon: "it",
        }, fr: {
            id: "fr", name: "Français", icon: "fr",
        }, de: {
            id: "de", name: "Deutsch", icon: "de",
        }, cmn: {
            id: "cmn", name: "普通话", icon: "cn",
        }, sa: {
            id: "sa", name: "اَلْعَرَبِيَّة", icon: "sa",
        }
    }, views: [{
        id: "index", reference: "", icon: "home", hrAfter: true, disabled: false, title: {
            cmn: "首页",
            de: "Startseite",
            en: "Home",
            es: "Inicio",
            fr: "Accueil",
            it: "Home",
            pt: "Início",
            ru: "Главная",
            sa: "الصفحة الرئيسية"
        }, sections: [{
            id: "navigation", title: {
                cmn: "网站内容",
                de: "Website-Inhalte",
                en: "Site Contents",
                es: "Contenidos del sitio",
                fr: "Contenu du site",
                it: "Contenuti del sito",
                pt: "Conteúdo do site",
                ru: "Содержание сайта",
                sa: "محتويات الموقع"
            }
        }, {
            id: "latest-news", title: {
                cmn: "精选新闻",
                de: "Hervorgehobene Neuigkeiten",
                en: "Featured News",
                es: "Novedades destacadas",
                fr: "Actualités en vedette",
                it: "Novità in evidenza",
                pt: "Notícias em Destaque",
                ru: "Главные новости",
                sa: "أخبار مميزة"
            }
        }, {
            id: "featured-articles", title: {
                cmn: "精选文章",
                de: "Ausgewählte Artikel",
                en: "Featured Articles",
                es: "Artículos destacados",
                fr: "Articles en vedette",
                it: "Articoli in primo piano",
                pt: "Artigos em Destaque",
                ru: "Избранные статьи",
                sa: "مقالات مميزة"
            }
        }]
    }, {
        id: "navies", reference: "navies.html", icon: "person-military-rifle", hrAfter: false, disabled: false, title: {
            cmn: "海军",
            de: "Marinen",
            en: "Navies",
            es: "Armadas",
            fr: "Marines",
            it: "Marine",
            pt: "Marinhas",
            ru: "Флоты",
            sa: "البحريات"
        }
    }, {
        id: "aircrafts", reference: "aircrafts.html", icon: "jet-fighter-up", hrAfter: false, disabled: false, title: {
            cmn: "飞机",
            de: "Luftfahrzeuge",
            en: "Aircraft",
            es: "Aeronaves",
            fr: "Aéronefs",
            it: "Aeromobili",
            pt: "Aeronaves",
            ru: "Воздушные суда",
            sa: "الطائرات"
        }
    }, {
        id: "warships", reference: "warships.html", icon: "ship", hrAfter: false, disabled: false, title: {
            cmn: "军舰",
            de: "Kriegsschiffe",
            en: "Warships",
            es: "Buques de guerra",
            fr: "Navires de guerre",
            it: "Navi da guerra",
            pt: "Navios de guerra",
            ru: "Военные корабли",
            sa: "سفن الحرب"
        }
    }, {
        id: "armaments", reference: "armaments.html", icon: "gun", hrAfter: true, disabled: false, title: {
            cmn: "武器装备",
            de: "Waffen",
            en: "Armaments",
            es: "Armamentos",
            fr: "Armements",
            it: "Armamenti",
            pt: "Armamentos",
            ru: "Вооружение",
            sa: "الأسلحة"
        }
    }, {
        id: "technologies", reference: "technologies.html", icon: "microchip", hrAfter: false, disabled: false, title: {
            cmn: "技术",
            de: "Technologien",
            en: "Technologies",
            es: "Tecnologías",
            fr: "Technologies",
            it: "Tecnologie",
            pt: "Tecnologias",
            ru: "Технологии",
            sa: "التقنيات"
        }
    }, {
        id: "policies", reference: "policies.html", icon: "landmark", hrAfter: false, disabled: false, title: {
            cmn: "海军政策",
            de: "Marinepolitik",
            en: "Naval Policies",
            es: "Políticas navales",
            fr: "Politiques maritimes",
            it: "Politiche navali",
            pt: "Políticas Navais",
            ru: "Морская политика",
            sa: "السياسات البحرية"
        }
    }, {
        id: "terms", reference: "terms.html", icon: "spell-check", hrAfter: true, disabled: false, title: {
            cmn: "术语",
            de: "Terminologien",
            en: "Terminologies",
            es: "Terminologías",
            fr: "Terminologies",
            it: "Terminologie",
            pt: "Terminologias",
            ru: "Терминология",
            sa: "مصطلحات"
        }
    }, {
        id: "cinema", reference: "cinema.html", icon: "film", hrAfter: false, disabled: false, title: {
            cmn: "电影制作与音乐",
            de: "Filmkunst und Musik",
            en: "Cinematography and Music",
            es: "Cinematografía y Música",
            fr: "Cinématographie et Musique",
            it: "Cinematografia e Musica",
            pt: "Cinematografia e Música",
            ru: "Кинематография и музыка",
            sa: "السينما والموسيقى"
        }
    }, {
        id: "gaming", reference: "gaming.html", icon: "gamepad", hrAfter: true, disabled: false, title: {
            cmn: "电子游戏",
            de: "Videospiele",
            en: "Video Games",
            es: "Videojuegos",
            fr: "Jeux vidéo",
            it: "Videogiochi",
            pt: "Jogos de Vídeo",
            ru: "Видеоигры",
            sa: "ألعاب الفيديو"
        }
    }, {
        id: "misc", reference: "misc.html", icon: "shuffle", hrAfter: false, disabled: false, title: {
            cmn: "杂项",
            de: "Verschiedenes",
            en: "Miscellaneous",
            es: "Misceláneos",
            fr: "Divers",
            it: "Varie",
            pt: "Miscelânea",
            ru: "Разное",
            sa: "متنوعات"
        }
    }, {
        id: "docs", reference: "docs.html", icon: "file", hrAfter: false, disabled: false, title: {
            cmn: "文档",
            de: "Dokumentation",
            en: "Documentation",
            es: "Documentación",
            fr: "Documentation",
            it: "Documentazione",
            pt: "Documentação",
            ru: "Документация",
            sa: "التوثيق"
        }
    }, {
        id: "links", reference: "links.html", icon: "link", hrAfter: false, disabled: false, title: {
            cmn: "精选链接",
            de: "Hervorgehobene Links",
            en: "Highlighted Links",
            es: "Enlaces Destacados",
            fr: "Liens Mis en Avant",
            it: "Link in Evidenza",
            pt: "Links Destacados",
            ru: "Выделенные ссылки",
            sa: "روابط مميزة"
        }
    }, {
        id: "calculations", reference: "calculations.html", icon: "calculator", hrAfter: true, disabled: false, title: {
            cmn: "计算",
            de: "Berechnungen",
            en: "Calculations",
            es: "Cálculos",
            fr: "Calculs",
            it: "Calcoli",
            pt: "Cálculos",
            ru: "Вычисления",
            sa: "الحسابات"
        }
    }, {
        id: "about", reference: "about.html", icon: "anchor", hrAfter: false, disabled: false, title: {
            cmn: "军舰维基项目",
            de: "Kriegsschiffe Wiki Projekt",
            en: "Warships Wiki Project",
            es: "Proyecto Warships Wiki",
            fr: "Projet Wiki Navires de Guerre",
            it: "Progetto Warships Wiki",
            pt: "Projeto Wiki de Navios de Guerra",
            ru: "Проект Википедии по военным кораблям",
            sa: "مشروع ويكي سفن الحرب"
        }
    }, {
        id: "faq", reference: "faq.html", icon: "question", hrAfter: false, disabled: false, title: {
            cmn: "常见问题",
            de: "Häufig gestellte Fragen",
            en: "Frequently Asked Questions",
            es: "Preguntas Frecuentes",
            fr: "Questions Fréquemment Posées",
            it: "Domande Frequenti",
            pt: "Perguntas Frequentes",
            ru: "Часто задаваемые вопросы",
            sa: "الأسئلة الشائعة"
        }
    }, {
        id: "our-team", reference: "our-team.html", icon: "people-group", hrAfter: false, disabled: false, title: {
            cmn: "我们的团队成员",
            de: "Unsere Teammitglieder",
            en: "Our Team Members",
            es: "Nuestros Integrantes",
            fr: "Nos Membres de l'Équipe",
            it: "I Nostri Membri del Team",
            pt: "Nossos Membros da Equipe",
            ru: "Наши участники",
            sa: "أعضاء فريقنا"
        }
    }, {
        id: "collaborators",
        reference: "collaborators.html",
        icon: "user-pen",
        hrAfter: false,
        disabled: false,
        title: {
            cmn: "我们的合作伙伴",
            de: "Unsere Mitarbeiter",
            en: "Our Collaborators",
            es: "Nuestros Colaboradores",
            fr: "Nos Collaborateurs",
            it: "I Nostri Collaboratori",
            pt: "Nossos Colaboradores",
            ru: "Наши партнёры",
            sa: "شركاؤنا"
        }
    }, {
        id: "partners", reference: "partners.html", icon: "handshake", hrAfter: true, disabled: false, title: {
            cmn: "您的合作",
            de: "Eure Zusammenarbeit",
            en: "Your Collaborations",
            es: "Vuestras Colaboraciones",
            fr: "Vos Collaborations",
            it: "Le Vostre Collaborazioni",
            pt: "Suas Colaborações",
            ru: "Ваши сотрудничества",
            sa: "تعاوناتكم"
        }
    }, {
        id: "warship", title: {
            cmn: "军舰",
            de: "Kriegsschiff",
            en: "Warship",
            es: "Buque de guerra",
            fr: "Navire de guerre",
            it: "Nave da guerra",
            pt: "Navio de guerra",
            ru: "Военный корабль",
            sa: "سفينة حربية"
        }
    }, {
        id: "warships", subId: "nation", title: {
            cmn: "国家船只",
            de: "Schiffe der Nation",
            en: "Nation's ships",
            es: "Buques de la nación",
            fr: "Navires de la nation",
            it: "Navi della nazione",
            pt: "Navios da nação",
            ru: "Корабли нации",
            sa: "سفن الأمة"
        }
    }, {
        id: "warships", subId: "type", title: {
            cmn: "国家船只的类型",
            de: "Arten von Schiffen der Nation",
            en: "Types of nation's ships",
            es: "Tipos de buques de la nación",
            fr: "Types de navires de la nation",
            it: "Tipi di navi della nazione",
            pt: "Tipos de navios da nação",
            ru: "Типы кораблей нации",
            sa: "أنواع سفن الأمة"
        }
    }, {
        id: "navies", subId: "evolution", title: {
            cmn: "海军的演变",
            de: "Entwicklung der Marinen",
            en: "Evolution of Navies",
            es: "Evolución de las Armadas",
            fr: "Évolution des marines",
            it: "Evoluzione delle marine",
            pt: "Evolução das Marinhas",
            ru: "Эволюция флотов",
            sa: "تطور البحريات"
        }
    }], header: {
        title: {
            cmn: "军舰维基",
            de: "Kriegsschiffe Wiki",
            en: "Warships Wiki",
            es: "Wiki de Buques de Guerra",
            fr: "Wiki des Navires de Guerre",
            it: "Wiki delle Navi da Guerra",
            pt: "Wiki de Navios de Guerra",
            ru: "Википедия Военных Кораблей",
            sa: "ويكي سفن الحرب"
        }
    }, footer: {
        donationButton: {
            id: "donation", reference: "#", icon: "hand-holding-dollar", title: {
                cmn: "捐赠",
                de: "Spenden",
                en: "Donations",
                es: "Donaciones",
                fr: "Dons",
                it: "Donazioni",
                pt: "Doações",
                ru: "Пожертвования",
                sa: "تبرعات"
            }
        }, socialButtons: [{
            id: "twitter", reference: "#", icon: "twitter", title: {
                cmn: "推特",
                de: "Twitter",
                en: "Twitter",
                es: "Twitter",
                fr: "Twitter",
                it: "Twitter",
                pt: "Twitter",
                ru: "Твиттер",
                sa: "تويتر"
            }
        }, {
            id: "facebook", reference: "#", icon: "facebook", title: {
                cmn: "脸书",
                de: "Facebook",
                en: "Facebook",
                es: "Facebook",
                fr: "Facebook",
                it: "Facebook",
                pt: "Facebook",
                ru: "Фейсбук",
                sa: "فيسبوك"
            }
        }, {
            id: "instagram", reference: "#", icon: "instagram", title: {
                cmn: "Instagram",
                de: "Instagram",
                en: "Instagram",
                es: "Instagram",
                fr: "Instagram",
                it: "Instagram",
                pt: "Instagram",
                ru: "Инстаграм",
                sa: "إنستجرام"
            }
        }], developerButton: {
            name: "Facundo 'Pastruken' Fernandez", reference: "#", title: {
                cmn: "网站开发者",
                de: "Website entwickelt von",
                en: "Website developed by",
                es: "Sitio web desarrollado por",
                fr: "Site web développé par",
                it: "Sito web sviluppato da",
                pt: "Website desenvolvido por",
                ru: "Веб-сайт разработан",
                sa: "الموقع الإلكتروني المطور بواسطة"
            }
        }
    }
};

export {data};
