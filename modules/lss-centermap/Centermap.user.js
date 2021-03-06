(function(I18n, $) {

    let LSS_CENTERMAP_STORAGE = "LSS_CENTERMAP_STORAGE";

    I18n.translations.de.lssm.centermap = {
        center: "Zentrieren",
        settings: {
            title: "Center-Map",
            choose: "Bitte auswählen",
            option1: "Standard",
            option1desc: "Vorgegebenes Zoom-Level und Zentrierung der Leitstelle.",
            option2: "Dynamisch",
            alliance: "Verbandseinsätze berücksichtigen",
            option2desc: "Karte zentriert sich so, dass alle Wachen und Einsätze sichtbar sind.",
            option3: "Voreingestellt",
            option3desc: "Karte initialisiert sich auf vorgegebene Position und Zoom-Level.",
            set: "Jetzige Position speichern"
        }
    };

    I18n.translations.en.lssm.centermap = {
        center: "Center",
        settings: {
            title: "Center-Map",
            choose: "Please select",
            option1: "Default",
            option1desc: "Default zoom level and centering on control center ",
            option2: "Dynamic",
            alliance: "Take alliance into account",
            option2desc: "Center map that all missions and stations are visible.",
            option3: "Custom",
            option3desc: "Set custom position and zoom-level.",
            set: "Save current position"
        }
    };

    I18n.translations.pl_PL.lssm.centermap = {
        center: "Centrum",
        settings: {
            title: "Centrum-Mapa",
            choose: "Proszę wybrać",
            option1: "Default",
            option1desc: "Domyślny poziom zoomu i centrowanie na centrum sterowania ",
            option2: "Dynamika",
            alliance: "Uwzględnienie sojuszu",
            option2desc: "Mapa centrum, na której widoczne są wszystkie misje i stacje.",
            option3: "Niestandardowe",
            option3desc: "Ustawianie niestandardowej pozycji i poziomu zoomu.",
            set: "Zapisz aktualną pozycję"
        }
    };

    I18n.translations.sv_SE.lssm.centermap = {
        center: "Centrum",
        settings: {
            title: "Center-Map",
            choose: "Vänligen välj",
            option1: "Standard",
            option1desc: "Standard zoomnivå och centrering på kontrollcentret ",
            option2: "Dynamisk",
            alliance: "Ta hänsyn till alliansen",
            option2desc: "Centrera kartan så att alla uppdrag och stationer är synliga.",
            option3: "Beställnings",
            option3desc: "Ställ in anpassad position och zoomnivå.",
            set: "Spara aktuell position"
        }
    };

    I18n.translations.es.lssm.centermap = {
        center: "Centro",
        settings: {
            title: "Mapa del centro",
            choose: "Por favor, seleccione",
            option1: "Predeterminado",
            option1desc: "Nivel de zoom predeterminado y centrado en el centro de control ",
            option2: "Dinámico",
            alliance: "Tener en cuenta la alianza",
            option2desc: "Mapa del centro que indica que todas las misiones y estaciones son visibles.",
            option3: "A medida",
            option3desc: "Establecer la posición personalizada y el nivel de zoom.",
            set: "Guardar la posición actual"
        }
    };

    I18n.translations.it_IT.lssm.centermap = {
        center: "Centro",
        settings: {
            title: "Mappa del centro",
            choose: "Selezionare",
            option1: "Predefinito",
            option1desc: "Livello di zoom predefinito e centratura sul centro di controllo ",
            option2: "Dinamico",
            alliance: "Prendere in considerazione l'alleanza",
            option2desc: "Mappa del centro che tutte le missioni e le stazioni sono visibili.",
            option3: "Personalizzato",
            option3desc: "Impostare la posizione personalizzata e il livello di zoom.",
            set: "Salva posizione corrente"
        }
    };

    I18n.translations.fr_FR.lssm.centermap = {
        center: "Centre",
        settings: {
            title: "Plan du centre",
            choose: "Veuillez sélectionner",
            option1: "Par défaut",
            option1desc: "Niveau de zoom par défaut et centrage sur le centre de contrôle ",
            option2: "Dynamique",
            alliance: "Tenir compte de l'alliance",
            option2desc: "Centrer la carte de manière à ce que toutes les missions et stations soient visibles.",
            option3: "Personnalisé",
            option3desc: "Réglez la position et le niveau de zoom personnalisés.",
            set: "Enregistrer la position actuelle"
        }
    };

    I18n.translations.ru_RU.lssm.centermap = {
        center: "Центр",
        settings: {
            title: "Карта-центр",
            choose: "Пожалуйста, выберите",
            option1: "По умолчанию",
            option1desc: "Уровень масштабирования по умолчанию и центр внимания на блоке управления ",
            option2: "Динамический",
            alliance: "Принять во внимание альянс",
            option2desc: "Карта центра, чтобы все миссии и станции были видны.",
            option3: "Пользовательский",
            option3desc: "Установите пользовательское положение и уровень масштабирования.",
            set: "Сохранить текущее положение"
        }
    };

    I18n.translations.nl.lssm.centermap = {
        center: "Centreren",
        settings: {
            title: "Kaart centreren",
            choose: "Selecteer een plaats",
            option1: "Standaard-instellingen",
            option1desc: "Standaard zoom-niveau en gecentreerd op meldkamer",
            option2: "Dynamisch",
            alliance: "Houdt rekening met gebouwen van teamleden",
            option2desc: "Schaal de kaart zodat alle gebouwen en meldingen zichtbaar zijn.",
            option3: "Aangepast",
            option3desc: "Kies een aangepaste locatie en zoom-niveau.",
            set: "Sla huidige positie op"
        }
    };
    let managedSettings = {
        "id": LSS_CENTERMAP_STORAGE,
        "title": I18n.t('lssm.centermap.settings.title'),
        "settings": {
            "centermap-option": {
                "default": "2",
                "ui": {
                    "label": I18n.t('lssm.centermap.settings.choose'),
                    "type": "radio",
                    "options": [
                        {
                            "title": I18n.t('lssm.centermap.settings.option1'),
                            "value": "1",
                            "description": I18n.t('lssm.centermap.settings.option1desc')
                        },
                        {
                            "title": I18n.t('lssm.centermap.settings.option2'),
                            "value": "2",
                            "description": I18n.t('lssm.centermap.settings.option2desc')
                        },
                        {
                            "title": I18n.t('lssm.centermap.settings.option3'),
                            "value": "3",
                            "description": I18n.t('lssm.centermap.settings.option3desc')
                        }]
                }
            },
            "centermap-alliance": {
                "default": false,
                "ui": {
                    "label": I18n.t('lssm.centermap.settings.alliance'),
                    "type": "checkbox",
                    "parent": "LSS_CENTERMAP_STORAGE_centermap-option_1"
                }
            },
            "centermap-center-lat": {
                "default": "",
                "ui": {
                    "label": "",
                    "type": "hidden"
                }
            },
            "centermap-center-lng": {
                "default": "",
                "ui": {
                    "label": "",
                    "type": "hidden"
                }
            },
            "centermap-zoom": {
                "default": "",
                "ui": {
                    "label": "",
                    "type": "hidden"
                }
            },
            "centermap-button": {
                "default": "",
                "ui": {
                    "label": I18n.t('lssm.centermap.settings.set'),
                    "type": "button",
                    "custom_function_event": "click",
                    "custom_function": function () {
                        let prefix = LSS_CENTERMAP_STORAGE + "_";
                        $('#' + prefix + 'centermap-center-lat').val(
                            map.getCenter().lat);
                        $('#' + prefix + 'centermap-center-lng').val(
                            map.getCenter().lng);
                        $('#' + prefix + 'centermap-zoom').val(map.getZoom());
                    },
                    "parent": LSS_CENTERMAP_STORAGE + "_centermap-option_2"
                }
            }
        }
    };

    lssm.managedSettings.register(managedSettings);

    function centerMap() {
        if (getSetting('centermap-option') === "2") {
            handleDynamicOption();
        } else if (getSetting('centermap-option') === "3") {
            handleFixedOption();
        }

    }

            function handleFixedOption() {
                map.setView([ getSetting('centermap-center-lat'),
                getSetting('centermap-center-lng') ],
                getSetting('centermap-zoom'));
            }

            function handleDynamicOption() {
                let lat_min;
                let lat_max;
                let lng_min;
                let lng_max;
                $(mission_markers).each(function() {
                    if (getSetting('centermap-alliance') || this.involved) {
                        let position = this._latlng;
                        if (position.lat < lat_min || lat_min === undefined)
                            lat_min = position.lat;
                        if (position.lat > lat_max || lat_max === undefined)
                            lat_max = position.lat;
                        if (position.lng < lng_min || lng_min === undefined)
                            lng_min = position.lng;
                        if (position.lng > lng_max || lng_max === undefined)
                            lng_max = position.lng;
                    }
                });

        $(lssm.buildings).each(function () {
            if (this.latitude < lat_min || lat_min === undefined)
                lat_min = this.latitude;
            if (this.latitude > lat_max || lat_max === undefined)
                lat_max = this.latitude;
            if (this.longitude < lng_min || lng_min === undefined)
                lng_min = this.longitude;
            if (this.longitude > lng_max || lng_max === undefined)
                lng_max = this.longitude;
        });

        map.fitBounds([[lat_min, lng_min], [lat_max, lng_max]]);
    }

    function getSetting(setting) {
        return lssm.managedSettings.getSetting(LSS_CENTERMAP_STORAGE, setting);
    }

    $(map).on('lssm-map-reload', function () {
        centerMap();
    });

    centerMap();
})(I18n, jQuery);
