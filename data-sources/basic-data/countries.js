const data = {
    sovereign: [{
        id: "ag",
        title: {es: "Antigua y Barbuda", en: "Antigua and Barbuda", pt: "Antígua e Barbuda", ru: "Антигуа и Барбуда"},
        warships: {
            es: "Buques de Antigua y Barbuda",
            en: "Antigua and Barbuda Warships",
            pt: "Navios de Antígua e Barbuda",
            ru: "Военные корабли Антигуа и Барбуда"
        },
        colors: {
            primary: {r: 206, g: 17, b: 38},
            secondary: {r: 0, g: 0, b: 0},
            tertiary: {r: 0, g: 114, b: 198},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "ar", title: {es: "Argentina", en: "Argentina", pt: "Argentina", ru: "Аргентина"}, warships: {
            es: "Buques Argentinos",
            en: "Argentinian Warships",
            pt: "Navios Argentinos",
            ru: "Аргентинские военные корабли"
        }, colors: {
            primary: {r: 116, g: 172, b: 223},
            secondary: {r: 246, g: 180, b: 14},
            tertiary: {r: 133, g: 52, b: 10},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "bs", title: {es: "Bahamas", en: "Bahamas", pt: "Bahamas", ru: "Багамские острова"}, warships: {
            es: "Buques de Bahamas",
            en: "Bahamas Warships",
            pt: "Navios das Bahamas",
            ru: "Военные корабли Багамских островов"
        }, colors: {
            primary: {r: 0, g: 119, b: 139},
            tertiary: {r: 251, g: 195, b: 43},
            secondary: {r: 4, g: 4, b: 4},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "bb", title: {es: "Barbados", en: "Barbados", pt: "Barbados", ru: "Барбадос"}, warships: {
            es: "Buques de Barbados", en: "Barbados Warships", pt: "Navios de Barbados", ru: "Военные корабли Барбадоса"
        }, colors: {
            primary: {r: 4, g: 36, b: 124},
            secondary: {r: 251, g: 195, b: 35},
            tertiary: {r: 7, g: 7, b: 4},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "bz",
        title: {es: "Belice", en: "Belize", pt: "Belize", ru: "Белиз"},
        warships: {es: "Buques de Belice", en: "Belize Warships", pt: "Navios de Belize", ru: "Военные корабли Белиза"},
        colors: {
            primary: {r: 20, g: 20, b: 148},
            secondary: {r: 218, g: 16, b: 30},
            tertiary: {r: 203, g: 208, b: 187},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "bo", title: {es: "Bolivia", en: "Bolivia", pt: "Bolívia", ru: "Боливия"}, warships: {
            es: "Buques de Bolivia", en: "Bolivia Warships", pt: "Navios da Bolívia", ru: "Военные корабли Боливии"
        }, colors: {
            primary: {r: 212, g: 44, b: 28},
            secondary: {r: 252, g: 228, b: 4},
            tertiary: {r: 4, g: 124, b: 52},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "br", title: {es: "Brasil", en: "Brazil", pt: "Brasil", ru: "Бразилия"}, warships: {
            es: "Buques de Brasil", en: "Brazilian Warships", pt: "Navios do Brasil", ru: "Военные корабли Бразилии"
        }, colors: {
            primary: {r: 4, g: 156, b: 59},
            secondary: {r: 254, g: 218, b: 4},
            tertiary: {r: 5, g: 37, b: 116},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "cl",
        title: {es: "Chile", en: "Chile", pt: "Chile", ru: "Чили"},
        warships: {es: "Buques de Chile", en: "Chilean Warships", pt: "Navios do Chile", ru: "Военные корабли Чили"},
        colors: {
            primary: {r: 220, g: 44, b: 28},
            secondary: {r: 196, g: 207, b: 233},
            tertiary: {r: 4, g: 52, b: 164},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "co", title: {es: "Colombia", en: "Colombia", pt: "Colômbia", ru: "Колумбия"}, warships: {
            es: "Buques de Colombia", en: "Colombian Warships", pt: "Navios da Colômbia", ru: "Военные корабли Колумбии"
        }, colors: {
            primary: {r: 252, g: 204, b: 4},
            secondary: {r: 6, g: 51, b: 131},
            tertiary: {r: 204, g: 20, b: 44},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "cr", title: {es: "Costa Rica", en: "Costa Rica", pt: "Costa Rica", ru: "Коста-Рика"}, warships: {
            es: "Buques de Costa Rica",
            en: "Costa Rican Warships",
            pt: "Navios da Costa Rica",
            ru: "Военные корабли Коста-Рики"
        }, colors: {
            primary: {r: 4, g: 20, b: 140},
            secondary: {r: 220, g: 44, b: 28},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "cu",
        title: {es: "Cuba", en: "Cuba", pt: "Cuba", ru: "Куба"},
        warships: {es: "Buques de Cuba", en: "Cuban Warships", pt: "Navios de Cuba", ru: "Военные корабли Кубы"},
        colors: {
            primary: {r: 4, g: 44, b: 139},
            secondary: {r: 203, g: 21, b: 21},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "dm", title: {
            es: "República Dominicana",
            en: "Dominican Republic",
            pt: "República Dominicana",
            ru: "Доминиканская Республика"
        }, warships: {
            es: "Buques de República Dominicana",
            en: "Dominican Warships",
            pt: "Navios da República Dominicana",
            ru: "Военные корабли Доминиканской Республики"
        }, colors: {
            primary: {r: 203, g: 20, b: 36},
            secondary: {r: 4, g: 44, b: 99},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "ec", title: {es: "Ecuador", en: "Ecuador", pt: "Equador", ru: "Эквадор"}, warships: {
            es: "Buques de Ecuador", en: "Ecuadorian Warships", pt: "Navios do Equador", ru: "Военные корабли Эквадора"
        }, colors: {
            primary: {r: 251, g: 219, b: 4},
            secondary: {r: 8, g: 79, b: 162},
            tertiary: {r: 231, g: 30, b: 37},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gd", title: {es: "Granada", en: "Grenada", pt: "Granada", ru: "Гренада"}, warships: {
            es: "Buques de Granada", en: "Grenadian Warships", pt: "Navios de Granada", ru: "Военные корабли Гренады"
        }, colors: {
            primary: {r: 204, g: 20, b: 36},
            secondary: {r: 247, g: 208, b: 21},
            tertiary: {r: 4, g: 124, b: 91},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gt", title: {es: "Guatemala", en: "Guatemala", pt: "Guatemala", ru: "Гватемала"}, warships: {
            es: "Buques de Guatemala",
            en: "Guatemalan Warships",
            pt: "Navios da Guatemala",
            ru: "Военные корабли Гватемалы"
        }, colors: {
            primary: {r: 76, g: 148, b: 212},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 104, g: 126, b: 60},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gy", title: {es: "Guyana", en: "Guyana", pt: "Guiana", ru: "Гайана"}, warships: {
            es: "Buques de Guyana", en: "Guyanese Warships", pt: "Navios da Guiana", ru: "Военные корабли Гайаны"
        }, colors: {
            primary: {r: 44, g: 148, b: 108},
            secondary: {r: 250, g: 198, b: 27},
            tertiary: {r: 187, g: 28, b: 43},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "ht",
        title: {es: "Haití", en: "Haiti", pt: "Haiti", ru: "Гаити"},
        warships: {es: "Buques de Haití", en: "Haitian Warships", pt: "Navios do Haiti", ru: "Военные корабли Гаити"},
        colors: {
            primary: {r: 4, g: 36, b: 155},
            secondary: {r: 211, g: 20, b: 51},
            tertiary: {r: 57, g: 112, b: 35},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "hn", title: {es: "Honduras", en: "Honduras", pt: "Honduras", ru: "Гондурас"}, warships: {
            es: "Buques de Honduras", en: "Honduran Warships", pt: "Navios de Honduras", ru: "Военные корабли Гондураса"
        }, colors: {
            primary: {r: 0, g: 188, b: 228},
            secondary: {r: 78, g: 208, b: 236},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "jm", title: {es: "Jamaica", en: "Jamaica", pt: "Jamaica", ru: "Ямайка"}, warships: {
            es: "Buques de Jamaica", en: "Jamaican Warships", pt: "Navios da Jamaica", ru: "Военные корабли Ямайки"
        }, colors: {
            primary: {r: 4, g: 116, b: 76},
            secondary: {r: 251, g: 187, b: 27},
            tertiary: {r: 4, g: 4, b: 4},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "mx", title: {es: "México", en: "Mexico", pt: "México", ru: "Мексика"}, warships: {
            es: "Buques de México", en: "Mexican Warships", pt: "Navios do México", ru: "Военные корабли Мексики"
        }, colors: {
            primary: {r: 4, g: 107, b: 68},
            secondary: {r: 203, g: 20, b: 36},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "ni", title: {es: "Nicaragua", en: "Nicaragua", pt: "Nicarágua", ru: "Никарагуа"}, warships: {
            es: "Buques de Nicaragua",
            en: "Nicaraguan Warships",
            pt: "Navios da Nicarágua",
            ru: "Военные корабли Никарагуа"
        }, colors: {
            primary: {r: 4, g: 100, b: 196},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 4, g: 100, b: 196},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "pa", title: {es: "Panamá", en: "Panama", pt: "Panamá", ru: "Панама"}, warships: {
            es: "Buques de Panamá", en: "Panamanian Warships", pt: "Navios do Panamá", ru: "Военные корабли Панамы"
        }, colors: {
            primary: {r: 4, g: 36, b: 84},
            secondary: {r: 220, g: 20, b: 28},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "py", title: {es: "Paraguay", en: "Paraguay", pt: "Paraguai", ru: "Парагвай"}, warships: {
            es: "Buques de Paraguay",
            en: "Paraguayan Warships",
            pt: "Navios do Paraguai",
            ru: "Военные корабли Парагвая"
        }, colors: {
            primary: {r: 212, g: 44, b: 28},
            secondary: {r: 4, g: 60, b: 172},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "pe",
        title: {es: "Perú", en: "Peru", pt: "Peru", ru: "Перу"},
        warships: {es: "Buques de Perú", en: "Peruvian Warships", pt: "Navios do Peru", ru: "Военные корабли Перу"},
        colors: {
            primary: {r: 224, g: 20, b: 36},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 224, g: 20, b: 36},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "pr", title: {es: "Puerto Rico", en: "Puerto Rico", pt: "Porto Rico", ru: "Пуэрто-Рико"}, warships: {
            es: "Buques de Puerto Rico",
            en: "Puerto Rican Warships",
            pt: "Navios de Porto Rico",
            ru: "Военные корабли Пуэрто-Рико"
        }, colors: {
            primary: {r: 235, g: 4, b: 4},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 4, g: 68, b: 251},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "kn", title: {
            es: "San Cristóbal y Nieves",
            en: "Saint Kitts and Nevis",
            pt: "São Cristóvão e Nevis",
            ru: "Сент-Китс и Невис"
        }, warships: {
            es: "Buques de San Cristóbal y Nieves",
            en: "St. Kitts and Nevis Warships",
            pt: "Navios de São Cristóvão e Nevis",
            ru: "Военные корабли Сент-Китс и Невис"
        }, colors: {
            primary: {r: 4, g: 148, b: 59},
            secondary: {r: 204, g: 20, b: 43},
            tertiary: {r: 4, g: 4, b: 4},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "lc", title: {es: "Santa Lucía", en: "Saint Lucia", pt: "Santa Lúcia", ru: "Сент-Люсия"}, warships: {
            es: "Buques de Santa Lucía",
            en: "St. Lucia Warships",
            pt: "Navios de Santa Lúcia",
            ru: "Военные корабли Сент-Люсии"
        }, colors: {
            primary: {r: 100, g: 204, b: 252},
            secondary: {r: 247, g: 213, b: 39},
            tertiary: {r: 8, g: 7, b: 6},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "vc", title: {
            es: "San Vicente y Granadinas",
            en: "Saint Vincent and the Grenadines",
            pt: "São Vicente e Granadinas",
            ru: "Сент-Винсент и Гренадины"
        }, warships: {
            es: "Buques de San Vicente y Granadinas",
            en: "St. Vincent and the Grenadines Warships",
            pt: "Navios de São Vicente e Granadinas",
            ru: "Военные корабли Сент-Винсент и Гренадины"
        }, colors: {
            primary: {r: 251, g: 211, b: 36},
            secondary: {r: 4, g: 124, b: 44},
            tertiary: {r: 4, g: 36, b: 116},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "sr", title: {es: "Surinam", en: "Suriname", pt: "Suriname", ru: "Суринам"}, warships: {
            es: "Buques de Surinam", en: "Surinamese Warships", pt: "Navios do Suriname", ru: "Военные корабли Суринама"
        }, colors: {
            primary: {r: 180, g: 12, b: 44},
            secondary: {r: 52, g: 124, b: 60},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "tt",
        title: {es: "Trinidad y Tobago", en: "Trinidad and Tobago", pt: "Trinidad e Tobago", ru: "Тринидад и Тобаго"},
        warships: {
            es: "Buques de Trinidad y Tobago",
            en: "Trinidad and Tobago Warships",
            pt: "Navios de Trinidad e Tobago",
            ru: "Военные корабли Тринидада и Тобаго"
        },
        colors: {
            primary: {r: 220, g: 28, b: 52},
            secondary: {r: 5, g: 5, b: 5},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "uy", title: {es: "Uruguay", en: "Uruguay", pt: "Uruguai", ru: "Уругвай"}, warships: {
            es: "Buques de Uruguay", en: "Uruguayan Warships", pt: "Navios do Uruguai", ru: "Военные корабли Уругвая"
        }, colors: {
            primary: {r: 4, g: 60, b: 172},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 193, g: 145, b: 29},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "ve", title: {es: "Venezuela", en: "Venezuela", pt: "Venezuela", ru: "Венесуэла"}, warships: {
            es: "Buques de Venezuela",
            en: "Venezuelan Warships",
            pt: "Navios da Venezuela",
            ru: "Военные корабли Венесуэлы"
        }, colors: {
            primary: {r: 252, g: 204, b: 4},
            tertiary: {r: 7, g: 37, b: 122},
            secondary: {r: 204, g: 20, b: 44},
            text: {r: 255, g: 255, b: 255}
        }
    }], nonSovereign: [{
        id: "ai", title: {es: "Anguila", en: "Anguilla", pt: "Anguila", ru: "Ангилья"}, warships: {
            es: "Buques de Anguila", en: "Anguillian Warships", pt: "Navios de Anguila", ru: "Военные корабли Ангильи"
        }, colors: {
            primary: {r: 0, g: 45, b: 114},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 0, b: 0},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "aw", title: {es: "Aruba", en: "Aruba", pt: "Aruba", ru: "Аруба"}, warships: {}, colors: {
            primary: {r: 251, g: 201, b: 61},
            secondary: {r: 0, g: 56, b: 168},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "bm", title: {es: "Bermudas", en: "Bermuda", pt: "Bermudas", ru: "Бермудские острова"}, warships: {
            es: "Buques de Bermudas", en: "Bermudian Warships", pt: "Navios de Bermudas", ru: "Военные корабли Бермуд"
        }, colors: {
            primary: {r: 56, g: 99, b: 141},
            secondary: {r: 0, g: 0, b: 0},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "bq", title: {es: "Bonaire", en: "Bonaire", pt: "Bonaire", ru: "Бонайре"}, warships: {
            es: "Buques de Bonaire", en: "Bonaire Warships", pt: "Navios de Bonaire", ru: "Военные корабли Бонайре"
        }, colors: {
            primary: {r: 255, g: 51, b: 0},
            secondary: {r: 0, g: 56, b: 168},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "cw", title: {es: "Curazao", en: "Curaçao", pt: "Curaçao", ru: "Кюрасао"}, warships: {
            es: "Buques de Curazao", en: "Curaçaoan Warships", pt: "Navios de Curaçao", ru: "Военные корабли Кюрасао"
        }, colors: {
            primary: {r: 206, g: 17, b: 38},
            secondary: {r: 0, g: 85, b: 164},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gl", title: {es: "Groenlandia", en: "Greenland", pt: "Groenlândia", ru: "Гренландия"}, warships: {
            es: "Buques de Groenlandia",
            en: "Greenlandic Warships",
            pt: "Navios da Groenlândia",
            ru: "Военные корабли Гренландии"
        }, colors: {
            primary: {r: 0, g: 44, b: 95},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gp", title: {es: "Guadalupe", en: "Guadeloupe", pt: "Guadalupe", ru: "Гваделупа"}, warships: {
            es: "Buques de Guadalupe",
            en: "Guadeloupe Warships",
            pt: "Navios de Guadalupe",
            ru: "Военные корабли Гваделупы"
        }, colors: {
            primary: {r: 0, g: 85, b: 164},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gf",
        title: {es: "Guayana", en: "French Guiana", pt: "Guiana Francesa", ru: "Французская Гвиана"},
        warships: {
            es: "Buques de Guayana",
            en: "French Guianese Warships",
            pt: "Navios da Guiana Francesa",
            ru: "Военные корабли Французской Гвианы"
        },
        colors: {
            primary: {r: 0, g: 49, b: 122},
            secondary: {r: 239, g: 65, b: 53},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "cp",
        title: {es: "Isla Clipperton", en: "Clipperton Island", pt: "Ilha Clipperton", ru: "Остров Клиппертон"},
        warships: {
            es: "Buques de Isla Clipperton",
            en: "Clipperton Island Warships",
            pt: "Navios da Ilha Clipperton",
            ru: "Военные корабли острова Клиппертон"
        },
        colors: {
            primary: {r: 0, g: 45, b: 114},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 0, b: 0},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "um",
        title: {es: "Isla de Navaza", en: "Navassa Island", pt: "Ilha de Navassa", ru: "Остров Наваса"},
        warships: {
            es: "Buques de Isla de Navaza",
            en: "Navassa Island Warships",
            pt: "Navios da Ilha de Navassa",
            ru: "Военные корабли острова Наваса"
        },
        colors: {
            primary: {r: 0, g: 51, b: 153},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "ky",
        title: {es: "Islas Caimán", en: "Cayman Islands", pt: "Ilhas Cayman", ru: "Каймановы острова"},
        warships: {
            es: "Buques de Islas Caimán",
            en: "Caymanian Warships",
            pt: "Navios das Ilhas Cayman",
            ru: "Военные корабли Каймановых островов"
        },
        colors: {
            primary: {r: 0, g: 62, b: 125},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "gs", title: {
            es: "Georgias y Sandwich del Sur",
            en: "South Georgia and the South Sandwich Islands",
            pt: "Geórgia do Sul e Ilhas Sandwich do Sul",
            ru: "Южная Георгия и Южные Сандвичевы острова"
        }, warships: {
            es: "Buques de Georgias y Sandwich del Sur",
            en: "South Georgia and the South Sandwich Islands Warships",
            pt: "Navios da Geórgia do Sul e Ilhas Sandwich do Sul",
            ru: "Военные корабли Южной Георгии и Южных Сандвичевых островов"
        }, colors: {
            primary: {r: 0, g: 56, b: 168},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "fk",
        title: {es: "Islas Malvinas", en: "Falkland Islands", pt: "Ilhas Malvinas", ru: "Фолклендские острова"},
        warships: {
            es: "Buques de Islas Malvinas",
            en: "Falkland Island Warships",
            pt: "Navios das Ilhas Malvinas",
            ru: "Военные корабли Фолклендских островов"
        },
        colors: {
            primary: {r: 0, g: 53, b: 114},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "tc", title: {
            es: "Islas Turcas y Caicos",
            en: "Turks and Caicos Islands",
            pt: "Ilhas Turks e Caicos",
            ru: "Теркс и Кайкос"
        }, warships: {
            es: "Buques de Islas Turcas y Caicos",
            en: "Turks and Caicos Islands Warships",
            pt: "Navios das Ilhas Turks e Caicos",
            ru: "Военные корабли Теркс и Кайкос"
        }, colors: {
            primary: {r: 0, g: 45, b: 114},
            secondary: {r: 255, g: 255, b: 255},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }, {
        id: "vi", title: {
            es: "Islas Vírgenes (EE. UU.)",
            en: "Virgin Islands (U.S.)",
            pt: "Ilhas Virgens (EUA)",
            ru: "Виргинские острова (США)"
        }, warships: {
            es: "Buques de Islas Vírgenes (EE. UU.)",
            en: "Virgin Islands (U.S.) Warships",
            pt: "Navios das Ilhas Virgens (EUA)",
            ru: "Военные корабли Виргинских островов (США)"
        }, colors: {
            primary: {r: 206, g: 17, b: 38},
            secondary: {r: 0, g: 56, b: 168},
            tertiary: {r: 255, g: 255, b: 255},
            text: {r: 255, g: 255, b: 255}
        }
    }]
};

export {data}