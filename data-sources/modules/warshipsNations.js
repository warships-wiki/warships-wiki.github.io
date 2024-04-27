const data = [{
    id: "ag", name: "Antigua and Barbuda"
}, {
    id: "ar", name: "República Argentina", colors: {
        primary: {r: 116, g: 172, b: 223},
        secondary: {r: 246, g: 180, b: 14},
        tertiary: {r: 133, g: 52, b: 10},
        text: {r: 255, g: 255, b: 255}
    }, warshipsTitle: {
        en: "Argentinian Warships",
        pt: "Navios Argentinos",
        es: "Buques Argentinos",
        ru: "Аргентинские военные корабли",
        it: "Argentinian Warships",
        fr: "Argentinian Warships",
        de: "Argentinian Warships",
        cn: "Argentinian Warships",
        sa: "Argentinian Warships"
    }, warshipTypes: [{
        id: "bb", warshipClasses: [{
            id: "riv", name: "Rivadavia", warships: [{
                id: "mor", name: "Moreno", introduction: [{
                    id: "intro", title: {
                        en: "Introduction",
                        pt: "Introduction",
                        es: "Introducción",
                        ru: "Introduction",
                        it: "Introduction",
                        fr: "Introduction",
                        de: "Introduction",
                        cn: "Introduction",
                        sa: "Introduction"
                    }, description: [{
                        title: {
                            en: "History",
                            pt: "History",
                            es: "Historia",
                            ru: "History",
                            it: "History",
                            fr: "History",
                            de: "History",
                            cn: "History",
                            sa: "History"
                        }, content: [{
                            en: "'Moreno' was a dreadnought battleship of the Rivadavia class, ordered in 1910 by the Argentine Navy and launched in 1911 by the American shipyards of New York Shipbuilding. It was a response to the Brazilian Minas Gerais class and to strengthen the Argentine position in the river, maritime and land disputes with Brazil, Chile and Uruguay. It was commissioned in 1915. It did not participate in world conflicts, but it was highly active in its training, surveillance and diplomatic relations tasks. In the mid-1920s, its machinery and firing systems were modernized and throughout the 1930s, complementary armaments and other equipment and structures were modified. A few years after the Second World War, the ship stopped providing active service and in 1956 it was finally decommissioned.",
                            pt: "'Moreno' foi um navio de guerra tipo dreadnought da classe Rivadavia, encomendado em 1910 pela Marinha Argentina e lançado em 1911 pelos estaleiros americanos da New York Shipbuilding. Foi uma resposta à classe Minas Gerais do Brasil e para fortalecer a posição argentina nas disputas fluviais, marítimas e terrestres com Brasil, Chile e Uruguai. Foi comissionado em 1915. Não participou de conflitos mundiais, mas foi altamente ativo em suas tarefas de treinamento, vigilância e relações diplomáticas. Em meados da década de 1920, sua maquinaria e sistemas de disparo foram modernizados e ao longo da década de 1930, armamentos complementares e outros equipamentos e estruturas foram modificados. Poucos anos após a Segunda Guerra Mundial, o navio deixou de prestar serviço ativo e em 1956 foi finalmente descomissionado.",
                            es: "'Moreno' fue un acorazado tipo dreadnought de la clase Rivadavia, encargado en 1910 por la Armada Argentina y lanzado en 1911 por los astilleros estadounidenses de New York Shipbuilding. Fue una respuesta a la clase Minas Gerais de Brasil y para fortalecer la posición argentina en las disputas fluviales, marítimas y terrestres con Brasil, Chile y Uruguay. Fue comisionado en 1915. No participó en conflictos mundiales, pero fue muy activo en tareas de entrenamiento, vigilancia y relaciones diplomáticas. A mediados de la década de 1920, su maquinaria y sistemas de disparo fueron modernizados y a lo largo de la década de 1930, se modificaron armamentos complementarios y otros equipos y estructuras. Unos años después de la Segunda Guerra Mundial, el buque dejó de prestar servicio activo y en 1956 fue finalmente dado de baja.",
                            ru: "'Морено' был линкором типа dreadnought класса Ривадавия, заказанным в 1910 году Аргентинским Военно-морским Флотом и спущенным на воду в 1911 году американской верфью New York Shipbuilding. Это был ответ на бразильский класс 'Минас Жерайс' и для укрепления позиции Аргентины в речных, морских и земельных спорах с Бразилией, Чили и Уругваем. Он был закомандован в 1915 году. Он не участвовал в мировых конфликтах, но был очень активен в своих задачах по тренировке, наблюдению и дипломатическим отношениям. В середине 1920-х годов его машина и системы стрельбы были модернизированы, а в течение 1930-х годов были модифицированы дополнительные вооружения и другое оборудование и конструкции. Через несколько лет после Второй мировой войны корабль прекратил активное обслуживание, и в 1956 году он был окончательно списан.",
                            it: "'Moreno' was a dreadnought battleship of the Rivadavia class, ordered in 1910 by the Argentine Navy and launched in 1911 by the American shipyards of New York Shipbuilding. It was a response to the Brazilian Minas Gerais class and to strengthen the Argentine position in the river, maritime and land disputes with Brazil, Chile and Uruguay. It was commissioned in 1915. It did not participate in world conflicts, but it was highly active in its training, surveillance and diplomatic relations tasks. In the mid-1920s, its machinery and firing systems were modernized and throughout the 1930s, complementary armaments and other equipment and structures were modified. A few years after the Second World War, the ship stopped providing active service and in 1956 it was finally decommissioned.",
                            fr: "'Moreno' was a dreadnought battleship of the Rivadavia class, ordered in 1910 by the Argentine Navy and launched in 1911 by the American shipyards of New York Shipbuilding. It was a response to the Brazilian Minas Gerais class and to strengthen the Argentine position in the river, maritime and land disputes with Brazil, Chile and Uruguay. It was commissioned in 1915. It did not participate in world conflicts, but it was highly active in its training, surveillance and diplomatic relations tasks. In the mid-1920s, its machinery and firing systems were modernized and throughout the 1930s, complementary armaments and other equipment and structures were modified. A few years after the Second World War, the ship stopped providing active service and in 1956 it was finally decommissioned.",
                            de: "'Moreno' was a dreadnought battleship of the Rivadavia class, ordered in 1910 by the Argentine Navy and launched in 1911 by the American shipyards of New York Shipbuilding. It was a response to the Brazilian Minas Gerais class and to strengthen the Argentine position in the river, maritime and land disputes with Brazil, Chile and Uruguay. It was commissioned in 1915. It did not participate in world conflicts, but it was highly active in its training, surveillance and diplomatic relations tasks. In the mid-1920s, its machinery and firing systems were modernized and throughout the 1930s, complementary armaments and other equipment and structures were modified. A few years after the Second World War, the ship stopped providing active service and in 1956 it was finally decommissioned.",
                            cn: "'Moreno' was a dreadnought battleship of the Rivadavia class, ordered in 1910 by the Argentine Navy and launched in 1911 by the American shipyards of New York Shipbuilding. It was a response to the Brazilian Minas Gerais class and to strengthen the Argentine position in the river, maritime and land disputes with Brazil, Chile and Uruguay. It was commissioned in 1915. It did not participate in world conflicts, but it was highly active in its training, surveillance and diplomatic relations tasks. In the mid-1920s, its machinery and firing systems were modernized and throughout the 1930s, complementary armaments and other equipment and structures were modified. A few years after the Second World War, the ship stopped providing active service and in 1956 it was finally decommissioned.",
                            sa: "'Moreno' was a dreadnought battleship of the Rivadavia class, ordered in 1910 by the Argentine Navy and launched in 1911 by the American shipyards of New York Shipbuilding. It was a response to the Brazilian Minas Gerais class and to strengthen the Argentine position in the river, maritime and land disputes with Brazil, Chile and Uruguay. It was commissioned in 1915. It did not participate in world conflicts, but it was highly active in its training, surveillance and diplomatic relations tasks. In the mid-1920s, its machinery and firing systems were modernized and throughout the 1930s, complementary armaments and other equipment and structures were modified. A few years after the Second World War, the ship stopped providing active service and in 1956 it was finally decommissioned.",
                        }, {
                            en: "'Moreno' and its twin are possibly the best dreadnought-type battleships that have ever sailed (with a 305-millimeter battery), since the set of their main and additional armament, their general protection and their mobility, made them more competent than other ships with similar characteristics and, however, with flaws in some of these aspects. The modernized battleship continued to maintain the characteristic distribution of towers on the center line and in echelon and incorporated new fire directors, anti-aircraft machine-guns, new armor-piercing projectiles and doubled the loading speed of its main battery. However, it removed the 102-millimeter tertiary battery. Protection remained the same, missing the opportunity to add anti-torpedo bulges. With the modernization of the machinery, the maximum power and speed increased and with the compartmentalization to house oil, the displacement increased considerably, even surpassing many super-dreadnoughts. In addition, the warship tested and/or incorporated optics, paravanes, seaplanes, smoke screens, sonar, and others.",
                            pt: "'Moreno' e seu gêmeo são possivelmente os melhores encouraçados do tipo dreadnought que já navegaram (com uma bateria de 305 milímetros), já que o conjunto de seu armamento principal e adicional, sua proteção geral e sua mobilidade, os tornaram mais competentes do que outros navios com características similares e, no entanto, com falhas em alguns desses aspectos. O encouraçado modernizado continuou a manter a distribuição característica de torres na linha central e em esquadra e incorporou novos diretores de tiro, metralhadoras antiaéreas, novos projéteis perfurantes de armadura e duplicou a velocidade de carregamento de sua bateria principal. No entanto, removeu a bateria terciária de 102 milímetros. A proteção permaneceu a mesma, perdendo a oportunidade de adicionar bulges antitorpedo. Com a modernização da maquinaria, a potência máxima e a velocidade aumentaram e, com a compartimentação para abrigar óleo, o deslocamento aumentou consideravelmente, até ultrapassando muitos superdreadnoughts. Além disso, o navio de guerra testou e/ou incorporou ópticas, paravanes, hidroaviões, telas de fumaça, sonar e outros.",
                            es: "'Moreno' y su gemelo son posiblemente los mejores acorazados del tipo dreadnought que hayan navegado (con una batería de 305 milímetros), ya que el conjunto de su armamento principal y adicional, su protección general y su movilidad, los hizo más competentes que otros buques con características similares y, sin embargo, con fallos en algunos de estos aspectos. El acorazado modernizado continuó manteniendo la distribución característica de torres en la línea central y en escuadrón e incorporó nuevos directores de tiro, ametralladoras antiaéreas, nuevos proyectiles perforantes de armadura y duplicó la velocidad de carga de su batería principal. Sin embargo, eliminó la batería terciaria de 102 milímetros. La protección permaneció igual, perdiendo la oportunidad de agregar bulges antitorpedo. Con la modernización de la maquinaria, la potencia máxima y la velocidad aumentaron y, con la compartimentación para alojar aceite, el desplazamiento aumentó considerablemente, incluso superando a muchos superdreadnoughts. Además, el buque de guerra probó y/o incorporó ópticas, paravanes, hidroaviones, pantallas de humo, sonar y otros.",
                            ru: "'Морено' и его близнец, возможно, являются лучшими линкорами типа дредноут, которые когда-либо ходили (с батареей калибра 305 мм), поскольку набор их основного и дополнительного вооружения, их общая защита и их мобильность делали их более компетентными, чем другие корабли с аналогичными характеристиками и, тем не менее, с недостатками в некоторых из этих аспектов. Модернизированный линкор продолжал поддерживать характерное распределение башен по центральной линии и в эшелоне и включал в себя новые директоры стрельбы, противовоздушные пулеметы, новые бронебойные снаряды и удвоенную скорость загрузки своей основной батареи. Однако он убрал терциарную батарею калибра 102 мм. Защита осталась прежней, упустив возможность добавить антиторпедные баллоны. С модернизацией механизмов увеличилась максимальная мощность и скорость, а с отсеками для хранения масла увеличилось смещение, даже превзойдя многие супердредноуты. Кроме того, военный корабль тестировал и/или внедрял оптику, параваны, гидросамолеты, дымовые завесы, гидролокаторы и другие.",
                            it: "'Moreno' and its twin are possibly the best dreadnought-type battleships that have ever sailed (with a 305-millimeter battery), since the set of their main and additional armament, their general protection and their mobility, made them more competent than other ships with similar characteristics and, however, with flaws in some of these aspects. The modernized battleship continued to maintain the characteristic distribution of towers on the center line and in echelon and incorporated new fire directors, anti-aircraft machine-guns, new armor-piercing projectiles and doubled the loading speed of its main battery. However, it removed the 102-millimeter tertiary battery. Protection remained the same, missing the opportunity to add anti-torpedo bulges. With the modernization of the machinery, the maximum power and speed increased and with the compartmentalization to house oil, the displacement increased considerably, even surpassing many super-dreadnoughts. In addition, the warship tested and/or incorporated optics, paravanes, seaplanes, smoke screens, sonar, and others.",
                            fr: "'Moreno' and its twin are possibly the best dreadnought-type battleships that have ever sailed (with a 305-millimeter battery), since the set of their main and additional armament, their general protection and their mobility, made them more competent than other ships with similar characteristics and, however, with flaws in some of these aspects. The modernized battleship continued to maintain the characteristic distribution of towers on the center line and in echelon and incorporated new fire directors, anti-aircraft machine-guns, new armor-piercing projectiles and doubled the loading speed of its main battery. However, it removed the 102-millimeter tertiary battery. Protection remained the same, missing the opportunity to add anti-torpedo bulges. With the modernization of the machinery, the maximum power and speed increased and with the compartmentalization to house oil, the displacement increased considerably, even surpassing many super-dreadnoughts. In addition, the warship tested and/or incorporated optics, paravanes, seaplanes, smoke screens, sonar, and others.",
                            de: "'Moreno' and its twin are possibly the best dreadnought-type battleships that have ever sailed (with a 305-millimeter battery), since the set of their main and additional armament, their general protection and their mobility, made them more competent than other ships with similar characteristics and, however, with flaws in some of these aspects. The modernized battleship continued to maintain the characteristic distribution of towers on the center line and in echelon and incorporated new fire directors, anti-aircraft machine-guns, new armor-piercing projectiles and doubled the loading speed of its main battery. However, it removed the 102-millimeter tertiary battery. Protection remained the same, missing the opportunity to add anti-torpedo bulges. With the modernization of the machinery, the maximum power and speed increased and with the compartmentalization to house oil, the displacement increased considerably, even surpassing many super-dreadnoughts. In addition, the warship tested and/or incorporated optics, paravanes, seaplanes, smoke screens, sonar, and others.",
                            cn: "'Moreno' and its twin are possibly the best dreadnought-type battleships that have ever sailed (with a 305-millimeter battery), since the set of their main and additional armament, their general protection and their mobility, made them more competent than other ships with similar characteristics and, however, with flaws in some of these aspects. The modernized battleship continued to maintain the characteristic distribution of towers on the center line and in echelon and incorporated new fire directors, anti-aircraft machine-guns, new armor-piercing projectiles and doubled the loading speed of its main battery. However, it removed the 102-millimeter tertiary battery. Protection remained the same, missing the opportunity to add anti-torpedo bulges. With the modernization of the machinery, the maximum power and speed increased and with the compartmentalization to house oil, the displacement increased considerably, even surpassing many super-dreadnoughts. In addition, the warship tested and/or incorporated optics, paravanes, seaplanes, smoke screens, sonar, and others.",
                            sa: "'Moreno' and its twin are possibly the best dreadnought-type battleships that have ever sailed (with a 305-millimeter battery), since the set of their main and additional armament, their general protection and their mobility, made them more competent than other ships with similar characteristics and, however, with flaws in some of these aspects. The modernized battleship continued to maintain the characteristic distribution of towers on the center line and in echelon and incorporated new fire directors, anti-aircraft machine-guns, new armor-piercing projectiles and doubled the loading speed of its main battery. However, it removed the 102-millimeter tertiary battery. Protection remained the same, missing the opportunity to add anti-torpedo bulges. With the modernization of the machinery, the maximum power and speed increased and with the compartmentalization to house oil, the displacement increased considerably, even surpassing many super-dreadnoughts. In addition, the warship tested and/or incorporated optics, paravanes, seaplanes, smoke screens, sonar, and others."
                        }]
                    }, {
                        title: {
                            en: "Specifications",
                            pt: "Specifications",
                            es: "Características",
                            ru: "Specifications",
                            it: "Specifications",
                            fr: "Specifications",
                            de: "Specifications",
                            cn: "Specifications",
                            sa: "Specifications"
                        }, content: [{
                            en: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            pt: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            es: "'Moreno (1938)' se sugiere aquí con las características que tenía antes del inicio de la Segunda Guerra Mundial. En otras palabras, representa el diseño de su clase después de su modernización y, además, con un conjunto de modificaciones adicionales que ocurrieron en los años siguientes.",
                            ru: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            it: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            fr: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            de: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            cn: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years.",
                            sa: "'Moreno (1938)' is here suggested with the characteristics that it had before the start of World War Two. In other words, it represents the design of its class after its modernization and, additionally, with a set of additional modifications that occurred in the following years."
                        }]
                    }], specs: {
                        survivability: {
                            dimensions: {
                                length: {meters: 181.3, feet: 594.8}, beam: {meters: 30.0, feet: 98.4},
                            }, displacement: {metricTons: 34130, longTons: 0}, crew: 1200, armour: {
                                citadel: {millimeters: "229 | 305-254+38 | 223", material: "krupp-steel"},
                                decks: {millimeters: "38 | 38 | 38 | 38-51-76/51", material: "nickel-steel"},
                                mainFirePower: {millimeters: "305 | 229 | 241 / 76", material: "krupp-steel"},
                                conningTower: {millimeters: "305", material: "steel"}
                            }
                        }
                    }
                }]
            }]
        }, {
            id: "altBr", name: "Almirante Brown"
        }],
    }, {id: "amp"}, {id: "ant"}, {id: "aux"}, {id: "gb"}, {id: "cr"}, {id: "dd"}, {id: "esc"}, {id: "ts"}, {id: "hyb"}, {id: "min"}, {id: "ml"}, {id: "cv"}, {
        id: "sub"
    }], warshipClasses: [{
        id: "riv", name: "Rivadavia", cannons: [{
            id: "bet-305", name: "Bethlehem 305/50", caliber: 305, len: 50, projectiles: [{
                id: "apc-gpa-gp-548", name: "APC GPA-GP", perforation: 548, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "apcbc-gpa-gp-610", name: "APCBC GPA-GP", perforation: 610, manufacturer: "Hadfield", nomen: "apcbc"
            }, {
                id: "sapc-gspa-go-478", name: "SAPC GSPA-GO", perforation: 478, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-152", name: "Bethlehem 152/50", caliber: 152, len: 50, projectiles: [{
                id: "apc-251", name: "APC", perforation: 251, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "sapc-gspa-go-215", name: "SAPC GSPA-GO", perforation: 215, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-102", name: "Bethlehem 102/50", caliber: 102, len: 50, projectiles: [{
                id: "ap-pe-mee-205", name: "AP PE-MEE", perforation: 205, manufacturer: "CATMAT", nomen: "ap"
            }, {
                id: "he-gac-aebt-152", name: "HE GAC-AEBT", perforation: 152, manufacturer: "Bethlehem", nomen: "he"
            }]
        }]
    }, {
        id: "albr", name: "Almirante Brown", cannons: [{
            id: "bet-305", name: "Bethlehem 305/50", caliber: 305, len: 50, projectiles: [{
                id: "apc-gpa-gp-548", name: "APC GPA-GP", perforation: 548, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "apcbc-gpa-gp-610", name: "APCBC GPA-GP", perforation: 610, manufacturer: "Hadfield", nomen: "apcbc"
            }, {
                id: "sapc-gspa-go-478", name: "SAPC GSPA-GO", perforation: 478, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-152", name: "Bethlehem 152/50", caliber: 152, len: 50, projectiles: [{
                id: "apc-251", name: "APC", perforation: 251, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "sapc-gspa-go-215", name: "SAPC GSPA-GO", perforation: 215, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-102", name: "Bethlehem 102/50", caliber: 102, len: 50, projectiles: [{
                id: "ap-pe-mee-205", name: "AP PE-MEE", perforation: 205, manufacturer: "CATMAT", nomen: "ap"
            }, {
                id: "he-gac-aebt-152", name: "HE GAC-AEBT", perforation: 152, manufacturer: "Bethlehem", nomen: "he"
            }]
        }]
    }]
}, {
    id: "bs", name: "Commonwealth of the Bahamas"
}, {
    id: "bb", name: "Barbados"
}, {
    id: "bz", name: "Belize"
}, {
    id: "bo", name: "Estado Plurinacional de Bolivia"
}, {
    id: "br", name: "República Federativa de Brasil", warshipClasses: [{
        id: "riv", name: "Rivadavia", cannons: [{
            id: "bet-305", name: "Bethlehem 305/50", caliber: 305, len: 50, projectiles: [{
                id: "apc-gpa-gp-548", name: "APC GPA-GP", perforation: 548, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "apcbc-gpa-gp-610", name: "APCBC GPA-GP", perforation: 610, manufacturer: "Hadfield", nomen: "apcbc"
            }, {
                id: "sapc-gspa-go-478", name: "SAPC GSPA-GO", perforation: 478, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-152", name: "Bethlehem 152/50", caliber: 152, len: 50, projectiles: [{
                id: "apc-251", name: "APC", perforation: 251, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "sapc-gspa-go-215", name: "SAPC GSPA-GO", perforation: 215, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-102", name: "Bethlehem 102/50", caliber: 102, len: 50, projectiles: [{
                id: "ap-pe-mee-205", name: "AP PE-MEE", perforation: 205, manufacturer: "CATMAT", nomen: "ap"
            }, {
                id: "he-gac-aebt-152", name: "HE GAC-AEBT", perforation: 152, manufacturer: "Bethlehem", nomen: "he"
            }]
        }]
    }, {
        id: "albr", name: "Almirante Brown", cannons: [{
            id: "bet-305", name: "Bethlehem 305/50", caliber: 305, len: 50, projectiles: [{
                id: "apc-gpa-gp-548", name: "APC GPA-GP", perforation: 548, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "apcbc-gpa-gp-610", name: "APCBC GPA-GP", perforation: 610, manufacturer: "Hadfield", nomen: "apcbc"
            }, {
                id: "sapc-gspa-go-478", name: "SAPC GSPA-GO", perforation: 478, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-152", name: "Bethlehem 152/50", caliber: 152, len: 50, projectiles: [{
                id: "apc-251", name: "APC", perforation: 251, manufacturer: "Bethlehem", nomen: "apc"
            }, {
                id: "sapc-gspa-go-215", name: "SAPC GSPA-GO", perforation: 215, manufacturer: "Bethlehem", nomen: "sapc"
            }]
        }, {
            id: "bet-102", name: "Bethlehem 102/50", caliber: 102, len: 50, projectiles: [{
                id: "ap-pe-mee-205", name: "AP PE-MEE", perforation: 205, manufacturer: "CATMAT", nomen: "ap"
            }, {
                id: "he-gac-aebt-152", name: "HE GAC-AEBT", perforation: 152, manufacturer: "Bethlehem", nomen: "he"
            }]
        }]
    }]
}, {
    id: "cl", name: "República de Chile"
}, {
    id: "co", name: "República de Colombia"
}, {
    id: "cr", name: "República de Costa Rica"
}, {
    id: "cu", name: "República de Cuba"
}, {
    id: "dm", name: "República Dominicana"
}, {
    id: "ec", name: "República del Ecuador"
}, {
    id: "gd", name: "Granada"
}, {
    id: "gt", name: "República de Guatemala"
}, {
    id: "gy", name: "Co-operative Republic of Guyana"
}, {
    id: "ht", name: "République d'Haïti"
}, {
    id: "hn", name: "República de Honduras"
}, {
    id: "jm", name: "Jamaica"
}, {
    id: "mx", name: "Estados Unidos Mexicanos"
}, {
    id: "ni", name: "República de Nicaragua"
}, {
    id: "pa", name: "República de Panamá"
}, {
    id: "py", name: "República del Paraguay"
}, {
    id: "pe", name: "República del Perú"
}, {
    id: "pr", name: "Estado Libre Asociado de Puerto Rico"
}, {
    id: "kn", name: "Saint Kitts and Nevis"
}, {
    id: "lc", name: "Saint Lucia"
}, {
    id: "vc", name: "Saint Vincent and the Grenadines"
}, {
    id: "sr", name: "Republiek Suriname"
}, {
    id: "tt", name: "Republic of Trinidad and Tobago"
}, {
    id: "uy", name: "República Oriental del Uruguay"
}, {
    id: "ve", name: "República Bolivariana de Venezuela"
}, {
    id: "ai", name: "Anguilla", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "aw", name: "Land Aruba", dependency: {id: "nl", name: "Nederland"}
}, {
    id: "bm", name: "Bermuda", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "bq", name: "Bonaire", dependency: {id: "nl", name: "Nederland"}
}, {
    id: "cw", name: "Curaçao", dependency: {id: "nl", name: "Nederland"}
}, {
    id: "gl", name: "Kalaallit Nunaat", dependency: {id: "dk", name: "Kongeriget Danmark"}
}, {
    id: "gp", name: "Guadeloupe", dependency: {id: "fr", name: "République française"}
}, {
    id: "gf", name: "Guyane française", dependency: {id: "fr", name: "République française"}
}, {
    id: "cp", name: "Île Clipperton", dependency: {id: "fr", name: "République française"}
}, {
    id: "um", name: "Navassa Island", dependency: {id: "us", name: "United States of America"}
}, {
    id: "ky", name: "Cayman Islands", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "fk", name: "Islas Malvinas", dependency: {id: "ar", name: "República Argentina"}
}, {
    id: "gs", name: "Islas Georgias del Sur", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "tc", name: "Turks and Caicos Islands", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "vi", name: "Virgin Islands", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "mq", name: "Martinique", dependency: {id: "fr", name: "République française"}
}, {
    id: "ms", name: "Montserrat", dependency: {id: "uk", name: "United Kingdom"}
}, {
    id: "bq", name: "Saba", dependency: {id: "nl", name: "Nederland"}
}, {
    id: "bl", name: "Saint-Barthélemy", dependency: {id: "fr", name: "République française"}
}, {
    id: "bq", name: "Sint Eustatius", dependency: {id: "nl", name: "Nederland"}
}, {
    id: "mf", name: "Saint-Martin", dependency: {id: "fr", name: "République française"}
}, {
    id: "sx", name: "Sint Maarten", dependency: {id: "nl", name: "Nederland"}
}, {
    dependency: {id: "fr", name: "République française"}, id: "pm", name: "Saint-Pierre-et-Miquelon"
}]

export {data}